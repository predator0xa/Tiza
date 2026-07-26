"use client";

import { useState } from "react";

export default function SizeSelector() {
  const [selected, setSelected] = useState("M");

  return (
    <div className="flex gap-3">
      {["S", "M", "L", "XL"].map((size) => (
        <button
          key={size}
          onClick={() => setSelected(size)}
          className={`h-12 w-12 rounded-full border transition ${
            selected === size
              ? "bg-black text-white"
              : "hover:bg-black hover:text-white"
          }`}
        >
          {size}
        </button>
      ))}
    </div>
  );
}