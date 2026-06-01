import FeaturedCategoryData from "../../Data/FeaturedCategoryData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const FeaturedCategory = () => {
  return (
    <section className="container mx-auto px-4 my-24 featured-category">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-2"> Top Collections </h2>
        <p>
          Express your style with our standout collection—fashion meets
          sophistication.
        </p>
      </div>

      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={24}
        loop={true}
        speed={900}
        centeredSlides={false}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1199: {
            slidesPerView: 5,
          },
          1600: {
            slidesPerView: 6,
          },
        }}
      >
        {FeaturedCategoryData.map((featured) => {
          return (
            <SwiperSlide key={featured.id}>
              <div className="flex flex-col items-center text-center">
                <div className="w-full max-w-44 aspect-square rounded-full overflow-hidden group mx-auto">
                  <img
                    src={featured.img}
                    alt={featured.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-125"
                  />
                </div>
                <h3 className="font-semibold capitalize mt-4 text-base">
                  {featured.title}
                </h3>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default FeaturedCategory;
