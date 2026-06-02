import TrendingProductsData from "../Data/TrendingProductsData";

const TrendingProducts = () => {
  return (
    <section className="container mx-auto px-4 my-24 featured-category">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-2"> Trending Products </h2>
        <p>
          Check out today's trending favorites and discover the must-have picks!
        </p>
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {TrendingProductsData.map((data) => {
          const discountPercentage = Math.trunc(
            ((Number(data.price) - Number(data.discountPrice)) /
              Number(data.price)) *
              100,
          );

          return (
            <div key={data.id} className="text-center">
              <div className="relative">
                <img
                  src={data.img}
                  alt={data.title}
                  className="w-full h-96 xl:h-[460px] object-cover"
                />

                <span className="absolute top-6 left-6 bg-green-400 text-sm font-medium px-3 py-1">
                  {discountPercentage}%
                </span>
              </div>

              <h3 className="font-semibold text-lg capitalize mt-2 mb-1">
                {data.title}
              </h3>

              <div>
                <span className="text-red-600 line-through mr-2 font-medium">
                  ${data.price}
                </span>
                <span className="font-medium"> ${data.discountPrice} </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-14">
        <button className="relative px-4 py-2 lg:px-6 lg:py-3  border-2 border-black">
          Show More
        </button>
      </div>
    </section>
  );
};

export default TrendingProducts;
