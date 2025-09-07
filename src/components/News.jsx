import React from "react";

const News = () => {
  return (
    <div
      style={{
        backgroundImage: "url('about-bg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-screen"
    >
      <div id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col items-center text-center">
          <p className="text-white font-semibold text-4xl sm:text-5xl mt-20 mb-2">
            Know About
          </p>
          <p className="text-[#0888A3] font-bold text-4xl sm:text-5xl mb-6 whitespace-nowrap">
            Auto Accessories
          </p>
          <p className="text-white text-base sm:text-lg font-semibold">
            Lorem ipsum is simply dummy text of the printing and typesetting.
          </p>
          <p className="text-white text-base sm:text-lg font-semibold">
            Lorem Ipsum has been the industry’s standard dummy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start gap-6 sm:gap-8 mt-16 pb-20">
          <div className="group">
            <div className="overflow-hidden">
              <img
                className="w-full object-cover group-hover:scale-110 transition-transform duration-700"
                src="about-img-1.jpg"
                alt="Customer Satisfaction"
              />
            </div>
            <p className="text-white font-bold text-xl sm:text-2xl my-4 group-hover:text-[#0888A3]">
              Customer Satisfaction
            </p>
            <p className="text-white mb-5 text-base sm:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              mauris arcu.
            </p>
            <a className="text-white hover:text-red-700" href="#">
              Learn More
            </a>
          </div>

          <div className="group">
            <div className="overflow-hidden">
              <img
                className="w-full object-cover group-hover:scale-110 transition-transform duration-700"
                src="about-img-1.jpg"
                alt="Customer Satisfaction"
              />
            </div>
            <p className="text-white font-bold text-xl sm:text-2xl my-4 group-hover:text-[#0888A3]">
              Customer Satisfaction
            </p>
            <p className="text-white mb-5 text-base sm:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              mauris arcu.
            </p>
            <a className="text-white hover:text-red-700" href="#">
              Learn More
            </a>
          </div>

          <div className="group">
            <div className="overflow-hidden">
              <img
                className="w-full object-cover group-hover:scale-110 transition-transform duration-700"
                src="about-img-1.jpg"
                alt="Customer Satisfaction"
              />
            </div>
            <p className="text-white font-bold text-xl sm:text-2xl my-4 group-hover:text-[#0888A3]">
              Customer Satisfaction
            </p>
            <p className="text-white mb-5 text-base sm:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              mauris arcu.
            </p>
            <a className="text-white hover:text-red-700" href="#">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
