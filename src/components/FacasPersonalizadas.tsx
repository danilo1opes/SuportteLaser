'use client';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { generateWhatsAppLink } from '@/lib/utils/whatsapp';
import facasData from '@/data/facas-data.json';

type Produto = {
  id: string;
  nome: string;
  imagem: string;
  preco: string;
  descricao?: string;
};

export function FacasPersonalizadas() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const produtos = facasData.products['facas-personalizadas'];

  const itemsPerPage = 4;
  const totalPages = Math.ceil(produtos.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const currentProducts = produtos.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  const handleProductClick = (produto: Produto) => {
    const url = generateWhatsAppLink(produto);
    window.open(url, '_blank');
  };

  return (
    <section id="produtos" className="bg-gray-100 py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-4 mb-8 sm:mb-12">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Facas Personalizadas
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-2 justify-center sm:justify-end">
            <button
              onClick={prevSlide}
              className="p-2.5 sm:p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 touch-manipulation"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2.5 sm:p-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 touch-manipulation"
              aria-label="Próximo"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {currentProducts.map((produto) => (
            <div
              key={produto.id}
              className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Product Image */}
              <div className="aspect-square bg-gray-50 p-4 sm:p-6">
                <Image
                  src={produto.imagem}
                  alt={produto.nome}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Product Info */}
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {produto.nome}
                </h3>
                <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {produto.preco}
                </p>

                {/* WhatsApp Button */}
                <button
                  onClick={() => handleProductClick(produto)}
                  className="w-full bg-brand-primary hover:bg-gray-800 text-white py-2.5 px-4 rounded-full font-medium text-sm flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-md active:scale-95 touch-manipulation"
                >
                  <FaWhatsapp className="w-4 h-4 flex-shrink-0" />
                  <span className="whitespace-nowrap">Comprar Agora</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 touch-manipulation ${
                  index === currentIndex ? 'bg-black' : 'bg-gray-300'
                }`}
                aria-label={`Ir para página ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default FacasPersonalizadas;
