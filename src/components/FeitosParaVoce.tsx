'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { generateWhatsAppLink } from '@/lib/utils/whatsapp';
import chapeusData from '@/data/chapeus-data.json';
import kitsData from '@/data/kits-data.json';
import abridoresData from '@/data/abridores-data.json';
import chaveirosData from '@/data/chaveiros-data.json';

import type { Produto, ProductsByCategory } from '@/types/products';

export function FeitosParaVoce() {
  const [activeTab, setActiveTab] = useState('chapeus');

  // Converta os dados com tipo correto
  const chapeus = (chapeusData as ProductsByCategory).products.chapeus;
  const kits = (kitsData as ProductsByCategory).products.kits;
  const abridores = (abridoresData as ProductsByCategory).products.abridores;
  const chaveiros = (chaveirosData as ProductsByCategory).products.chaveiros;

  const tabs = [
    { id: 'chapeus', label: 'Chapéus', data: chapeus },
    { id: 'kits', label: 'Kits', data: kits },
    { id: 'abridores', label: 'Abridores', data: abridores },
    { id: 'chaveiros', label: 'Chaveiros', data: chaveiros },
  ];

  const currentProducts: Produto[] =
    tabs.find((tab) => tab.id === activeTab)?.data || [];

  const handleProductClick = (produto: Produto) => {
    const url = generateWhatsAppLink(produto);
    window.open(url, '_blank');
  };

  return (
    <section className="bg-white py-12 sm:py-14 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-5 md:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-10 sm:mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center sm:text-left">
            Feitos Para Você!!!
          </h2>

          <div className="flex flex-wrap justify-center sm:justify-end gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg font-medium text-sm transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-black text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {currentProducts.map((produto) => (
            <div
              key={produto.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-square bg-gray-50 p-4 sm:p-6">
                <Image
                  src={produto.imagem}
                  alt={produto.nome}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-light tracking-wide font-nunito text-gray-900 mb-2">
                  {produto.nome}
                </h3>
                <p className="text-xl sm:text-2xl font-bold font-inter text-gray-900 mb-4">
                  {produto.preco}
                </p>

                <button
                  onClick={() => handleProductClick(produto)}
                  className="w-full bg-brand-primary hover:bg-gray-800 text-white py-2 sm:py-2.5 px-4 rounded-full font-medium text-sm flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-md active:scale-95"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  Comprar Agora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeitosParaVoce;
