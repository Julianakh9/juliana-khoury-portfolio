import Image from "next/image";

interface AboutMeProps {
  body: string;
  profileImage?: string;
  name: string;
}

export default function AboutMe({ body, profileImage, name }: AboutMeProps) {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-surface py-section"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2
          id="about-heading"
          className="heading-marker mb-10 text-3xl font-semibold text-text-primary"
        >
          About Me
        </h2>

        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-12">
          {/* Optional profile photo */}
          {profileImage && (
            <div className="flex-shrink-0">
              <Image
                src={profileImage}
                alt={name}
                width={280}
                height={280}
                className="profile-glow aspect-square w-full max-w-[280px] rounded-card object-cover sm:w-[280px]"
              />
            </div>
          )}

          {/* Narrative */}
          <div
            className="flex-1 text-base leading-relaxed text-text-secondary"
            dangerouslySetInnerHTML={{ __html: body }}
          />
        </div>
      </div>
    </section>
  );
}
