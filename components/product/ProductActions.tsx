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

        <div className="flex gap-3">
          {["S", "M", "L", "XL"].map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`h-12 w-12 rounded-full border transition ${
                size === s
                  ? "bg-black text-white"
                  : "hover:bg-black hover:text-white"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 flex gap-4">
        <button
          onClick={handleAddToCart}
          className="flex-1 rounded-full bg-black py-4 text-white transition hover:bg-neutral-800"
        >
          {added ? "Added ✓" : "Add to Cart"}
        </button>

      </div>
    </>
  );
}