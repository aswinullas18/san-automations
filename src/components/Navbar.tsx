"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="font-bold text-xl">
            <Link href="/">San Automations</Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/about" className="hover:text-blue-400">About</Link>
            <Link href="/services" className="hover:text-blue-400">Services</Link>
            <Link href="/projects" className="hover:text-blue-400">Projects</Link>
            <Link href="/contact" className="hover:text-blue-400">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              <Menu />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 px-4 py-4 space-y-4">
          <Link href="/about" className="block hover:text-blue-400">About</Link>
          <Link href="/services" className="block hover:text-blue-400">Services</Link>
          <Link href="/projects" className="block hover:text-blue-400">Projects</Link>
          <Link href="/contact" className="block hover:text-blue-400">Contact</Link>
        </div>
      )}
    </nav>
  );
}