'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-brand-primary shadow-2xl">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex-shrink-0">
          <Image
            src="icon/suportte.svg"
            alt="Suportte Laser"
            width={200}
            height={50}
            className="w-40 h-auto md:w-48 lg:w-52 brightness-0 invert"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-8 tracking-wide font-light">
            <li>
              <Link href="/" scroll={true}>
                <span className="cursor-pointer text-brand-softGray hover:text-brand-brandGold transition-all duration-300 text-base relative group">
                  Produtos
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-brandGold transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            </li>
            <li>
              <Link href="/" scroll={true}>
                <span className="cursor-pointer text-brand-softGray hover:text-brand-brandGold transition-all duration-300 text-base relative group">
                  Linha Feminina
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-brandGold transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-brand-softGray hover:text-brand-brandGold transition-colors duration-300 p-2 rounded-lg hover:bg-brand-secundary/10"
          >
            <div className="relative w-6 h-6">
              <Menu
                size={24}
                className={`absolute inset-0 transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen
                    ? 'opacity-0 rotate-90 scale-75'
                    : 'opacity-100 rotate-0 scale-100'
                }`}
              />
              <X
                size={24}
                className={`absolute inset-0 transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen
                    ? 'opacity-100 rotate-0 scale-100'
                    : 'opacity-0 -rotate-90 scale-75'
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 bg-brands-primary/50 backdrop-blur-sm border-t border-brand-gray">
          <ul className="flex flex-col space-y-4 font-light">
            <li>
              <Link href="/" scroll={true}>
                <span
                  className="block cursor-pointer text-brand-softGray hover:bg-brand-brandGold py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Produtos
                </span>
              </Link>
            </li>
            <li>
              <Link href="/" scroll={true}>
                <span
                  className="block cursor-pointer text-brand-softGray hover:text-brand-brandGold py-3 px-4 rounded-lg hover:bg-brand-secundary/10 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Linha Feminina
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
