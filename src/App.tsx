import BestSelling from "./component/bestSelling/BestSelling";
import FeaturedCategory from "./component/featuredCategory/FeaturedCategory";
import Hero from "./component/hero/Hero";
import HamburgerNav from "./component/navbar/HamburgerNav";
import Navbar from "./component/navbar/Navbar";
import PromoBanner from "./component/promoBanner/PromoBanner";
import PromoMarquee from "./component/PromoMarquee";
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
    </div>
  );
};

export default App;
