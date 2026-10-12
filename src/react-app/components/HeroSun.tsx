export default function HeroSun() {
  return <div aria-hidden="true" className="pointer-events-none absolute right-[5%] top-28 hidden h-24 w-24 sm:block lg:right-[12%] lg:h-32 lg:w-32 animate-float-slow">
    <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-yellow-300 to-orange-300 opacity-50 blur-md" />
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-400" />
  </div>;
}
