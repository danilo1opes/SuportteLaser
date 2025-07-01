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
    <section id="produtos" className="bg-gray-100 py-16 lg:py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Facas Personalizadas
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {currentProducts.map((produto) => (
            <div
              key={produto.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Product Image */}
              <div className="aspect-square bg-gray-50 p-6">
                <Image
                  src={produto.imagem}
                  alt={produto.nome}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {produto.nome}
                </h3>
                <p className="text-2xl font-bold text-gray-900 mb-4">
                  {produto.preco}
                </p>

                {/* WhatsApp Button */}
                <button
                  onClick={() => handleProductClick(produto)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 px-4 rounded-full font-medium text-sm flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-md active:scale-95"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  Comprar Agora
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
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
