"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

type Props = {
  id: string;
  name: string;
  image: string;
  price: number;
};

export default function ProductActions({
  id,
  name,
  image,
  price,
}: Props) {
  const { addToCart } = useCart();

  const [size, setSize] = useState("M");
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
  console.log("Adding to cart:", {
    id,
    name,
    image,
    price,
    size,
    quantity: 1,
  });

  addToCart({
    id,
    name,
    image,
    price,
    size,
    quantity: 1,
  });

  setAdded(true);

  setTimeout(() => {
    setAdded(false);
  }, 1500);
};

  return (
    <>
      <div className="mt-10">
        <p className="mb-4 text-sm uppercase tracking-[4px]">
          Size
        </p>

        <div className="flex flex-wrap gap-3">
          {["S", "M", "L", "XL"].map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`h-12 w-12 rounded-full border transition ${
                size === s
                  ? "border-[#081A35] bg-[#081A35] text-white"
                  : "border-[#081A35]/20 hover:border-[#081A35] hover:bg-[#081A35] hover:text-white"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="sticky bottom-3 z-10 mt-10 flex gap-4 rounded-2xl bg-[#f8f7f4]/90 p-2 backdrop-blur sm:static sm:bg-transparent sm:p-0">
        <button
          onClick={handleAddToCart}
          className="min-h-14 flex-1 rounded-full bg-[#081A35] py-4 text-sm font-medium tracking-[.08em] text-white transition hover:bg-[#102849]"
        >
          {added ? "Added ✓" : "Add to Cart"}
        </button>

      </div>
    </>
  );
}
