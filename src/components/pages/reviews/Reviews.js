const Reviews = () => {
  return (
    <div className="w-full ">
      <div className="container  mx-auto">
        {/* Header Section */}
        <div className="main-title2">
          <h2 className="title">Customer Reviews</h2>
          <p className="paragraph">Reviews</p>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Customer Reviews */}
        <div className="w-full md:w-1/2 relative group overflow-hidden">
          <img
            src="https://i.postimg.cc/DZfgR0s8/Finland.jpg"
            alt="Customer Reviews"
            className="w-full h-[300px] md:h-[500px] object-cover filter grayscale transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/60">
            <div className="absolute inset-0 flex flex-col items-center justify-center  opacity-100 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-gray-300">
                CUSTOMER
              </h2>
            </div>
          </div>
        </div>

        {/* Landowner Reviews */}
        <div className="w-full md:w-1/2 relative group overflow-hidden">
          <img
            src="https://i.postimg.cc/05WWRYVx/Australia.jpg"
            alt="Landowner Reviews"
            className="w-full h-[300px] md:h-[500px] object-cover filter grayscale transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/60">
            <div className="absolute inset-0 flex flex-col items-center justify-center  opacity-100 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-gray-300">
                LANDOWNER
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
