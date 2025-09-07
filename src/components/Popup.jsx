import React, { useEffect, useState } from "react";

const sampleProduct = {
  title: "Imported Car Tire",
  article: "PZ-1000-23",
  description:
    "Lorem ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been the industry's standard dummy.",
  price: 299,
  sizes: ["155/75", "165/75", "185/75", "210/75"],
  images: ["product-img1.png", "product-img3.png", "product-img2.png"],
};

export default function Popup({
  open = true,
  onClose = () => {},
  product = sampleProduct,
  onNext = () => {},
  onPrev = () => {},
}) {
  const [activeImg, setActiveImg] = useState(0);
  const [size, setSize] = useState(product.sizes?.[1] || "");
  const [qty, setQty] = useState(2);

  // lock scroll when open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = prev);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
        onClick={onClose}
      />

      <div className="relative z-10 w-[90%] max-w-5xl rounded-lg bg-[#121212] shadow-2xl ring-1 ring-white/10">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 text-2xl leading-none text-white/70 hover:text-white"
        >
          ×
        </button>

        <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-2 md:p-10">
          <div className="flex flex-col items-center">
            <div className="flex h-[280px] w-full items-center justify-center rounded-md bg-black/30 p-4 md:h-[360px]">
              <img
                src={product.images[activeImg]}
                alt={product.title}
                className="max-h-full w-auto select-none object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)]"
                draggable={false}
              />
            </div>

            <div className="mt-6 flex items-center justify-center gap-6">
              {product.images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`rounded-md bg-transparent p-2 ring-1 transition
                    ${
                      i === activeImg
                        ? "ring-white/60"
                        : "ring-white/10 hover:ring-white/30"
                    }`}
                >
                  <img
                    src={src}
                    alt={`thumb-${i}`}
                    className="h-14 w-14 object-contain opacity-90"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-sm font-medium text-white/70">
              Article {product.article}
            </p>
            <h2 className="mt-1 text-3xl font-extrabold text-white md:text-4xl">
              {product.title}
            </h2>

            <p className="mt-6 text-white/80">{product.description}</p>

            <div className="mt-8 flex items-center gap-6">
              <span className="text-[#1fb6ff]">Size:</span>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`rounded-full px-4 py-2 text-sm transition
                      ${
                        size === s
                          ? "bg-white text-black"
                          : "bg-white/5 text-white hover:bg-white/10"
                      }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center gap-6">
              <span className="text-[#1fb6ff]">Qty:</span>
              <div className="inline-flex items-center gap-4">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="h-8 w-8 rounded-full bg-white/10 text-white hover:bg-white/20"
                >
                  –
                </button>
                <span className="min-w-6 text-center text-white">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="h-8 w-8 rounded-full bg-white/10 text-white hover:bg-white/20"
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <p className="text-3xl font-extrabold text-white md:text-4xl">
                ${product.price.toFixed(2)}
              </p>
              <button className="rounded-full bg-[#e63946] px-7 py-3 font-semibold text-white shadow-lg shadow-[#e63946]/30 transition-colors duration-300 hover:bg-[#c92a38]">
                Buy Link
              </button>
            </div>

            <div className="mt-10 flex items-center justify-end gap-3">
              <button
                onClick={onPrev}
                className="h-10 w-10 rounded-full text-2xl text-gray-300 hover:text-white"
                aria-label="Previous"
                title="Previous"
              >
                ‹
              </button>
              <button
                onClick={onNext}
                className="h-10 w-10 rounded-full text-2xl text-gray-300 hover:text-white"
                aria-label="Next"
                title="Next"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
