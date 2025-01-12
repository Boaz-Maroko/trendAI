"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <Link href="/">BrandName</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link
            href="/influencer-view"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Influencer View
          </Link>
          <Link
            href="/brand-view"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Brand View
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <span className="text-2xl">✕</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-700">
          <Link
            href="/influencer-view"
            className="block py-3 px-6 text-white hover:bg-gray-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Influencer View
          </Link>
          <Link
            href="/brand-view"
            className="block py-3 px-6 text-white hover:bg-gray-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Brand View
          </Link>
        </div>
      )}
    </header>
  );
}
