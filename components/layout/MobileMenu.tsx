"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  User,
  Heart,
  ShoppingBag,
} from "lucide-react";
import { usePathname } from "next/navigation";
import {
  useUser,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  const pathname = usePathname();
  const { isSignedIn } = useUser();
  const menuItems = [
    { href: "/shop", label: "Shop" },
    { href: "/collections", label: "Collections" },
    { href: "/wholesale", label: "Wholesale" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/wishlist", label: "Wishlist", icon: Heart },
    { href: "/cart", label: "Cart", icon: ShoppingBag },
  ];
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
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 32,
            }} className="fixed right-0 top-0 z-50 h-full w-[85vw] max-w-[360px] border-l border-neutral-200 bg-white/95 shadow-[0_25px_80px_rgba(0,0,0,0.18)] backdrop-blur-2xl"          >
            <div className="flex items-center justify-between border-b p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-neutral-500">
                TIZA
              </h2>
              <button
                onClick={onClose}
                className="rounded-full p-2 transition hover:bg-neutral-100"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            <div className="px-8 pb-2 pt-6">
              {isSignedIn ? (
                <div className="flex items-center gap-4">
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: "h-11 w-11",
                      },
                    }}
                  />

                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                      Welcome
                    </p>

                    <p className="text-sm font-semibold">
                      My Account
                    </p>
                  </div>
                </div>
              ) : (
                <SignInButton mode="modal">
                  <button className="w-full rounded-full border border-neutral-300 py-3 text-sm font-medium transition hover:bg-neutral-100">
                    Sign In
                  </button>
                </SignInButton>
              )}
            </div>
            <nav className="flex h-[calc(100%-88px)] flex-col px-8 py-6">
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05, duration: 0.35 }}
              >
                <Link
                  href="/shop"
                  onClick={onClose}
                  className={`block border-b border-neutral-100 py-5 text-base font-medium tracking-wide transition duration-300 ${pathname === "/shop"
                      ? "text-black"
                      : "text-neutral-500 hover:translate-x-2 hover:text-black"
                    }`}
                >
                  Shop
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.10, duration: 0.35 }}
              >
                <Link
                  href="/collections"
                  onClick={onClose}
                  className={`block border-b border-neutral-100 py-5 text-base font-medium tracking-wide transition duration-300 ${pathname === "/collections"
                      ? "text-black"
                      : "text-neutral-500 hover:translate-x-2 hover:text-black"
                    }`}
                >
                  Collections
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.35 }}
              >
                <Link
                  href="/wholesale"
                  onClick={onClose}
                  className={`block border-b border-neutral-100 py-5 text-base font-medium tracking-wide transition duration-300 ${pathname === "/wholesale"
                      ? "text-black"
                      : "text-neutral-500 hover:translate-x-2 hover:text-black"
                    }`}
                >
                  Wholesale
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.20, duration: 0.35 }}
              >
                <Link
                  href="/about"
                  onClick={onClose}
                  className={`block border-b border-neutral-100 py-5 text-base font-medium tracking-wide transition duration-300 ${pathname === "/about"
                      ? "text-black"
                      : "text-neutral-500 hover:translate-x-2 hover:text-black"
                    }`}
                >
                  About
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, duration: 0.35 }}
              >
                <Link
                  href="/contact"
                  onClick={onClose}
                  className={`block border-b border-neutral-100 py-5 text-base font-medium tracking-wide transition duration-300 ${pathname === "/contact"
                      ? "text-black"
                      : "text-neutral-500 hover:translate-x-2 hover:text-black"
                    }`}
                >
                  Contact
                </Link>
              </motion.div>

              <motion.hr
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.28 }}
                className="my-4"
              />

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.30, duration: 0.35 }}
              >
                <Link
                  href="/wishlist"
                  onClick={onClose}
                  className={`flex items-center gap-3 border-b border-neutral-100 py-5 text-base font-medium tracking-wide transition duration-300 ${pathname === "/wishlist"
                      ? "text-black"
                      : "text-neutral-500 hover:translate-x-2 hover:text-black"
                    }`}
                >
                  <Heart size={18} />
                  Wishlist
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35, duration: 0.35 }}
              >
                <Link
                  href="/cart"
                  onClick={onClose}
                  className={`flex items-center gap-3 border-b border-neutral-100 py-5 text-base font-medium tracking-wide transition duration-300 ${pathname === "/cart"
                      ? "text-black"
                      : "text-neutral-500 hover:translate-x-2 hover:text-black"
                    }`}
                >
                  <ShoppingBag size={18} />
                  Cart
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="mt-auto px-8 pb-8 pt-12"
              >
                <div className="h-px bg-neutral-200" />

                <p className="mt-8 text-[11px] uppercase tracking-[0.35em] text-neutral-400">
                  Luxury Redefined
                </p>

                <p className="mt-2 text-xs text-neutral-500">
                  © 2026 TIZA
                </p>
              </motion.div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}