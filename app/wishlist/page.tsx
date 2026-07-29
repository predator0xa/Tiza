"use client";

import Navbar from "@/components/layout/Navbar";
import ProductCard from "@/components/product/ProductCard";
import { useWishlist } from "@/context/WishlistContext";

export default function WishlistPage() {
  const { wishlist } = useWishlist();

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-5 pt-24 pb-20 sm:px-6 sm:pt-28 sm:pb-28">
        <p className="text-[10px] font-semibold tracking-[.25em] text-[#D8B56A] uppercase">Private selection</p><h1 className="mb-10 mt-3 font-serif text-4xl font-light sm:text-5xl">
          Wishlist
        </h1>

        {wishlist.length === 0 ? (
          <div className="rounded-[2rem] border border-[#081A35]/10 bg-white px-6 py-16 text-center"><p className="font-serif text-2xl font-light">Your selection is waiting.</p><p className="mt-3 text-sm text-[#081A35]/55">Save pieces you would like to return to.</p></div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {wishlist.map((product) => (
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
