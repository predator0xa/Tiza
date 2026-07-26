"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { products } from "@/lib/products";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function SearchOverlay({ open, onClose }: Props) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return [];

    return products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="mx-auto mt-24 w-full max-w-3xl rounded-3xl bg-white p-8 shadow-2xl"
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-3xl font-light">Search Products</h2>

          <button onClick={onClose}>
            <X size={22} />
          </button>
        </div>

        <div className="flex items-center gap-3 rounded-xl border px-4 py-3">
          <Search size={18} />

          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full outline-none"
          />
        </div>

        <div className="mt-6 space-y-2">
          {results.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              onClick={onClose}
              className="block rounded-xl p-4 transition hover:bg-neutral-100"
            >
              <div className="font-medium">{product.name}</div>

              <div className="text-sm text-neutral-500">
                ₹{product.price.toLocaleString("en-IN")}
              </div>
            </Link>
          ))}

          {query && results.length === 0 && (
            <p className="text-neutral-500">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}