'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { generateWhatsAppLink } from '@/lib/utils/whatsapp';
import rawProductsData from '@/data/products-data.json';

// Tipos
type Categoria = {
  id: string;
  name: string;
  image: string;
};

type Produto = {
  id: string;
  nome: string;
  imagem: string;
  preco: string;
  descricao?: string;
};

type ProductsData = {
  categories: Categoria[];
  products: {
    [categoryId: string]: Produto[];
  };
};

export function ProductsCategories() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const productsData = rawProductsData as unknown as ProductsData;
  const { categories, products } = productsData;

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory((prev) => (prev === categoryId ? null : categoryId));
  };

  const handleProductClick = (produto: Produto) => {
    const whatsappUrl = generateWhatsAppLink(produto);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="linha-feminina" className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-6">
        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 lg:gap-8 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className="group"
            >
              <div
                className={`flex flex-col items-center space-y-4 p-4 lg:p-6 rounded-2xl bg-white hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 cursor-pointer ${
                  activeCategory === category.id
                    ? 'ring-2 ring-gray-900 bg-gray-100'
                    : ''
                }`}
              >
                <div className="relative w-16 h-16 lg:w-20 lg:h-20 bg-gray-100 rounded-full p-3 lg:p-4 group-hover:bg-gray-200 transition-colors duration-300 group-hover:scale-110">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <h3 className="text-sm lg:text-base font-semibold font-nunito text-gray-900 text-center leading-tight group-hover:text-gray-700 transition-colors duration-300">
                  {category.name}
                </h3>

                <div className="text-gray-400">
                  {activeCategory === category.id ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Expanded Category Products */}
        {activeCategory && products[activeCategory] && (
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-8 transition-all duration-500 ease-in-out animate-in slide-in-from-top-4">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900">
                {categories.find((cat) => cat.id === activeCategory)?.name}
              </h3>
              <button
                onClick={() => setActiveCategory(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-2 hover:bg-gray-100 rounded-full"
                aria-label="Fechar categoria"
              >
                <ChevronUp className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products[activeCategory].map((produto) => (
                <div
                  key={produto.id}
                  className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="aspect-square bg-gray-100 p-4 overflow-hidden">
                    <Image
                      src={produto.imagem}
                      alt={produto.nome}
                      width={250}
                      height={250}
                      className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-4">
                    <h4 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[3rem]">
                      {produto.nome}
                    </h4>

                    {produto.descricao && (
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {produto.descricao}
                      </p>
                    )}

                    <p className="text-xl font-bold text-gray-900 mb-4">
                      {produto.preco}
                    </p>

                    <button
                      onClick={() => handleProductClick(produto)}
                      className="w-full bg-brand-primary hover:bg-gray-800  text-white py-2.5 px-4 rounded-full font-medium text-sm flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-md active:scale-95"
                    >
                      <FaWhatsapp className="w-4 h-4" />
                      Comprar Agora
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductsCategories;
