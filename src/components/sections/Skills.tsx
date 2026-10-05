import type { SkillCategory } from "@/lib/types";

interface SkillsProps {
  categories: SkillCategory[];
}

export default function Skills({ categories }: SkillsProps) {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="section-tint-blue py-section"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2
          id="skills-heading"
          className="heading-marker mb-10 text-3xl font-semibold text-text-primary"
        >
          Skills
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div key={category.label} className="flex flex-col gap-3">
              {/* Category label */}
              <h3 className="skill-category-label text-sm font-semibold uppercase tracking-wide">
                {category.label}
              </h3>

              {/* Skill chips */}
              <ul className="flex flex-wrap gap-2 list-none">
                {category.skills.map((skill) => (
                  <li key={skill}>
                    <span className="skill-chip inline-block rounded-tag border border-border bg-bg px-3 py-1 text-sm text-text-primary">
                      {skill}
                    </span>
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
