import type { Profile } from "@/lib/types";

interface HeroProps {
  profile: Profile;
}

export default function Hero({ profile }: HeroProps) {
  const { name, tagline, githubUrl, linkedinUrl, email } = profile;

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="hero-gradient bg-bg py-section"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-4">
        {/* Name and tagline */}
        <div className="flex flex-col gap-3">
          <h1
            id="hero-heading"
            className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl"
          >
            {name}
          </h1>
          <p className="max-w-2xl text-lg text-text-secondary sm:text-xl">
            {tagline}
          </p>
        </div>

        {/* Primary CTAs */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="cta-gradient inline-flex items-center rounded-card px-5 py-2.5 text-sm font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-card border border-border px-5 py-2.5 text-sm font-medium text-text-primary hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors"
          >
            Contact
          </a>
        </div>

        {/* GitHub and LinkedIn links */}
        <div className="flex flex-wrap items-center gap-6">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent focus-visible:outline-2 focus-visible:outline-accent transition-colors"
          >
            {/* GitHub icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            GitHub
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent focus-visible:outline-2 focus-visible:outline-accent transition-colors"
          >
            {/* LinkedIn icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          {email && (
            <span className="flex items-center gap-2 text-sm text-text-secondary">
              {/* Email icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 6L2 7" />
              </svg>
              {email}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
