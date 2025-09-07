import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const comments = [
  {
    id: "1",
    name: "David Miller",
    img: "testimonial-4.png",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris arcu.",
  },
  {
    id: "2",
    name: "Alex Jackson",
    img: "testimonial-1.png",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris arcu.",
  },
  {
    id: "3",
    name: "Mark Anthony",
    img: "testimonial-2.png",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris arcu.",
  },
  {
    id: "4",
    name: "Kelly Smith",
    img: "testimonial-3.png",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris arcu.",
  },
];

const nameColor = (i) =>
  ["text-red-500", "text-[#0ea5b7]", "text-red-500", "text-[#0ea5b7]"][i % 4];

const Comments = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 700,
    cssEase: "ease-in-out",
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      id="reviews"
      className="relative min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh] w-full bg-[#111]"
      style={{
        backgroundImage: "url('banner.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Heading */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 pt-12 sm:pt-14 md:pt-16 text-center">
        <p className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold">
          Best in Business
        </p>
        <p className="text-[#0888A3] text-4xl sm:text-5xl md:text-6xl font-extrabold mt-2">
          Happy Customers
        </p>
      </div>

      {/* Carousel */}
      <div className="mx-auto mt-8 sm:mt-10 md:mt-12 max-w-7xl px-4 sm:px-6 md:px-10">
        <Slider {...settings}>
          {comments.map((c, i) => (
            <div key={c.id} className="px-3 sm:px-4 md:px-6">
              <div className="flex flex-col items-center text-center">
                <div className="text-white/40 text-4xl sm:text-5xl leading-none select-none">
                  &ldquo;
                </div>

                <p className="mt-3 sm:mt-4 text-white/90 leading-relaxed text-base sm:text-[17px] md:text-lg">
                  {c.quote}
                </p>

                <img
                  src={c.img}
                  alt={c.name}
                  className="mt-5 sm:mt-6 h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover ring-2 ring-white/10"
                />

                <p
                  className={`mt-2 sm:mt-3 text-base sm:text-lg font-semibold ${nameColor(
                    i
                  )}`}
                >
                  {c.name}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="h-10 sm:h-12 md:h-16" />
    </section>
  );
};

export default Comments;
