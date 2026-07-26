"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const products = [
  {
    id: "hoodie",
    name: "Oversized Hoodie",
    price: "₹2,499",
    image: "/images/products/hoodie.jpg",
  },
  {
    id: "tshirt",
    name: "Minimal Tee",
    price: "₹1,299",
    image: "/images/products/tshirt.jpg",
  },
  {
    id: "cargo",
    name: "Cargo Pants",
    price: "₹2,999",
    image: "/images/products/cargo.jpg",
  },
  {
    id: "jacket",
    name: "Leather Jacket",
    price: "₹5,999",
    image: "/images/products/jacket.jpg",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-32">
      <div className="mb-14 text-center">
        <p className="text-sm uppercase tracking-[8px] text-neutral-500">
          Shop
        </p>

        <h2 className="mt-4 text-5xl font-light">
          Featured Products
        </h2>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <motion.div
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-neutral-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <button
                  className="absolute right-4 top-4 rounded-full bg-white/90 p-2 backdrop-blur"
                  onClick={(e) => e.preventDefault()}
                >
                  <Heart size={18} />
                </button>
              </div>

              <h3 className="mt-5 text-lg">{product.name}</h3>

              <p className="mt-1 text-neutral-500">
                {product.price}
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}