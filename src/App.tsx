import BestSelling from "./component/bestSelling/BestSelling";
import FeaturedCategory from "./component/featuredCategory/FeaturedCategory";
import Footer from "./component/footer/Footer";
import Hero from "./component/hero/Hero";
import HamburgerNav from "./component/navbar/HamburgerNav";
import Navbar from "./component/navbar/Navbar";
import PromoBanner from "./component/promoBanner/PromoBanner";
import PromoBannerFull from "./component/PromoBannerFull";
import PromoMarquee from "./component/PromoMarquee";
import ServiceHighlights from "./component/ServiceHighlights";
import TrendingProducts from "./component/TrendingProducts";

const App = () => {
  return (
    <div className="font-instrument">
      <Navbar />
      <HamburgerNav />
      <Hero />
      <FeaturedCategory />
      <BestSelling />
      <PromoBanner />
      <PromoMarquee />
      <TrendingProducts />
      <PromoBannerFull />
      <ServiceHighlights />
      <Footer />
    </div>
  );
};

export default App;
