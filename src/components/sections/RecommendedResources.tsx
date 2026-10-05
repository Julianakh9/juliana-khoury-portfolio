import type { ResourceGroup } from "@/lib/types";

interface RecommendedResourcesProps {
  groups: ResourceGroup[];
}

export default function RecommendedResources({
  groups,
}: RecommendedResourcesProps) {
  return (
    <section
      id="resources"
      aria-labelledby="resources-heading"
      className="bg-surface py-section"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2
          id="resources-heading"
          className="mb-3 text-3xl font-semibold text-text-primary"
        >
          Recommended Resources
        </h2>

        {/* Personal-recommendation disclaimer */}
        <p className="mb-10 text-sm text-text-secondary">
          These are resources I have found genuinely useful — personal
          recommendations, not sponsored content.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <div key={group.label} className="flex flex-col gap-4">
              {/* Group label */}
              <h3 className="text-sm font-semibold uppercase tracking-wide text-text-secondary">
                {group.label}
              </h3>

              {/* Resources in this group */}
              <ul className="flex flex-col gap-4 list-none">
                {group.resources.map((resource) => (
                  <li key={resource.url} className="flex flex-col gap-1">
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-medium text-accent hover:text-accent-hover focus-visible:outline-2 focus-visible:outline-accent transition-colors"
                    >
                      {resource.title}
                    </a>
                    {resource.annotation && (
                      <p className="text-sm leading-relaxed text-text-secondary">
                        {resource.annotation}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
