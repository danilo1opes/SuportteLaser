'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

export function HeroHeader() {
  return (
    <section className="relative z-10 bg-gray-100 px-4 sm:px-6 lg:px-8 pt-8 pb-16 sm:pt-12 sm:pb-20 md:py-28">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8 sm:gap-10">
        {/* Texto */}
        <div className="w-full lg:max-w-xl text-center lg:text-left">
          <span className="text-xs sm:text-sm font-libre tracking-widest text-gray-400 uppercase">
            Suportte
          </span>
          <h1 className="text-3xl font-inter sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mt-2">
            Detalhes únicos.
            <br />
            <span className="text-gray-800 font-inter">
              Resultados inesquecíveis.
            </span>
          </h1>
          <p className="text-base sm:text-lg font-nunito tracking-widest font-light text-gray-500 mt-4 max-w-md mx-auto lg:mx-0">
            Atacado, varejo e brindes
          </p>
          <Link
            href="https://wa.me/5562992973765"
            target="_blank"
            className="mt-6 inline-flex items-center gap-2 bg-black text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-gray-800 transition text-sm sm:text-base shadow-md"
          >
            <FaWhatsapp className="text-base sm:text-lg" />
            Solicite um Orçamento
          </Link>
        </div>

        {/* Imagens */}
        <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl flex items-center justify-center">
          <div className="relative z-10 flex items-center gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
            <Image
              src="/img/header/baralho.png"
              alt="Baralho dourado"
              width={300}
              height={300}
              className="object-contain w-auto h-[180px] sm:h-[220px] md:h-[250px] lg:h-[280px] xl:h-[300px]"
            />
            <Image
              src="/img/header/machado.png"
              alt="Machado"
              width={180}
              height={180}
              className="object-contain w-auto h-[180px] sm:h-[220px] md:h-[250px] lg:h-[280px] xl:h-[300px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
