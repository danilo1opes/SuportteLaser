import Diversos from '@/components/Diversos';
import FacasPersonalizadas from '@/components/FacasPersonalizadas';
import FeitosParaVoce from '@/components/FeitosParaVoce';
import Footer from '@/components/Footer';
import HeroHeader from '@/components/HeroHeader';
import Navbar from '@/components/Navbar';
import ProductsCategories from '@/components/ProductsCategories';

export default function Page() {
  return (
    <div>
      <Navbar />
      <HeroHeader />
      <ProductsCategories />
      <FacasPersonalizadas />
      <FeitosParaVoce />
      <Diversos />
      <Footer />
    </div>
  );
}
