"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#081A35] px-5 pt-24 pb-16 text-white sm:pt-28 md:pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(216,181,106,.2),transparent_28%),linear-gradient(135deg,#081A35_0%,#06142b_52%,#0c254b_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(transparent,rgba(0,0,0,.2))]" />
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }} className="relative z-10 max-w-4xl text-center">
        <p className="text-[10px] font-semibold tracking-[0.28em] text-[#E6C57A] uppercase sm:text-[11px]">TIZA / Spring Summer 2026</p>
        <h1 className="mt-5 font-serif text-7xl font-light leading-none tracking-[.2em] text-white sm:text-8xl md:text-[120px]">TIZA</h1>
        <h2 className="mx-auto mt-8 max-w-xl font-serif text-3xl font-light leading-tight text-white/95 sm:text-4xl md:text-5xl">Don't just fit into the story.<span className="mt-2 block text-[#E6C57A]">Write your own.</span></h2>
        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-white/60">Essential silhouettes, considered materials, and a modern point of view.</p>
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} className="mt-10 inline-block">
          <Link href="/collections" className="inline-flex min-h-12 items-center rounded-full bg-[#E6C57A] px-7 text-xs font-semibold tracking-[.16em] text-[#081A35] uppercase shadow-[0_12px_35px_rgba(0,0,0,.2)] transition hover:bg-white">Discover the collection</Link>
        </motion.div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0.45, 1, 0.45], y: [0, 7, 0] }} transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#E6C57A]/70"><div className="flex flex-col items-center"><div className="mb-3 h-10 w-px bg-[#D8B56A]/50" /><span className="text-[10px] tracking-[.2em] uppercase">Scroll</span></div></motion.div>
    </section>
  );
}
