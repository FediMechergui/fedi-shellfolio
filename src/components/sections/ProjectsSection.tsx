import { useId, useState } from "react";
import { ChevronDown, ExternalLink, FolderOpen, Github, Lock, Search } from "lucide-react";
import projects from "@/data/projects.json";
import { trackProjectClick, trackProjectExpand } from "@/lib/analytics";

export const ProjectsSection = ({ initialQuery = "" }: { initialQuery?: string }) => {
  const id = useId();
  const [query, setQuery] = useState(initialQuery);
  const [showAll, setShowAll] = useState(Boolean(initialQuery));
  const [expanded, setExpanded] = useState<string | null>(null);
  const search = query.trim().toLowerCase();
  const visible = projects.filter((project) =>
    (showAll || Boolean(search) || project.featured) &&
    `${project.title} ${project.name} ${project.description} ${project.tech.join(" ")}`.toLowerCase().includes(search),
  );

  return (
    <section className="space-y-4" aria-label="Project catalogue">
      <div>
        <h2 className="text-xl font-bold text-primary mb-2">~/projects/</h2>
        <p className="text-sm text-muted-foreground">
          {projects.length} public repositories · catalogue updated November 2026
        </p>
        <p className="text-sm mt-2">Web platforms, business software, mobile apps and networking experiments. Open a project for its scope, source and demo.</p>
      </div>
      <div className="flex flex-wrap gap-2">
        <button type="button" aria-pressed={!showAll} onClick={() => { setShowAll(false); setQuery(""); }} className={`px-3 py-2 rounded border text-sm ${!showAll ? "border-primary bg-primary/10" : "border-border"}`}>Featured</button>
        <button type="button" aria-pressed={showAll} onClick={() => setShowAll(true)} className={`px-3 py-2 rounded border text-sm ${showAll ? "border-primary bg-primary/10" : "border-border"}`}>All {projects.length} repositories</button>
      </div>
      <label className="flex items-center gap-2 border border-border rounded p-3 bg-muted/20" htmlFor={`${id}-search`}>
        <Search className="w-4 h-4 shrink-0" aria-hidden="true" />
        <span className="sr-only">Search all public projects by name, purpose or technology</span>
        <input id={`${id}-search`} value={query} onChange={(event) => setQuery(event.target.value)} className="w-full min-w-0 bg-transparent text-sm outline-none" placeholder="Search all projects or technologies…" type="search" />
      </label>
      <p role="status" className="text-xs text-muted-foreground">{visible.length} {visible.length === 1 ? "repository" : "repositories"} shown</p>
      <div className="space-y-3">
        {visible.map((project) => (
          <article key={project.name} className="border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors">
            <h3>
              <button type="button" className="w-full p-4 flex gap-3 items-start text-left hover:bg-muted/30" aria-expanded={expanded === project.name} aria-controls={`${id}-${project.name}`} onClick={() => {
                const next = expanded === project.name ? null : project.name;
                setExpanded(next);
                if (next) trackProjectExpand(project.title);
              }}>
                <FolderOpen className="w-4 h-4 shrink-0 mt-1 text-primary" aria-hidden="true" />
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold break-words">{project.title}</span>
                  <span className="block text-xs text-muted-foreground mt-1">{project.status} · updated {project.updated}</span>
                </span>
                <ChevronDown className={`w-4 h-4 shrink-0 mt-1 transition-transform ${expanded === project.name ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>
            </h3>
            {expanded === project.name && (
              <div id={`${id}-${project.name}`} className="p-4 pt-0 space-y-3">
                <p className="text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">{project.tech.map((tech) => <span key={tech} className="px-2 py-1 rounded text-xs bg-primary/10 border border-primary/30">{tech}</span>)}</div>
                <div className="flex flex-wrap gap-4 text-sm text-secondary">
                  <a href={project.url} target="_blank" rel="noopener noreferrer" onClick={() => trackProjectClick(project.title, project.url)} className="inline-flex items-center gap-2 hover:underline"><Github className="w-4 h-4" aria-hidden="true" />Source</a>
                  {project.website && <a href={project.website} target="_blank" rel="noopener noreferrer" onClick={() => trackProjectClick(project.title, project.website!)} className="inline-flex items-center gap-2 hover:underline"><ExternalLink className="w-4 h-4" aria-hidden="true" />Demo / project page</a>}
                </div>
              </div>
            )}
          </article>
        ))}
        {!visible.length && <p className="p-4 border border-border rounded text-sm">No matching project. Try “React”, “mobile” or “ERP”.</p>}
      </div>
      <details className="border border-border rounded p-4 text-sm">
        <summary className="cursor-pointer text-accent"><Lock className="inline w-4 h-4 mr-2" aria-hidden="true" />Client & enterprise experience</summary>
        <div className="mt-3 space-y-3">
          <p><strong>MedTours:</strong> travel agency ERP, booking workflows and customer-facing web experiences.</p>
          <p><strong>Omnilink:</strong> backend development, architecture, delivery coordination and intern mentoring.</p>
          <p><strong>SmartHire and Medianet:</strong> hiring-platform and business-dashboard development.</p>
          <p className="text-muted-foreground">Client work is described at a high level. The public catalogue above links only to repositories that are publicly available.</p>
        </div>
      </details>
    </section>
  );
};
