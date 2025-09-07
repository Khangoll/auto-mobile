import React from "react";

const Passengers = () => {
  return (
    <div
      style={{
        backgroundImage: "url('about-bg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16 lg:gap-20">
          <div>
            <p className="text-gray-400 mb-3 text-base sm:text-lg">
              Let us show you some stats
            </p>
            <p className="text-white font-bold text-3xl sm:text-4xl">
              Check our numbers
            </p>
            <p className="text-white font-bold text-3xl sm:text-4xl mb-4">
              over the past few years.
            </p>
            <p className="text-gray-400 text-sm sm:text-base">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected .
            </p>
          </div>

          <div className="grid grid-cols-1 items-center justify-center sm:grid-cols-3 gap-6 md:gap-8">
            <div className="flex flex-col items-center md:items-start">
              <p className="text-[#0888A3]  text-3xl sm:text-4xl lg:text-5xl  font-bold">
                456
              </p>
              <p className="text-white  text-sm sm:text-base">
                Product Delivered
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <p className="text-red-600 text-3xl sm:text-4xl lg:text-5xl font-bold">
                599
              </p>
              <p className="text-white text-sm sm:text-base">Happy Customers</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <p className="text-[#0888A3] text-3xl sm:text-4xl lg:text-5xl font-bold">
                780
              </p>
              <p className="text-white text-sm sm:text-base">
                Product Delivered
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Passengers;
