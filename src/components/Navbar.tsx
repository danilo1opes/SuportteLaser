'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import Image from 'next/image';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-100 border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/icon/suportte.svg"
              alt="Suportte Laser"
              width={100}
              height={40}
              className="h-16 w-auto"
            />
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="/produtos"
              className="text-gray-800 hover:text-gray-900 text-base font-light transition-colors"
            >
              Produtos
            </Link>
            <Link
              href="/linha-feminina"
              className="text-gray-800 hover:text-gray-900 text-base font-light transition-colors"
            >
              Linha Feminina
            </Link>
          </div>

          {/* Botão Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none p-2"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 border-t border-gray-300">
            <Link
              href="/produtos"
              className="block py-2 px-4 text-gray-800 hover:text-gray-900 text-base font-light"
              onClick={() => setIsMenuOpen(false)}
            >
              Produtos
            </Link>
            <Link
              href="/linha-feminina"
              className="block py-2 px-4 text-gray-800 hover:text-gray-900 text-base font-light"
              onClick={() => setIsMenuOpen(false)}
            >
              Linha Feminina
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
