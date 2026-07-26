"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Eye } from "lucide-react";

type Product = {
  id: string;
  name: string;
  image: string;
  hoverImage: string;
  badge: string;
  price: number;
};

export default function ProductCard({
  product,
}: {
  product: Product;
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group"
    >
      <Link href={`/product/${product.id}`}>
        <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-neutral-100">
          {/* Badge */}
          <span className="absolute left-4 top-4 z-20 rounded-full bg-black px-3 py-1 text-xs tracking-wide text-white">
            {product.badge}
          </span>

          {/* Wishlist */}
          <button
            type="button"
            onClick={(e) => e.preventDefault()}
            className="absolute right-4 top-4 z-20 rounded-full bg-white/90 p-2 shadow transition hover:scale-110"
          >
            <Heart size={18} />
          </button>

          {/* Main Image */}
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority={false}
            className="object-cover transition duration-700 group-hover:scale-110"
          />

          {/* Hover Image (currently same image) */}
          <Image
            src={product.hoverImage}
            alt={product.name}
            fill
            priority={false}
            className="object-cover opacity-0 transition duration-700 group-hover:scale-110 group-hover:opacity-100"
          />

          {/* Quick View */}
          <div className="absolute inset-x-0 bottom-5 flex justify-center opacity-0 transition duration-300 group-hover:opacity-100">
            <button
              type="button"
              onClick={(e) => e.preventDefault()}
              className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium shadow-xl transition hover:bg-black hover:text-white"
            >
              <Eye size={16} />
              Quick View
            </button>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-lg font-medium">
            {product.name}
          </h3>

          <p className="mt-1 text-neutral-500">
            ₹{product.price.toLocaleString("en-IN")}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}