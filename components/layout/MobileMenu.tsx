"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed right-0 top-0 z-50 h-full w-80 bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b p-6">
              <h2 className="text-xl font-semibold">Menu</h2>

              <button onClick={onClose}>
                <X />
              </button>
            </div>

            <nav className="flex flex-col p-6 text-lg">
              <Link href="/shop" onClick={onClose} className="py-4">
                Shop
              </Link>

              <Link href="/collections" onClick={onClose} className="py-4">
                Collections
              </Link>

              <Link href="/wholesale" onClick={onClose} className="py-4">
                Wholesale
              </Link>

              <Link href="/about" onClick={onClose} className="py-4">
                About
              </Link>

              <Link href="/contact" onClick={onClose} className="py-4">
                Contact
              </Link>

              <hr className="my-4" />

              <Link href="/wishlist" onClick={onClose} className="py-4">
                Wishlist
              </Link>

              <Link href="/cart" onClick={onClose} className="py-4">
                Cart
              </Link>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}