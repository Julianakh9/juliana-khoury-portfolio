import type { Project } from "@/lib/types";

interface FeaturedProjectsProps {
  projects: Project[];
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="bg-bg py-section"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2
          id="projects-heading"
          className="heading-marker mb-10 text-3xl font-semibold text-text-primary"
        >
          Featured Projects
        </h2>

        <ul className="grid gap-6 list-none sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li
              key={project.title}
              className="project-card flex flex-col gap-4 rounded-card border border-border bg-surface p-6"
            >
              {/* Title and optional status badge */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <h3 className="text-lg font-semibold text-text-primary">
                  {project.title}
                </h3>
                {project.status && (
                  <span className="inline-flex items-center rounded-tag border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent-hover">
                    {project.status}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-text-secondary leading-relaxed">
                {project.description}
              </p>

              {/* Optional extended body */}
              {project.body && (
                <div
                  className="markdown-content text-sm leading-relaxed text-text-secondary"
                  dangerouslySetInnerHTML={{ __html: project.body }}
                />
              )}

              {/* Technology tags */}
              <ul className="flex flex-wrap gap-2 list-none">
                {project.technologies.map((tech) => (
                  <li key={tech}>
                    <span className="inline-block rounded-tag border border-border px-2.5 py-1 text-xs font-medium text-text-secondary">
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Optional links */}
              {(project.demoUrl || project.repoUrl) && (
                <div className="mt-auto flex flex-wrap gap-4 pt-2">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-accent hover:text-accent-hover focus-visible:outline-2 focus-visible:outline-accent transition-colors"
                    >
                      Live demo
                      <span className="sr-only"> for {project.title}</span>
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-accent hover:text-accent-hover focus-visible:outline-2 focus-visible:outline-accent transition-colors"
                    >
                      View source
                      <span className="sr-only"> for {project.title}</span>
                    </a>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
