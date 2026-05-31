import FeaturedCategory from "./component/featuredCategory/FeaturedCategory";
import Hero from "./component/hero/Hero";
import HamburgerNav from "./component/navbar/HamburgerNav";
import Navbar from "./component/navbar/Navbar";

const App = () => {
  return (
    <div className="font-mark-pro">
      <Navbar />
      <HamburgerNav />
      <Hero />
      <FeaturedCategory />
    </div>
  );
};

export default App;
