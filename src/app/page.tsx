import HeroHeader from '@/components/HeroHeader';
import { Navbar } from '@/components/Navbar';
import ProductsCategories from '@/components/ProductsCategories';

export default function Page() {
  return (
    <div>
      <Navbar />
      <HeroHeader />
      <ProductsCategories />
    </div>
  );
}
