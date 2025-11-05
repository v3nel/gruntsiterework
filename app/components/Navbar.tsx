"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-50 bg-linear-to-b from-black to-transparent">
        <div className="relative w-full max-w-4xl mx-auto px-3 sm:px-5">
          <nav className="relative px-4 sm:px-6 py-3">
            <div className="flex items-center justify-between py-2">
              <Link href="/" className="block">
                <img
                  src="/grunt-logo-white.svg"
                  alt="Grunt logo"
                  className="h-7 w-auto sm:h-8"
                />
              </Link>

              <div className="hidden sm:flex flex-row gap-5">
                <Link className="text-white/90 hover:text-white transition-colors" href="/video">Vidéo</Link>
                <Link className="text-white/90 hover:text-white transition-colors" href="/audio">Audio</Link>
                <Link className="text-white/90 hover:text-white transition-colors" href="/contact">Contact</Link>
                <Link className="text-white/90 hover:text-white transition-colors" href="/merch">Merch</Link>
              </div>

              <button
                className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none transition-colors"
                aria-expanded={open}
                aria-controls="mobile-menu"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Ouvrir le menu</span>
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 h-full w-64 bg-black/95 backdrop-blur-md shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <span className="text-white font-semibold">Menu</span>
            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-md text-white hover:bg-white/10 focus:outline-none transition-colors"
              aria-label="Fermer le menu"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-1 p-4">
            <Link
              className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-all"
              href="/"
              onClick={() => setOpen(false)}
            >
              Vidéo
            </Link>
            <Link
              className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-all"
              href="/"
              onClick={() => setOpen(false)}
            >
              Audio
            </Link>
            <Link
              className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-all"
              href="/contact"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
            <Link
              className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-all"
              href="/merch"
              onClick={() => setOpen(false)}
            >
              Merch
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}