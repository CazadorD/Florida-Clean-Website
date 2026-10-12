import { expect, test, type Page } from '@playwright/test';

const endpoint = 'https://formspree.io/f/mgobbkpo';
// Never send real leads or other external requests from this test suite.
test.beforeEach(async ({ context }) => {
  await context.route('**/*', route => {
    if (new URL(route.request().url()).hostname === '127.0.0.1') return route.continue();
    return route.abort();
  });
});

async function fillRequired(page: Page) {
  await page.getByLabel('First Name', { exact: true }).fill('Test Owner');
  await page.getByLabel('Last Name', { exact: true }).fill('Example');
  await page.getByLabel('Email Address (optional)', { exact: true }).fill('test@example.com');
  await page.getByLabel('Phone Number', { exact: true }).fill('(202) 555-0100');
  await page.getByLabel('Street Address', { exact: true }).fill('Test address');
  await page.getByLabel('City', { exact: true }).fill('Riverview');
  await page.getByLabel('ZIP Code', { exact: true }).fill('33578');
  await page.getByRole('button', { name: 'Single Family Home', exact: true }).click();
  await page.getByRole('button', { name: 'Under 1,500 sq ft', exact: true }).click();
  await page.getByRole('button', { name: 'Within 2–4 weeks', exact: true }).click();
  await page.getByLabel('Driveway & Sidewalk', { exact: true }).check();
}

test('validates required fields and preserves entered values without sending', async ({ page }) => {
  let requests = 0;
  await page.route(endpoint, route => { requests++; return route.abort(); });
  await page.goto('/estimate');
  await page.getByLabel('First Name', { exact: true }).fill('   ');
  await page.getByLabel('Email Address (optional)', { exact: true }).fill('wrong');
  await page.getByRole('button', { name: 'Send My Free Estimate Request' }).click();
  await expect(page.getByRole('alert')).toBeFocused();
  await expect(page.getByRole('alert')).toContainText('Enter a valid email');
  await expect(page.getByRole('alert')).toContainText('Choose at least one service');
  for (const message of ['Enter your last name.', 'Enter a valid phone number.', 'Enter your street address.', 'Enter your city.', 'Enter a valid ZIP code', 'Choose your property type.', 'Choose the approximate square footage.', 'Choose when you need the service.']) {
    await expect(page.getByRole('alert')).toContainText(message);
  }
  await expect(page.getByLabel('Email Address (optional)', { exact: true })).toHaveValue('wrong');
  expect(requests).toBe(0);
});

test('Enter sends every required detail and optional message once, waits for acceptance', async ({ page }) => {
  let requests = 0;
  let body: Record<string, string> = {};
  let release!: () => void;
  const gate = new Promise<void>(resolve => { release = resolve; });
  await page.route(endpoint, async route => {
    requests++;
    body = route.request().postDataJSON();
    await gate;
    await route.fulfill({ status: 200, json: { ok: true, next: '/thanks' } });
  });
  await page.goto('/estimate?service=fence');
  await expect(page.getByLabel('Fence Cleaning', { exact: true })).toBeChecked();
  await fillRequired(page);
  await page.getByLabel('Anything else? (optional)').fill('Both sides of fence.');
  await page.getByLabel('Email Address (optional)', { exact: true }).press('Enter');
  await expect(page.getByRole('button', { name: 'Sending...' })).toBeDisabled();
  await expect(page.getByRole('heading', { name: 'Request Received! 🎉' })).toHaveCount(0);
  await page.getByRole('form').evaluate(form => {
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
  });
  release();
  await expect(page.getByRole('heading', { name: 'Request Received! 🎉' })).toBeFocused();
  expect(requests).toBe(1);
  expect(body).toMatchObject({ name: 'Test Owner Example', email: 'test@example.com', city: 'Riverview', state: 'Florida', zipCode: '33578', services: 'Driveway & Sidewalk, Fence Cleaning', phone: '(202) 555-0100', address: 'Test address', propertyType: 'Single Family Home', squareFootage: 'Under 1,500 sq ft', urgency: 'Within 2–4 weeks', message: 'Both sides of fence.', _gotcha: '' });
});

test('optional email can be omitted and confirmation uses the required phone', async ({ page }) => {
  let body: Record<string, string> = {};
  await page.route(endpoint, route => {
    body = route.request().postDataJSON();
    return route.fulfill({ status: 200, json: { ok: true, next: '/thanks' } });
  });
  await page.goto('/estimate');
  await fillRequired(page);
  await page.getByLabel('Email Address (optional)', { exact: true }).fill('   ');
  await expect(page.getByLabel('Email Address (optional)', { exact: true })).not.toHaveAttribute('required', '');
  await page.getByRole('button', { name: 'Send My Free Estimate Request' }).click();
  await expect(page.getByRole('heading', { name: 'Request Received! 🎉' })).toBeVisible();
  await expect(page.locator('main')).toContainText('by phone at (202) 555-0100');
  expect(body).not.toHaveProperty('email');
  expect(body.phone).toBe('(202) 555-0100');
});

