"use client";

import { motion } from "framer-motion";

const categories = [
  "Oversized",
  "Hoodies",
  "Streetwear",
  "Essentials",
];

export default function FeaturedCategories() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <motion.h2
        initial={{opacity:0,y:30}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:.6}}
        className="mb-14 text-center text-5xl font-light"
      >
        Collections
      </motion.h2>

      <div className="grid gap-6 md:grid-cols-2">

        {categories.map((item) => (
          <motion.div
            key={item}
            whileHover={{scale:1.02}}
            transition={{duration:.25}}
            className="group flex h-[420px] cursor-pointer items-end rounded-3xl bg-neutral-100 p-8"
          >
            <div>

              <h3 className="text-4xl font-light transition group-hover:translate-x-2">
                {item}
              </h3>

              <p className="mt-3 text-neutral-500">
                Explore →
              </p>

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}