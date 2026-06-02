import FooterData from "../../Data/FooterData";
import FooterColumn from "./FooterColumn";
import FooterCTA from "./FooterCTA";
import FooterSocials from "./FooterSocials";

const Footer = () => {
  return (
    <footer className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        <FooterSocials />

        <div className="grid grid-cols-2 gap-6">
          <FooterColumn title="Company" items={FooterData.company} />
          <FooterColumn title="Support" items={FooterData.support} />
        </div>

        <FooterCTA />
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        © 2026 MyShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
