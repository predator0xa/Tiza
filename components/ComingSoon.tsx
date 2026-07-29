"use client";

import { motion } from "framer-motion";

export default function ComingSoon() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#081A35] px-6">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D8B56A]/5 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#D8B56A]">
          THE HOUSE OF TIZA
        </p>

        <h1 className="mt-6 font-serif text-6xl font-light tracking-[0.12em] text-white md:text-8xl">
          TIZA
        </h1>

        <div className="mx-auto mt-8 h-px w-24 bg-[#D8B56A]/40" />

        <h2 className="mt-10 font-serif text-3xl font-light text-white md:text-5xl">
          Launching Soon
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/70">
          A new expression of modern luxury is arriving.
          Crafted with precision, designed for timeless elegance.
        </p>

        <p className="mt-12 text-xs uppercase tracking-[0.4em] text-[#D8B56A]/80">
          COMING SOON
        </p>
      </motion.div>
    </main>
  );
}