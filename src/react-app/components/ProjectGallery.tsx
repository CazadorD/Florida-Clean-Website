type ProjectPhotoProps = {
  name: string;
  alt: string;
  label: string;
  landscape?: boolean;
  compact?: boolean;
};

function ProjectPhoto({ name, alt, label, landscape = false, compact = false }: ProjectPhotoProps) {
  const base = `/images/owner-project/${name}`;
  return <figure className="overflow-hidden rounded-2xl border border-border bg-white">
    <a href={`${base}-1280.jpg`} target="_blank" rel="noreferrer" className="block" aria-label={`${alt}. Open larger photo in a new tab`}>
      <img src={`${base}-640.jpg`} srcSet={`${base}-640.jpg 640w, ${base}-1280.jpg 1280w`} sizes="(min-width: 1024px) 560px, (min-width: 640px) 45vw, 90vw" width={landscape ? 1280 : 960} height={landscape ? 960 : 1280} loading="lazy" decoding="async" alt={alt} className={compact ? "block aspect-[4/3] w-full object-cover object-center" : "block h-auto w-full"} />
    </a>
    <figcaption className="border-t border-border px-5 py-4 text-sm font-bold">{label}</figcaption>
  </figure>;
}

export default function ProjectGallery({ service }: { service?: "driveway" | "sidewalk" }) {
  return <section id="real-project" aria-labelledby="project-heading" className="bg-primary/5 py-16 sm:py-20">
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <p className="text-sm font-bold tracking-widest text-primary">A REAL PROJECT</p>
      <h2 id="project-heading" className="mt-3 text-3xl font-black sm:text-4xl">A fresh look, close to home.</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">Driveway and walkway cleaning at the owner's own property. These photos document one Florida Clean project.</p>
      <div className="mt-9">
        <h3 className="mb-4 text-xl font-bold">Driveway: before and after</h3>
        <div className="grid gap-5 sm:grid-cols-2">
          <ProjectPhoto name="driveway-before" compact alt="Driveway before cleaning, with dark staining on the concrete near the garage and hoses across the surface" label="Before · Driveway" />
          <ProjectPhoto name="driveway-after" landscape compact alt="The driveway after cleaning, viewed toward the garage" label="After · Driveway" />
        </div>
      </div>
      {service !== "driveway" && <div className="mt-9">
        <h3 className="mb-4 text-xl font-bold">Front walkway: before and after</h3>
        <div className="grid max-w-3xl grid-cols-2 gap-3 sm:gap-4">
          <ProjectPhoto name="walkway-before" compact alt="Front walkway before cleaning, with dark buildup across the concrete near the porch" label="Before · Porch path" />
          <ProjectPhoto name="walkway-after" compact alt="Front walkway after cleaning, leading toward the front door" label="After · Porch path" />
          <ProjectPhoto name="walkway-before-corner" compact alt="Walkway junction before cleaning, with dark buildup around the corner" label="Before · Walkway corner" />
          <ProjectPhoto name="walkway-after-wide" compact alt="Front walkway after cleaning, with a wider diagonal view of the path and its junction with the sidewalk" label="After · Walkway corner" />
        </div>
      </div>}
      <div className="mt-9">
        <h3 className="mb-4 text-xl font-bold">Finished sidewalk</h3>
        <div className="max-w-xl">
          <ProjectPhoto name="sidewalk-after" compact alt="Cleaned sidewalk beside the owner's driveway" label="After · Sidewalk" />
        </div>
      </div>
      <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">Results vary with the surface and type of staining. This example shows work at the owner's home.</p>
    </div>
  </section>;
}
