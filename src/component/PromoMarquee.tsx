import MarqueeImport from "react-fast-marquee";
const Marquee = (MarqueeImport as any).default ?? MarqueeImport;
import PromoMarqueeData from "../Data/PromoMarqueeData";

const PromoMarquee = () => {
  return (
    <section className="pb-20 pt-8 overflow-hidden">
      <div className="-rotate-2 bg-black text-white py-6 scale-105">
        <Marquee speed={60} gradient={false}>
          {PromoMarqueeData.map((data) => {
            return (
              <div key={data.id} className="flex items-center gap-6 mx-12">
                <span className="text-4xl font-bold"> {data.title} </span>
                <p className="text-xl font-semibold">{data.subtitle}</p>
              </div>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
};

export default PromoMarquee;
