import {
  FaFacebookF,
  FaTiktok,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FooterData = {
  company: ["About Us", "Careers", "Blog", "Press"],
  support: ["Help Center", "Shipping", "Returns", "Contact"],
};

const socialLinks = [
  {
    id: 0,
    name: "facebook",
    link: "https://www.facebook.com",
    icon: <FaFacebookF size={18} />,
  },
  {
    id: 1,
    name: "tiktok",
    link: "https://www.tiktok.com",
    icon: <FaTiktok size={18} />,
  },
  {
    id: 2,
    name: "instagram",
    link: "https://www.instagram.com",
    icon: <FaInstagram size={18} />,
  },
  {
    id: 3,
    name: "youtube",
    link: "https://www.youtube.com",
    icon: <FaYoutube size={18} />,
  },
  {
    id: 4,
    name: "x",
    link: "https://www.x.com",
    icon: <FaXTwitter size={18} />,
  },
  {
    id: 5,
    name: "pinterest",
    link: "https://www.pinterest.com",
    icon: <FaPinterest size={18} />,
  },
];

export default FooterData;
export { socialLinks };
