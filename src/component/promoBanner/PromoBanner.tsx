import PromoBannerData from "../../Data/PromoBannerData";

const PromoBanner = () => {
  return (
    <section className="container mx-auto px-4 my-24 featured-category">
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        {PromoBannerData.map((data) => {
          return (
            <div key={data.id} className="flex-1 relative">
              <img
                src={data.img}
                alt={data.title}
                className="h-72 lg:h-80 w-full object-cover"
              />

              <div className="absolute top-1/2 left-8 -translate-y-1/2">
                <span className="text-lg font-medium mb-2 block">
                  {data["sub-title"]}
                </span>
                <h2 className="text-4xl font-bold"> {data.title} </h2>
                <button className="relative group overflow-hidden px-4 py-2 lg:px-6 lg:py-3  border-2 border-black mt-4">
                  <span className="block transition-transform duration-300 group-hover:-translate-y-9 capitalize">
                    {data["btn-label"]}
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
          );
        })}
      </div>
    </section>
  );
};

export default PromoBanner;
