"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
<section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white pt-36 md:pt-40">      {/* Background decoration */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-100 blur-3xl" />

      </div>

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center"
      >

        <p className="mb-6 tracking-[12px] text-sm uppercase text-neutral-500">
          Luxury • Modern • Minimal
        </p>

        <h1
          className="text-[120px] font-light tracking-[20px] text-black"
          style={{
            fontFamily: "Cormorant Garamond",
          }}
        >
          TIZA
        </h1>

        <h2 className="mt-6 text-4xl font-light">
          Don't just fit into the story.
        </h2>

        <div className="mt-4 flex flex-col items-center">
  <p className="text-lg text-neutral-500">
    Write your own.
  </p>

  <div className="mt-8 h-px w-28 bg-neutral-300"></div>
</div>

        <button className="mt-14 rounded-full bg-black px-10 py-4 text-white transition duration-300 hover:scale-105 hover:bg-neutral-800">
          Discover Collection
        </button>

      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-neutral-400">
        ↓
      </div>

    </section>
  );
}