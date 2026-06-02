import { LiaShippingFastSolid } from "react-icons/lia";
import { GiReturnArrow } from "react-icons/gi";
import { PiChats } from "react-icons/pi";

const ServiceHighlightsData = [
  {
    id: 0,
    title: "Free Shipping",
    description:
      "Enjoy free worldwide shipping and returns, with customs and duties taxes included.",
    icon: <LiaShippingFastSolid size={36} />,
  },
  {
    id: 1,
    title: "Free Returns",
    description:
      "Free returns within 15 days, please make sure the items are in undamaged condition.",
    icon: <GiReturnArrow size={36} />,
  },
  {
    id: 2,
    title: "Support Online",
    description:
      "We support customers 24/7, send questions we will solve for you immediately.",
    icon: <PiChats size={36} />,
  },
];

export default ServiceHighlightsData;
