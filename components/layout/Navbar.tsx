"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Heart,
  Search,
  User,
  Menu,
} from "lucide-react";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { useWishlist } from "@/context/WishlistContext";
import CartBadge from "@/components/common/CartBadge";
import SearchOverlay from "@/components/search/SearchOverlay";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  const { wishlist } = useWishlist();
  const { isSignedIn } = useUser();
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full px-3 sm:px-4 md:px-8">
        <div className="mx-auto mt-4 flex h-12 max-w-7xl items-center justify-between rounded-full border border-neutral-200 bg-white/80 px-4 shadow-lg backdrop-blur-xl md:mt-6 md:h-14 md:px-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="flex items-center gap-3"
          >
            {/* Mobile Menu */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-neutral-100 lg:hidden"
                aria-label="Open menu"
              >
                <Menu size={20} />
              </button>
            </motion.div>

            {/* Logo */}
            <Link href="/">
              <Image
                src="/images/logo-wordmark.png"
                alt="TIZA"
                width={115}
                height={35}
                className="h-auto w-[92px] md:w-[115px]"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-10 text-sm lg:flex">
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.35 }}
            >
              <Link
                href="/shop"
                className="transition hover:text-neutral-500"
              >
                Shop
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.10, duration: 0.35 }}
            >
              <Link
                href="/collections"
                className="transition hover:text-neutral-500"
              >
                Collections
              </Link>            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.35 }}
            >
              <Link
                href="/wholesale"
                className="transition hover:text-neutral-500"
              >
                Wholesale
              </Link>            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.20, duration: 0.35 }}
            >
              <Link
                href="/about"
                className="transition hover:text-neutral-500"
              >
                About
              </Link>            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.35 }}
            >
              <Link
                href="/contact"
                className="transition hover:text-neutral-500"
              >
                Contact
              </Link>            </motion.div>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Search */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.35 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="transition hover:text-neutral-500"
              >
                <Search size={18} />
              </button>
            </motion.div>

            {/* Wishlist */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.40, duration: 0.35 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/wishlist"
                className="relative transition hover:text-neutral-500"
              >
                <Heart size={18} />

                {wishlist.length > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-medium text-white">
                    {wishlist.length}
                  </span>
                )}
              </Link>
            </motion.div>

            {/* Cart */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.35 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <CartBadge />
            </motion.div>

            {/* Authentication */}
            {isSignedIn ? (
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.50, duration: 0.35 }}
              >
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "h-9 w-9",
                    },
                  }}
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.50, duration: 0.35 }}
              >
                {/* Desktop */}
                <div className="hidden items-center gap-2 md:flex">
                  <SignInButton mode="modal">
                    <button className="rounded-full border border-neutral-300 px-4 py-2 text-sm transition hover:bg-neutral-100">
                      Sign In
                    </button>
                  </SignInButton>

                  <SignUpButton mode="modal">
                    <button className="rounded-full bg-black px-4 py-2 text-sm text-white transition hover:bg-neutral-800">
                      Sign Up
                    </button>
                  </SignUpButton>
                </div>

                {/* Mobile */}
                <div className="md:hidden">
                  <SignInButton mode="modal">
                    <button className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 transition hover:bg-neutral-100">
                      <User size={18} />
                    </button>
                  </SignInButton>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </header>

      <SearchOverlay
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
      />

      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}