import BestSelling from "./component/bestSelling/BestSelling";
import FeaturedCategory from "./component/featuredCategory/FeaturedCategory";
import Hero from "./component/hero/Hero";
import HamburgerNav from "./component/navbar/HamburgerNav";
import Navbar from "./component/navbar/Navbar";

const App = () => {
  return (
    <div className="font-instrument">
      <Navbar />
      <HamburgerNav />
      <Hero />
      <FeaturedCategory />
      <BestSelling />
    </div>
  );
};

export default App;
