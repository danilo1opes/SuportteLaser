// app/diversos/page.tsx
import Image from 'next/image';
import diversosData from '@/data/diversos-data.json';

export default function Diversos() {
  const { afiadores, baralhos, machados, tabua } =
    diversosData.products.diversos;

  return (
    <section className="px-4 sm:px-10 py-12">
      <h1 className="text-center text-3xl sm:text-4xl font-bold text-zinc-800 mb-12 tracking-wide">
        DIVERSOS
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Imagem principal */}
        <div className="bg-[#D8DEE9] rounded-xl flex flex-col items-center justify-center p-6 text-center">
          <Image
            src="/img/diversos/machado.svg"
            alt="Suporte Laser"
            width={500}
            height={500}
            className="mx-auto scale-125" // Aumenta a imagem sem mexer no container
          />
          <h2 className="text-xl font-bold text-zinc-900 mt-6">
            SUPORTTE LASER
          </h2>
          <p className="text-zinc-700 text-sm mt-2">
            Seu estilo, gravado no metal, <br />
            com detalhes que marcam!!
          </p>
        </div>

        {/* Cards de categorias */}
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
          {/* Categoria: Afiadores */}
          <CategoryCard
            title="Afiadores"
            subtitle="Precisão e corte afiado sempre à mão."
            items={afiadores}
          />

          {/* Categoria: Baralhos */}
          <CategoryCard
            title="Baralhos"
            subtitle="Mais que um jogo, uma experiência única."
            items={baralhos}
          />

          {/* Categoria: Machados */}
          <CategoryCard
            title="Machados"
            subtitle="Machados que carregam história e poder."
            items={machados}
          />

          {/* Categoria: Tábua */}
          <CategoryCard
            title="Tabua"
            subtitle="A base perfeita para cada corte e criação."
            items={tabua}
          />
        </div>
      </div>
    </section>
  );
}

type Product = {
  id: number;
  nome: string;
  preco: string;
  imagem: string;
};

type Props = {
  title: string;
  subtitle: string;
  items: Product[];
};

function CategoryCard({ title, subtitle, items }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 text-center">
      <h3 className="font-semibold text-lg text-zinc-900">{title}</h3>
      <p className="text-sm text-zinc-600">{subtitle}</p>
      <div className="flex justify-center items-center gap-4 mt-4">
        {items.map((item) => (
          <div key={item.id} className="text-center">
            <Image
              src={item.imagem}
              alt={item.nome}
              width={100}
              height={100}
              className="rounded"
            />
            <p className="text-sm text-zinc-800 mt-2">{item.preco}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
