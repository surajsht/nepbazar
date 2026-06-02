const PromoBannerFull = () => {
  return (
    <section className="relative my-24">
      <img
        src="/promo-banner-full.webp"
        alt="promotional banner image"
        className="h-80 md:h-96 lg:h-[640px] w-full object-cover"
      />

      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2">
        <div className="container mx-auto px-4">
          <div className="w-2/3 ml-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 md:mb-12">
              Pay less, stay in fashion!
            </h2>
            <button className="relative group overflow-hidden px-4 py-2 lg:px-6 lg:py-3  border-2 border-black">
              <span className="block transition-transform duration-300 group-hover:-translate-y-9 capitalize">
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
    </section>
  );
};

export default PromoBannerFull;
