import Link from 'next/link';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Slogan */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <h2 className="text-xl font-bold font-libre">SUPORTE LASER</h2>
            </div>
            <p className="text-gray-300 italic">
              {' '}
              Temos brindes que combinam com a sua marca{' '}
            </p>

            {/* Redes Sociais */}
            <div className="flex space-x-4 mt-6">
              <Link
                href="https://wa.me/5562992973765"
                target="_blank"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <FaWhatsapp className="text-lg" />
              </Link>
              <Link
                href="https://instagram.com/suportte_laser"
                target="_blank"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <FaInstagram className="text-lg" />
              </Link>
            </div>
          </div>

          {/* Redes */}
          <div>
            <h3 className="font-semibold text-lg mb-4">REDES</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://instagram.com/suportte_laser"
                  target="_blank"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://wa.me/5562992973765"
                  target="_blank"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  WhatsApp
                </Link>
              </li>
            </ul>
          </div>

          {/* Ajuda e Informações */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Ajuda e Informações</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/termos"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Termos e Condições
                </Link>
              </li>
              <li>
                <Link
                  href="/pdf/Catalogo.pdf"
                  target="_blank"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Catálogo PDF
                </Link>
              </li>
            </ul>
          </div>

          {/* Endereço */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Endereço</h3>
            <div className="text-gray-300 space-y-1">
              <p>Rua Araponga QD 23 LT 04</p>
              <p>Casa 1 - 0 - Parque Hayala</p>
              <p>Aparecida de Goiânia</p>
              <p className="mt-4">
                <Link
                  href="tel:+5562992973765"
                  className="hover:text-white transition-colors"
                >
                  +55 (62) 99297-3765
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-4">
          <p className="text-center text-gray-400 text-sm">
            © 2025 Suporte Laser. Criado por danilo1opes
          </p>
        </div>
      </div>
    </footer>
  );
}
