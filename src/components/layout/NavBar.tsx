"use client";

import { useState } from "react";
import MobileMenu from "./MobileMenu";

const NAV_LINKS = [
  { label: "About",          href: "#about"          },
  { label: "Projects",       href: "#projects"       },
  { label: "Skills",         href: "#skills"         },
  { label: "Experience",     href: "#experience"     },
  { label: "Focus",          href: "#focus"          },
  { label: "Contact",        href: "#contact"        },
];

interface NavBarProps {
  name: string;
}

export default function NavBar({ name }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-bg border-b border-border">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Skip to content
        </a>
        <nav
          className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3"
          aria-label="Main navigation"
        >
          {/* Owner name — links to hero */}
          <a
            href="#hero"
            className="text-base font-semibold text-text-primary hover:text-accent transition-colors"
          >
            {name}
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6 list-none">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-sm text-text-secondary hover:text-accent transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="md:hidden flex items-center justify-center p-2 rounded text-text-primary hover:text-accent focus-visible:outline-2 focus-visible:outline-accent transition-colors"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(true)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <line x1="3" y1="6"  x2="21" y2="6"  />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </nav>
      </header>

      <MobileMenu
        id="mobile-menu"
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={NAV_LINKS}
      />
    </>
  );
}
