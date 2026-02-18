// src/components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0" onClick={closeMobileMenu}>
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28">
            <Image
              src="/images/logo.png"
              alt="San Automations and Engineering Logo"
              fill
              className="object-contain drop-shadow-md"
              priority
              sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, (max-width: 1024px) 96px, 112px"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors">
            About
          </Link>
          <Link href="/services" className="text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors">
            Services
          </Link>
          <Link href="/projects" className="text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors">
            Projects
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <Button asChild className="hidden md:block bg-blue-900 hover:bg-blue-950">
          <Link href="/contact">Get Quote</Link>
        </Button>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-8 h-8" />
          ) : (
            <Menu className="w-8 h-8" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white border-t shadow-lg"
        >
          <div className="container mx-auto px-4 py-6 flex flex-col gap-6">
            <Link
              href="/about"
              className="text-lg font-medium text-gray-800 hover:text-blue-900 transition-colors"
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-lg font-medium text-gray-800 hover:text-blue-900 transition-colors"
              onClick={closeMobileMenu}
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="text-lg font-medium text-gray-800 hover:text-blue-900 transition-colors"
              onClick={closeMobileMenu}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-lg font-medium text-gray-800 hover:text-blue-900 transition-colors"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>

            {/* Mobile CTA */}
            <Button
              asChild
              size="lg"
              className="bg-blue-900 hover:bg-blue-950 w-full"
              onClick={closeMobileMenu}
            >
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  );
}