test('server field rejection keeps data and allows successful retry', async ({ page }) => {
  let attempts = 0;
  await page.route(endpoint, route => {
    attempts++;
    return attempts === 1
      ? route.fulfill({ status: 422, json: { errors: [{ field: 'email', code: 'TYPE_EMAIL', message: 'Email rejected for test' }] } })
      : route.fulfill({ status: 200, json: { ok: true, next: '/thanks' } });
  });
  await page.goto('/estimate');
  await fillRequired(page);
  await page.getByRole('button', { name: 'Send My Free Estimate Request' }).click();
  await expect(page.getByRole('alert')).toContainText('Email rejected for test');
  await expect(page.getByLabel('First Name', { exact: true })).toHaveValue('Test Owner');
  await page.getByRole('button', { name: 'Send My Free Estimate Request' }).click();
  await expect(page.getByRole('heading', { name: 'Request Received! 🎉' })).toBeVisible();
  expect(attempts).toBe(2);
});

test('network failure does not claim success or erase data', async ({ page }) => {
  await page.route(endpoint, route => route.abort('failed'));
  await page.goto('/estimate');
  await fillRequired(page);
  await page.getByRole('button', { name: 'Send My Free Estimate Request' }).click();
  await expect(page.getByRole('alert')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Request Received! 🎉' })).toHaveCount(0);
  await expect(page.getByLabel('Email Address (optional)', { exact: true })).toHaveValue('test@example.com');
  await expect(page.getByRole('button', { name: 'Send My Free Estimate Request' })).toBeEnabled();
});

test('rate limit is reported without a false confirmation', async ({ page }) => {
  await page.route(endpoint, route => route.fulfill({ status: 429, json: { errors: [{ code: 'RATE_LIMIT', message: 'Too many requests. Try again later.' }] } }));
  await page.goto('/estimate');
  await fillRequired(page);
  await page.getByRole('button', { name: 'Send My Free Estimate Request' }).click();
  await expect(page.getByRole('alert')).toContainText('Try again later');
  await expect(page.getByRole('heading', { name: 'Request Received! 🎉' })).toHaveCount(0);
});

test('phone and ZIP reject blank or invalid values; ZIP+4 and empty message are accepted', async ({ page }) => {
  await page.route(endpoint, route => route.fulfill({ status: 200, json: { ok: true, next: '/thanks' } }));
  await page.goto('/estimate');
  await fillRequired(page);
  await page.getByLabel('Phone Number', { exact: true }).fill('123');
  await page.getByLabel('ZIP Code', { exact: true }).fill('abc');
  await page.getByRole('button', { name: 'Send My Free Estimate Request' }).click();
  await expect(page.getByRole('alert')).toContainText('Enter a valid phone number');
  await expect(page.getByRole('alert')).toContainText('Enter a valid ZIP code');
  await page.getByLabel('Phone Number', { exact: true }).fill('');
  await page.getByLabel('ZIP Code', { exact: true }).fill('');
  await page.getByRole('button', { name: 'Send My Free Estimate Request' }).click();
  await expect(page.getByRole('alert')).toContainText('Enter a valid phone number');
  await expect(page.getByRole('alert')).toContainText('Enter a valid ZIP code');
  await page.getByLabel('Phone Number', { exact: true }).fill('(202) 555-0100');
  await page.getByLabel('ZIP Code', { exact: true }).fill('33578-1234');
  await page.getByRole('button', { name: 'Send My Free Estimate Request' }).click();
  await expect(page.getByRole('heading', { name: 'Request Received! 🎉' })).toBeVisible();
});

test('mobile menu, service selection, and retired URLs match current scope', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await expect(page.locator('a[href^="tel:"]')).toHaveCount(0);
  await expect(page.locator('body')).not.toContainText(/Maria T|10\+|Fully Insured|5-Star/);
  await page.getByRole('button', { name: 'Open menu' }).click();
  await page.getByRole('navigation').getByRole('button', { name: 'Fences', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Fence Cleaning & Surface Care', exact: true })).toBeVisible();
  await page.getByRole('link', { name: 'Get Your Free Quote', exact: true }).click();
  await expect(page.getByLabel('Fence Cleaning', { exact: true })).toBeChecked();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  for (const path of ['/services/roof-cleaning', '/services/commercial']) {
    await page.goto(path);
    await expect(page.getByRole('heading', { name: 'Page not found' })).toBeVisible();
  }
  await page.goto('/services/house-washing');
  await expect(page.getByRole('heading', { name: 'House Washing & Exterior Cleaning' })).toBeVisible();
  await page.goto('/services/driveway-sidewalk');
  await expect(page.getByRole('heading', { name: 'Driveway & Sidewalk Pressure Washing' })).toBeVisible();
  await page.goto('/does-not-exist');
  await expect(page.getByRole('heading', { name: 'Page not found' })).toBeVisible();
});

test('sun stays concentric across widths and respects reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  for (const width of [640, 768, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto('/estimate');
    const sun = page.locator('main .pointer-events-none.animate-float-slow');
    const halo = await sun.locator('div').nth(0).boundingBox();
    const disk = await sun.locator('div').nth(1).boundingBox();
    expect(Math.abs(halo!.x + halo!.width / 2 - disk!.x - disk!.width / 2)).toBeLessThan(1);
    expect(Math.abs(halo!.y + halo!.height / 2 - disk!.y - disk!.height / 2)).toBeLessThan(1);
    expect(await sun.evaluate(el => getComputedStyle(el).animationName)).toBe('none');
  }
});
