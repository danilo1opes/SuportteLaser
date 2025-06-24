'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CiMenuBurger } from 'react-icons/ci';
import { IoCloseOutline } from 'react-icons/io5';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-brands-mainBg px-6 py-2 max-w-full mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex-shrink-0">
          <Image
            src="icon/suportte.svg"
            alt="Suportte Laser"
            width={200}
            height={50}
            className="w-36 h-auto md:w-48"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-6 tracking-widest font-light font-nunito">
            <li>
              <Link href="/" scroll={true}>
                <span className="cursor-pointer text-brands-primary hover:text-brands-gray border-b border-transparent hover:border-brands-primary transition-all duration-300">
                  Produtos
                </span>
              </Link>
            </li>
            <li>
              <Link href="/" scroll={true}>
                <span className="cursor-pointer text-brands-primary hover:text-brands-gray border-b border-transparent hover:border-brands-primary transition-all duration-300">
                  Linha Feminina
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-brands-primary hover:text-brands-gray transition-colors duration-300 p-2 rounded-lg hover:bg-brands-primary/10"
          >
            <div className="relative w-6 h-6">
              <CiMenuBurger
                size={24}
                className={`absolute inset-0 transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen
                    ? 'opacity-0 rotate-90 scale-75'
                    : 'opacity-100 rotate-0 scale-100'
                }`}
              />
              <IoCloseOutline
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
        <div className="mt-4 pb-4">
          <ul className="flex flex-col space-y-4 tracking-widest font-light font-nunito">
            <li>
              <Link href="/" scroll={true}>
                <span
                  className="block cursor-pointer text-brands-primary hover:text-brands-gray py-2 relative hover:bg-brands-primary/5 px-2 rounded transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Produtos
                </span>
              </Link>
            </li>
            <li>
              <Link href="/" scroll={true}>
                <span
                  className="block cursor-pointer text-brands-primary hover:text-brands-gray py-2 relative hover:bg-brands-primary/5 px-2 rounded transition-all duration-300"
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
