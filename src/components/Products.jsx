import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../products.css"; // 2-р хэсгийн CSS-ээ энд импортлоорой

const items = [
  { id: "1", title: "Premium Alloy Wheel", img: "product-img3.png" },
  { id: "2", title: "Imported Car Tire Wheel", img: "product-img1.png" },
  { id: "3", title: "Performance Brake System", img: "product-img2.png" },
  { id: "4", title: "Premium Alloy Wheel", img: "product-img3.png" },
  { id: "5", title: "Imported Car Tire Wheel", img: "product-img1.png" },
  { id: "6", title: "Performance Brake System", img: "product-img2.png" },
];

const Arrow = ({ onClick, dir = "left" }) => (
  <button
    onClick={onClick}
    aria-label={dir === "left" ? "Previous" : "Next"}
    className={`absolute top-1/2 z-20 -translate-y-1/2 text-7xl text-gray-400 hover:text-white transition-colors duration-300
      ${dir === "left" ? "left-3 md:left-6" : "right-3 md:right-6"}`}
  >
    {dir === "left" ? "‹" : "›"}
  </button>
);
const Products = () => {
  const [current, setCurrent] = useState(0);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 700,
    cssEase: "ease-in-out",
    arrows: true,
    dots: false,
    nextArrow: <Arrow dir="right" />,
    prevArrow: <Arrow dir="left" />,
    afterChange: (i) => setCurrent(i % items.length),
    responsive: [
      {
        breakpoint: 1024,
        settings: { centerPadding: "80px", slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, centerPadding: "0px" },
      },
    ],
  };

  const active = items[current];

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-[#111]"
      style={{
        backgroundImage: "url('banner.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        id="products"
        className="mx-auto max-w-7xl px-6 pt-16 text-center md:px-10"
      >
        <p className="text-white text-4xl md:text-5xl font-semibold">
          Accessories
        </p>
        <p className="text-[#0888A3] text-5xl md:text-6xl font-extrabold mt-2">
          Latest Products
        </p>
      </div>

      <div className="relative mx-auto mt-12 max-w-7xl px-4 md:px-10">
        <Slider {...settings}>
          {items.map((s) => (
            <div key={s.id} className="px-4">
              <div className="slide-inner mx-auto flex h-[360px] w-[360px] items-center justify-center">
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-full w-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.55)] select-none"
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </Slider>

        <div className="mt-8 text-center">
          <h3 className="text-white text-2xl md:text-3xl font-extrabold">
            {active.title}
          </h3>
          <button
            className="mt-10 inline-flex items-center justify-center rounded-full bg-[#e63946] px-10 py-4 text-lg font-semibold text-white shadow-lg 
  transition-colors duration-500 ease-in-out hover:bg-[#0888A3]"
          >
            View Detail
          </button>
        </div>
      </div>

      <div className="h-16" />
    </section>
  );
};

export default Products;
