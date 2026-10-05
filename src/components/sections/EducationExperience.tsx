import type { ExperienceEntry, EducationEntry } from "@/lib/types";

interface EducationExperienceProps {
  experience: ExperienceEntry[];
  education: EducationEntry[];
}

function DateRange({
  startDate,
  endDate,
}: {
  startDate: string;
  endDate?: string;
}) {
  const end = endDate ?? "Present";
  return (
    <span className="text-sm text-text-secondary">
      {startDate} – {end}
    </span>
  );
}

export default function EducationExperience({
  experience,
  education,
}: EducationExperienceProps) {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="bg-surface py-section"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2
          id="experience-heading"
          className="heading-marker mb-10 text-3xl font-semibold text-text-primary"
        >
          {experience.length > 0 ? "Education & Experience" : "Education"}
        </h2>

        {/* Experience subsection — only when there are entries */}
        {experience.length > 0 && (
          <div className="mb-14">
            <h3 className="mb-6 text-xl font-semibold text-text-primary">
              Experience
            </h3>
            <ul className="flex flex-col gap-8 list-none">
              {experience.map((entry) => (
                <li
                  key={`${entry.title}-${entry.organization}`}
                  className="timeline-item flex flex-col gap-3 pl-6"
                >
                  <div className="flex flex-col gap-1">
                    <h4 className="text-base font-semibold text-text-primary">
                      {entry.title}
                    </h4>
                    <span className="text-sm font-medium text-text-secondary">
                      {entry.organization}
                    </span>
                    <DateRange
                      startDate={entry.startDate}
                      endDate={entry.endDate}
                    />
                  </div>
                  <div
                    className="text-sm leading-relaxed text-text-secondary"
                    dangerouslySetInnerHTML={{ __html: entry.body }}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Education subsection */}
        <div>
          <h3 className="mb-6 text-xl font-semibold text-text-primary">
            Education
          </h3>
          <ul className="flex flex-col gap-8 list-none">
            {education.map((entry) => (
              <li
                key={`${entry.degree}-${entry.institution}`}
                className="timeline-item flex flex-col gap-3 pl-6"
              >
                <div className="flex flex-col gap-1">
                  <h4 className="text-base font-semibold text-text-primary">
                    {entry.degree}
                    {entry.field && (
                      <span className="font-normal text-text-secondary">
                        {" "}— {entry.field}
                      </span>
                    )}
                  </h4>
                  <span className="text-sm font-medium text-text-secondary">
                    {entry.institution}
                  </span>
                  <DateRange
                    startDate={entry.startDate}
                    endDate={entry.endDate}
                  />
                </div>
                {entry.body && (
                  <div
                    className="text-sm leading-relaxed text-text-secondary"
                    dangerouslySetInnerHTML={{ __html: entry.body }}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
