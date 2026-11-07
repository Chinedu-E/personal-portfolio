"use client";

import { useState } from "react";
import { navLinks, site } from "@/data/site";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-muted bg-ink/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-5 py-4">
        <a
          href="/"
          className="font-serif text-lg text-paper no-underline decoration-transparent"
          onClick={() => setOpen(false)}
        >
          {site.name}
        </a>

        <nav className="hidden items-center gap-6 text-sm text-paper-muted sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="no-underline decoration-transparent hover:text-paper hover:underline"
            >
              {link.name}
            </a>
          ))}
          <a
            href={site.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline decoration-transparent hover:text-paper hover:underline"
          >
            Resume
          </a>
        </nav>

        <button
          type="button"
          className="text-sm text-paper-muted sm:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-ink-muted px-5 py-4 sm:hidden"
        >
          <ul className="flex flex-col gap-3 text-sm text-paper-muted">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="no-underline decoration-transparent hover:text-paper"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline decoration-transparent hover:text-paper"
                onClick={() => setOpen(false)}
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
