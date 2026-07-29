"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import ProductCard from "@/components/product/ProductCard";
import FilterDrawer from "@/components/shop/FilterDrawer";
import { products } from "@/lib/products";

export default function ShopPage() {
  const [filterOpen, setFilterOpen] = useState(false);

  const [category, setCategory] = useState("all");
  const [collection, setCollection] = useState("all");
  const [sort, setSort] = useState("featured");

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (category !== "all") {
      filtered = filtered.filter(
        (product) => product.category === category
      );
    }

    if (collection !== "all") {
      filtered = filtered.filter(
        (product) => product.collection === collection
      );
    }

    switch (sort) {
      case "low":
        filtered.sort((a, b) => a.price - b.price);
        break;

      case "high":
        filtered.sort((a, b) => b.price - a.price);
        break;

      case "az":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;

      default:
        break;
    }

    return filtered;
  }, [category, collection, sort]);

  return (
    <>
      <Navbar />

      <FilterDrawer
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
        category={category}
        setCategory={setCategory}
        collection={collection}
        setCollection={setCollection}
      />

      <main className="mx-auto max-w-7xl px-5 pt-24 pb-20 sm:px-6 sm:pt-32 sm:pb-28">
        <div className="mb-10">
          <p className="text-[10px] font-semibold tracking-[.25em] text-[#D8B56A] uppercase">The collection</p><h1 className="mt-3 font-serif text-4xl font-light sm:text-5xl">Shop</h1>
          <p className="mt-2 text-[#081A35]/55">
            {filteredProducts.length} Products
          </p>
        </div>

        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => setFilterOpen(true)}
            className="flex min-h-12 items-center gap-2 rounded-full border border-[#081A35]/25 px-5 text-sm transition hover:border-[#081A35] hover:bg-[#081A35] hover:text-white"
          >
            <SlidersHorizontal size={18} />
            Filters
          </button>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="min-h-12 rounded-full border border-[#081A35]/20 bg-white px-5 text-sm outline-none focus:ring-2 focus:ring-[#D8B56A]"
          >
            <option value="featured">Featured</option>
            <option value="low">Price: Low → High</option>
            <option value="high">Price: High → Low</option>
            <option value="az">Name A–Z</option>
          </select>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center">
            <h2 className="text-2xl font-light">
              No products found
            </h2>

            <p className="mt-3 text-neutral-500">
              Try changing your filters.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
