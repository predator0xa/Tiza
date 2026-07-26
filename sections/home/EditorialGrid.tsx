"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  {
    title: "MEN",
    subtitle: "Modern Essentials",
    image: "/images/collections/men.jpg",
    className: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "NEW ARRIVALS",
    subtitle: "Latest Drop",
    image: "/images/collections/new.jpg",
    className: "lg:row-span-2",
  },
  {
    title: "WOMEN",
    subtitle: "Luxury Collection",
    image: "/images/collections/women.jpg",
    className: "",
  },
  {
    title: "ACCESSORIES",
    subtitle: "Complete Your Look",
    image: "/images/collections/accessories.jpg",
    className: "",
  },
];

export default function EditorialGrid() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-36">
      <div className="mb-16 text-center">
        <p className="text-sm uppercase tracking-[8px] text-neutral-500">
          Discover
        </p>

        <h2 className="mt-4 text-4xl font-light md:text-6xl">
          Collections
        </h2>
      </div>

      <div className="grid auto-rows-[230px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[270px]">
        {categories.map((item) => (
          <motion.div
            key={item.title}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className={`${item.className} group relative cursor-pointer overflow-hidden rounded-[32px]`}
          >
            {/* Background Image */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width:768px)100vw,(max-width:1024px)50vw,33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-2"            />

            {/* Premium Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-all duration-500 group-hover:from-black/80 group-hover:via-black/25" />

            {/* Content */}
            <div className="absolute bottom-10 left-8 z-10">
              <p className="mb-2 text-xs uppercase tracking-[5px] text-white/80">
                {item.subtitle}
              </p>

              <h3 className="text-3xl font-extralight tracking-tight text-white md:text-5xl">
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}