"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white pt-24 sm:pt-28 md:pt-40">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-100 blur-3xl sm:h-[550px] sm:w-[550px] md:h-[700px] md:w-[700px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 px-6 text-center"
      >
        <p className="whitespace-nowrap text-[11px] tracking-[0.18em] uppercase text-neutral-500">
          Luxury · Modern · Minimal
        </p>

        <h1
          className="text-7xl font-light leading-none tracking-[8px] text-black sm:text-8xl sm:tracking-[12px] md:text-[120px] md:tracking-[20px]"
          style={{
            fontFamily: "Cormorant Garamond",
          }}
        >
          TIZA
        </h1>

        <h2 className="mt-6 text-2xl font-light sm:text-3xl md:text-4xl">
          But Mama I'm in Love with a Criminal...
        </h2>

        <div className="mt-4 flex flex-col items-center">
          <h3 className="mt-6 text-2xl font-light sm:text-3xl md:text-4xl">
            Write your own.
          </h3>

          <div className="mt-8 h-px w-20 bg-neutral-300 md:w-28" />
        </div>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="mt-14 rounded-full bg-black px-10 py-3 text-sm text-white transition-colors duration-300 hover:bg-neutral-800 md:px-12 md:py-4 md:text-base"
        >
          Discover Collection
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.4, 1, 0.4],
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-400"
      >
        <div className="flex flex-col items-center">
          <div className="mb-3 h-10 w-px bg-neutral-300" />
          <span className="text-lg">↓</span>
        </div>
      </motion.div>
    </section>
  );
}