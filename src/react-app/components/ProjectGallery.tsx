import { Link } from "react-router";
import { ArrowRight, Camera } from "lucide-react";

type Shot = { name: string; alt: string };
type Project = { title: string; before?: Shot; after: Shot };

function Photo({ shot, tag, wide = false }: { shot: Shot; tag: "Before" | "After"; wide?: boolean }) {
  const base = `/images/owner-project/${shot.name}`;
  return <a href={`${base}-1280.jpg`} target="_blank" rel="noreferrer" className="group relative block overflow-hidden" aria-label={`${shot.alt}. Open larger photo in a new tab`}>
    <img src={`${base}-640.jpg`} srcSet={`${base}-640.jpg 640w, ${base}-1280.jpg 1280w`} sizes="(min-width: 1024px) 280px, 50vw" loading="lazy" decoding="async" alt={shot.alt} className={`block ${wide ? "aspect-[8/5]" : "aspect-[4/5]"} w-full object-cover transition-transform duration-500 group-hover:scale-105`} />
    <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider shadow ${tag === "After" ? "bg-primary text-white" : "bg-white/90 text-foreground"}`}>{tag}</span>
  </a>;
}

function ProjectCard({ project }: { project: Project }) {
  return <figure className="overflow-hidden rounded-3xl bg-white shadow-lg">
    {project.before
      ? <div className="grid grid-cols-2 gap-1 bg-white"><Photo shot={project.before} tag="Before" /><Photo shot={project.after} tag="After" /></div>
      : <Photo shot={project.after} tag="After" wide />}
    <figcaption className="px-5 py-4 font-bold text-foreground">{project.title}</figcaption>
  </figure>;
}

const DRIVEWAY: Project = {
  title: "Driveway",
  before: { name: "driveway-before", alt: "Driveway before cleaning, with dark staining on the concrete near the garage and hoses across the surface" },
  after: { name: "driveway-after", alt: "The driveway after cleaning, viewed toward the garage" },
};
const WALKWAYS: Project[] = [
  { title: "Front porch path", before: { name: "walkway-before", alt: "Front walkway before cleaning, with dark buildup across the concrete near the porch" }, after: { name: "walkway-after", alt: "Front walkway after cleaning, leading toward the front door" } },
  { title: "Walkway corner", before: { name: "walkway-before-corner", alt: "Walkway junction before cleaning, with dark buildup around the corner" }, after: { name: "walkway-after-wide", alt: "Front walkway after cleaning, with a wider diagonal view of the path and its junction with the sidewalk" } },
];
const SIDEWALK: Project = { title: "Finished sidewalk", after: { name: "sidewalk-after", alt: "Cleaned sidewalk beside a freshly cleaned driveway" } };

export default function ProjectGallery({ service }: { service?: "driveway" | "sidewalk" }) {
  const projects = service === "driveway" ? [DRIVEWAY, SIDEWALK] : [DRIVEWAY, ...WALKWAYS, SIDEWALK];
  return <section id="real-project" aria-labelledby="project-heading" className="bg-primary/5 py-20 sm:py-24">
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
          <Camera className="h-4 w-4" aria-hidden="true" />
          Our Work
        </span>
        <h2 id="project-heading" className="text-3xl font-black text-foreground lg:text-4xl">Real results, right here in <span className="text-primary">Tampa Bay</span></h2>
        <p className="mt-4 text-lg text-muted-foreground">Before-and-after photos from a recent driveway and walkway job.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => <ProjectCard key={p.title} project={p} />)}
      </div>
      <p className="mt-6 text-center text-sm italic text-muted-foreground">Results vary with the surface and type of staining.</p>
      <div className="mt-8 flex justify-center">
        <Link to="/estimate" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-secondary to-orange-500 px-8 py-3 font-bold text-white shadow-lg shadow-secondary/30 transition-opacity hover:opacity-90">
          Get Your Free Quote <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  </section>;
}
