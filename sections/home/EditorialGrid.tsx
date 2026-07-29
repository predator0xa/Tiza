"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function Card({
  title,
  subtitle,
  image,
  href,
  height = "h-[420px]",
  priority = false,
  delay = 0,
}: {
  title: string;
  subtitle: string;
  image: string;
  href: string;
  height?: string;
  priority?: boolean;
  delay?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.65,
        delay,
        ease: "easeOut",
      }}
      className={`group relative cursor-pointer overflow-hidden rounded-[36px] bg-[#081A35] shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#081A35]/20 ${height}`}
    >

      <Link
        href={href}
        className="absolute inset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B56A] focus-visible:ring-offset-4"
      >
        <Image
          src={image}
          alt={title}
          fill
          priority={priority}
          quality={95}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="rounded-[36px] object-cover brightness-95 contrast-105 transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#081A35]/85 via-[#081A35]/20 to-transparent" />

        <div className="absolute inset-x-8 bottom-8 flex items-end justify-between">
          <div className="max-w-[75%]">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#D8B56A]">
                {subtitle}
              </p>

              <div className="mt-3 h-px w-0 bg-[#D8B56A] transition-all duration-500 group-hover:w-14" />
            </div>

            <h3 className="mt-5 font-serif text-4xl font-light tracking-[0.08em] text-white md:text-5xl">
              {title}
            </h3>
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-xl text-white backdrop-blur-sm transition-all duration-500 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:scale-105 group-hover:bg-white group-hover:text-[#081A35]">
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                d="M7 17L17 7M17 7H9M17 7V15"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default function EditorialGrid() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20 max-w-3xl"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#D8B56A]">
          The House of TIZA
        </p>

        <h2 className="mt-4 font-serif text-4xl font-light leading-[1.08] text-[#081A35] sm:text-6xl">
          Collections that define modern luxury.
        </h2>

        <p className="mt-5 text-base leading-7 text-slate-600">
          Discover timeless collections designed with refined craftsmanship,
          understated elegance, and modern luxury.
        </p>
      </motion.div>

      <div className="space-y-6">

        {/* MEN HERO */}

        <Card
          title="MEN"
          subtitle="Modern Tailoring"
          image="/images/collections/men.jpg"
          href="/collections/men"
          height="h-[360px] md:h-[420px] lg:h-[500px]"
          priority
          delay={0}
        />

        {/* SECOND ROW */}

        <div className="grid gap-6 lg:grid-cols-2">
          <Card
            title="KIDS"
            subtitle="Quiet Luxury"
            image="/images/collections/kids.jpg"
            href="/collections/kids"
            height="h-[280px] md:h-[330px] lg:h-[390px]"
            delay={0.1}
          />

          <Card
            title="WOMEN"
            subtitle="Refined Elegance"
            image="/images/collections/women.jpg"
            href="/collections/women"
            height="h-[280px] md:h-[330px] lg:h-[390px]"
            delay={0.2}
          />
        </div>

        {/* LIFESTYLE HERO */}

        <Card
          title="LIFESTYLE"
          subtitle="Beyond Fashion"
          image="/images/collections/lifestyle.jpg"
          href="/collections/lifestyle"
          height="h-[320px] md:h-[380px] lg:h-[440px]"
          delay={0.3}
        />
      </div>

      {/* Editorial Divider */}

      <div className="mx-auto my-20 h-px w-24 rounded-full bg-[#D8B56A]/40" />

      {/* Bottom CTA */}

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="flex flex-col items-center text-center"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#D8B56A]">
          THE HOUSE OF TIZA
        </p>

        <h3 className="mt-5 max-w-3xl font-serif text-3xl font-light leading-[1.08] text-[#081A35] md:text-5xl">
          Luxury isn't seasonal.
          <br />
          It's timeless.
        </h3>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
          Designed with uncompromising craftsmanship, premium materials,
          and a timeless design philosophy that endures beyond trends.
        </p>

        <Link
          href="/collections"
          aria-label="Explore all TIZA collections"
          className="group mt-10 inline-flex items-center gap-3 rounded-full border border-[#081A35] px-10 py-4 text-sm font-medium uppercase tracking-[0.18em] text-[#081A35] transition-all duration-500 ease-out hover:bg-[#081A35] hover:text-white hover:shadow-xl hover:shadow-[#081A35]/20"
        >
          Explore All Collections

          <span className="transition-transform duration-500 ease-out group-hover:translate-x-1">
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                d="M7 17L17 7M17 7H9M17 7V15"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>
      </motion.div>
    </section>
  );
}