import Hero from "./component/hero/Hero";
import HamburgerNav from "./component/navbar/HamburgerNav";
import Navbar from "./component/navbar/Navbar";

const App = () => {
  return (
    <div className="font-mark-pro">
      <Navbar />
      <HamburgerNav />
      <Hero />
    </div>
  );
};

export default App;
