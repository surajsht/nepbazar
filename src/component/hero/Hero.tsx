import heroData from "../../Data/HeroData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <section>
      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={900}
      >
        {heroData.map((hero) => {
          return (
            <SwiperSlide key={hero.id} className="relative">
              <img
                src={hero.img}
                alt={hero.title}
                className="w-full h-[80vh] object-cover"
              />

              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full">
                <div className="container mx-auto px-4">
                  <div className="w-full md:w-1/2 space-y-6">
                    <span className="text-lg font-medium">
                      {hero["sub-title"]}
                    </span>
                    <h2 className="text-4xl md:text-7xl font-bold capitalize">
                      {hero.title}
                    </h2>

                    <button className="relative group overflow-hidden px-4 py-2 md:px-6 md:py-3  border-2 border-black">
                      <span className="block transition-transform duration-300 group-hover:-translate-y-9">
                        Shop Now
                      </span>

                      <span
                        className="absolute inset-0 flex items-center justify-center
           translate-y-full transition-transform duration-300
           group-hover:translate-y-0"
                      >
                        Let’s Go
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Hero;
