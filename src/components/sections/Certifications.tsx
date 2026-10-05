import Image from "next/image";
import type { Certification } from "@/lib/types";

interface CertificationsProps {
  certifications: Certification[];
}

export default function Certifications({ certifications }: CertificationsProps) {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="bg-bg py-section"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2
          id="certifications-heading"
          className="heading-marker mb-10 text-3xl font-semibold text-text-primary"
        >
          Certifications
        </h2>

        <ul className="grid gap-6 list-none sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <li
              key={cert.name}
              className="project-card flex flex-col gap-4 rounded-card border border-border bg-surface p-6"
            >
              {/* Optional badge image */}
              {cert.badgeImage && (
                <div className="flex items-start">
                  <Image
                    src={cert.badgeImage}
                    alt={cert.name}
                    width={64}
                    height={64}
                    className="rounded object-contain"
                  />
                </div>
              )}

              {/* Certification details */}
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-semibold text-text-primary">
                  {cert.name}
                </h3>
                <p className="text-sm text-text-secondary">{cert.issuer}</p>
                <p className="text-sm text-text-secondary">{cert.date}</p>
              </div>

              {/* Optional verification link */}
              {cert.verificationUrl && (
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Verify credential: ${cert.name}`}
                  className="mt-auto text-sm font-medium text-accent hover:text-accent-hover focus-visible:outline-2 focus-visible:outline-accent transition-colors"
                >
                  Verify credential
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
