import type { FocusArea } from "@/lib/types";

interface CurrentFocusProps {
  focusAreas: FocusArea[];
  knowledgeExchangeNote: string;
}

export default function CurrentFocus({
  focusAreas,
  knowledgeExchangeNote,
}: CurrentFocusProps) {
  return (
    <section
      id="focus"
      aria-labelledby="focus-heading"
      className="bg-bg py-section"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2
          id="focus-heading"
          className="heading-marker mb-10 text-3xl font-semibold text-text-primary"
        >
          Current Focus
        </h2>

        {/* Focus area cards */}
        <ul className="grid gap-6 list-none sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area) => (
            <li
              key={area.title}
              className="focus-card flex flex-col gap-3 rounded-card border border-border bg-surface p-6"
            >
              <h3 className="text-lg font-semibold text-text-primary">
                {area.title}
              </h3>
              <div
                className="text-sm leading-relaxed text-text-secondary"
                dangerouslySetInnerHTML={{ __html: area.body }}
              />
            </li>
          ))}
        </ul>

        {/* Knowledge exchange invitation — displayed once at section level */}
        <div className="mt-10 rounded-card border border-accent bg-surface px-6 py-5">
          <p className="text-sm font-medium text-text-primary">
            {knowledgeExchangeNote}
          </p>
        </div>
      </div>
    </section>
  );
}
