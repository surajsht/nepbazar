import ServiceHighlightsData from "../Data/ServiceHighlightsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";
import "swiper/css";

const ServiceHighlights = () => {
  return (
    <section className="container max-w-[1200px] mx-auto px-4 my-24">
      <Swiper
        modules={[A11y, Autoplay]}
        spaceBetween={60}
        loop={true}
        speed={900}
        centeredSlides={false}
        autoplay={{
          delay: 6546,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          992: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
            loop: false,
          },
        }}
      >
        {ServiceHighlightsData.map((data) => {
          return (
            <SwiperSlide key={data.id}>
              <div className="flex flex-col items-center text-center gap-5">
                {data.icon}
                <h2 className=" font-medium"> {data.title} </h2>
                <p className="text-[#1e1e1e]"> {data.description} </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default ServiceHighlights;
