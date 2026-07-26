"use client";

import Navbar from "@/components/layout/Navbar";
import ProductCard from "@/components/product/ProductCard";
import { useWishlist } from "@/context/WishlistContext";

export default function WishlistPage() {
  const { wishlist } = useWishlist();

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-28">
        <h1 className="mb-10 text-5xl font-light">
          Wishlist
        </h1>

        {wishlist.length === 0 ? (
          <p className="text-neutral-500">
            Your wishlist is empty.
          </p>
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