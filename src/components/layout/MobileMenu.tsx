"use client";

import { useEffect, useRef } from "react";

interface MobileMenuProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
  links: Array<{ label: string; href: string }>;
}

export default function MobileMenu({
  id,
  isOpen,
  onClose,
  links,
}: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Track whether the menu has ever been opened so return-focus
  // only fires on close, not on initial render when isOpen is false.
  const hasOpenedRef = useRef(false);

  // Focus the close button when the menu opens.
  useEffect(() => {
    if (isOpen) {
      hasOpenedRef.current = true;
      closeButtonRef.current?.focus();
    }
  }, [isOpen]);

  // Return focus to the hamburger button only when transitioning
  // from open → closed (not on initial render).
  useEffect(() => {
    if (!isOpen && hasOpenedRef.current) {
      const trigger = document.querySelector<HTMLElement>(
        `[aria-controls="${id}"]`
      );
      trigger?.focus();
    }
  }, [isOpen, id]);

  // Close on Escape; trap focus within the panel.
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key !== "Tab") return;

      const panel = panelRef.current;
      if (!panel) return;

      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    // Outer wrapper: positions the backdrop and panel together.
    // No aria-hidden here — the dialog inside must remain in the accessibility tree.
    <div className="fixed inset-0 z-50">
      {/* Visual backdrop only — aria-hidden so screen readers ignore it */}
      <div
        className="absolute inset-0 bg-black/40"
        aria-hidden="true"
        onClick={onClose}
      />

      {/* Dialog panel — sits above the backdrop, fully exposed to AT */}
      <div
        ref={panelRef}
        id={id}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className="absolute inset-x-0 top-0 bg-bg border-b border-border shadow-lg"
      >
        {/* Header row with close button */}
        <div className="flex items-center justify-end px-4 py-3 border-b border-border">
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close navigation menu"
            onClick={onClose}
            className="flex items-center justify-center p-2 rounded text-text-primary hover:text-accent focus-visible:outline-2 focus-visible:outline-accent transition-colors"
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
              <line x1="18" y1="6"  x2="6"  y2="18" />
              <line x1="6"  y1="6"  x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Navigation links */}
        <nav aria-label="Mobile navigation">
          <ul className="flex flex-col list-none py-2">
            {links.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={onClose}
                  className="block px-6 py-4 text-base text-text-primary hover:text-accent hover:bg-surface transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
