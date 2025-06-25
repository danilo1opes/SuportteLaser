'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';

export function HeroHeader() {
  return (
    <section className="relative z-20 bg-gradient-to-r from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Efeitos de fundo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-yellow rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-brand-glow rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="space-y-6 text-center lg:text-left">
            <span className="text-brand-muted text-sm sm:text-base font-libre tracking-[0.3rem] uppercase inline-block">
              Suportte
            </span>

            <div className="space-y-2">
              <h1 className="text-lg sm:text-4xl lg:text-5xl font-bold font-inter text-brand-secundary leading-tight">
                Detalhes únicos.
              </h1>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-inter text-brand-secundary leading-tight">
                Resultados{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-brandGold to-brand-glow">
                  Inesquecíveis.
                </span>
              </h2>
            </div>

            <p className="text-brand-muted text-base sm:text-lg lg:text-xl font-light font-nunito leading-relaxed max-w-xl mx-auto lg:mx-0">
              Atacado, varejo e brindes
            </p>

            <div className="pt-4 sm:pt-6">
              <Link href="https://wa.me/5562992373284" target="_blank">
                <button className="group bg-black hover:bg-brand-darkGray text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3 border border-brand-neutral hover:border-brand-yellow w-full sm:w-auto">
                  <div className="w-6 h-6 bg-brand-whatsappGreen rounded-full flex items-center justify-center">
                    <FaWhatsapp size={14} className="text-brand-secundary" />
                  </div>
                  <span>Solicite um Orçamento</span>
                  <FaArrowRightLong />
                </button>
              </Link>
            </div>
          </div>

          {/* Imagens */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-3xl blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="flex flex-col gap-4">
                <div className="transform hover:scale-105 transition-transform duration-500 hover:rotate-3">
                  <Image
                    src="/img/header/baralho.png"
                    alt="Cartas de Baralho Personalizadas"
                    width={300}
                    height={200}
                    className="w-full h-auto drop-shadow-2xl"
                  />
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="transform hover:scale-110 transition-transform duration-500 hover:rotate-12">
                  <Image
                    src="/img/header/machado.png"
                    alt="Machado Personalizado"
                    width={200}
                    height={400}
                    className="w-full h-auto drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-brand-muted rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brand-muted rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

export default HeroHeader;
