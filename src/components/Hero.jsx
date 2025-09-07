import React from "react";
import Header1 from "./Header";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: "url('banner.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-screen"
    >
      <Header1 />

      <div  className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid min-h-[calc(100vh-5rem)] grid-cols-1 items-center gap-10 py-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          <div className="order-2 md:order-1">
            <h1 className="text-white font-extrabold leading-tight">
              <span className="block text-4xl sm:text-5xl lg:text-7xl">
                Premium
              </span>
              <span className="mt-1 block text-4xl sm:text-5xl lg:text-7xl text-[#0888A3] whitespace-nowrap">
                Auto Accessories
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg font-semibold text-white/90">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              ratione officia possimus. Itaque non, consequatur aliquam hic
              laudantium at laborum.
            </p>

            <button className="mt-8 inline-flex items-center justify-center rounded-full bg-[#e63946] px-8 py-3 sm:px-10 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-lg transition-colors duration-500 ease-in-out hover:bg-[#0888A3]">
              Learn More
            </button>
          </div>

          <div className="order-1 md:order-2 flex items-center justify-center">
            <img
              src="banner-product.png"
              alt="Featured product"
              className="w-full max-w-[560px] md:max-w-[620px] lg:max-w-[680px] object-contain ]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
