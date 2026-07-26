"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function OrderSuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-50 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg rounded-3xl bg-white p-10 text-center shadow-xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 200,
          }}
          className="mb-6 flex justify-center"
        >
          <CheckCircle2
            size={90}
            className="text-green-500"
          />
        </motion.div>

        <h1 className="mb-4 text-4xl font-light">
          Order Confirmed
        </h1>

        <p className="mb-8 text-neutral-600">
          Thank you for shopping with <strong>TIZA</strong>.
          <br />
          Your order has been placed successfully.
        </p>

        <div className="space-y-4">
          <Link
            href="/shop"
            className="block rounded-full bg-black px-8 py-4 text-white transition hover:opacity-90"
          >
            Continue Shopping
          </Link>

          <Link
            href="/"
            className="block rounded-full border border-black px-8 py-4 transition hover:bg-black hover:text-white"
          >
            Back to Home
          </Link>
        </div>
      </motion.div>
    </main>
  );
}