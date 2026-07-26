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

      <main className="mx-auto max-w-7xl px-6 pt-32 pb-16">
        <div className="mb-10">
          <h1 className="text-5xl font-light">Shop</h1>
          <p className="mt-2 text-neutral-500">
            {filteredProducts.length} Products
          </p>
        </div>

        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => setFilterOpen(true)}
            className="flex items-center gap-2 rounded-full border border-black px-5 py-3 transition hover:bg-black hover:text-white"
          >
            <SlidersHorizontal size={18} />
            Filters
          </button>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-full border border-neutral-300 px-5 py-3 outline-none"
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