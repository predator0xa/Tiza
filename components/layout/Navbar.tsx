"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

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
        <div className="mx-auto mt-3 flex h-[58px] max-w-7xl items-center justify-between rounded-full border border-[#D8B56A]/60 bg-[#081A35]/92 px-4 shadow-[0_16px_45px_rgba(0,0,0,.32)] backdrop-blur-xl sm:mt-4 sm:px-6 md:mt-6 md:h-16 md:px-8">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
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
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D8B56A]/40 text-[#E6C57A] transition-all duration-300 hover:border-[#E6C57A] hover:bg-[#D8B56A]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6C57A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#081A35] lg:hidden"
                aria-label="Open navigation menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <Menu size={20} />
              </button>
            </motion.div>

            {/* Logo */}
            <Link
              href="/"
              aria-label="Go to homepage"
              className="transition-all duration-300 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6C57A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#081A35]"
            >
              <Image
                src="/images/logo-wordmark.png"
                alt="TIZA"
                width={120}
                height={38}
                className="h-auto w-[78px] min-[360px]:w-[92px] md:w-[126px]"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-12 text-sm font-medium tracking-[0.12em] uppercase lg:flex"
          >
            {[
              { href: "/shop", label: "Shop", delay: 0.05 },
              { href: "/collections", label: "Collections", delay: 0.1 },
              { href: "/wholesale", label: "Wholesale", delay: 0.15 },
              { href: "/about", label: "About", delay: 0.2 },
              { href: "/contact", label: "Contact", delay: 0.25 },
            ].map((item) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: item.delay, duration: 0.4 }}
              >
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`transition-all duration-300 ${isActive(item.href)
                    ? "text-[#E6C57A] drop-shadow-[0_0_8px_rgba(230,197,122,.25)]"
                    : "text-white/90 hover:text-[#E6C57A]"
                    }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-2 min-[360px]:gap-3 md:gap-5">

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
                aria-label="Open search"
                aria-haspopup="dialog"
                aria-expanded={searchOpen}
                onClick={() => setSearchOpen(true)}
                className="text-white/90 transition-all duration-300 hover:text-[#E6C57A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6C57A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#081A35]"
              >
                <Search size={20} />
              </button>
            </motion.div>

            {/* Wishlist */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.35 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="hidden min-[390px]:block"
            >
              <Link
                href="/wishlist"
                aria-label={`Wishlist (${wishlist.length} items)`}
                className="relative text-white/90 transition-all duration-300 hover:text-[#E6C57A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6C57A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#081A35]"
              >
                <Heart size={20} />

                {wishlist.length > 0 && (
                  <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#E6C57A] text-[10px] font-semibold text-[#081A35]">
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
              className="text-white"
            >
              <CartBadge />
            </motion.div>

            {/* Authentication */}
            {isSignedIn ? (
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.35 }}
              >
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox:
                        "h-9 w-9 border-2 border-[#D8B56A] shadow-md",
                    },
                  }}
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.35 }}
              >
                {/* Desktop */}
                <div className="hidden items-center gap-3 md:flex">
                  <SignInButton mode="modal">
                    <button className="rounded-full border border-[#D8B56A]/60 px-5 py-2 text-sm text-[#E6C57A] transition-all duration-300 hover:border-[#E6C57A] hover:bg-[#D8B56A]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6C57A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#081A35]">
                      Sign In
                    </button>
                  </SignInButton>

                  <SignUpButton mode="modal">
                    <button className="rounded-full bg-[#E6C57A] px-5 py-2 text-sm font-medium text-[#081A35] transition-all duration-300 hover:bg-[#F2D18A] hover:shadow-[0_0_18px_rgba(230,197,122,.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6C57A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#081A35]">
                      Sign Up
                    </button>
                  </SignUpButton>
                </div>

                {/* Mobile */}
                <div className="md:hidden">
                  <SignInButton mode="modal">
                    <button
                      aria-label="Sign in"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D8B56A]/60 text-[#E6C57A] transition-all duration-300 hover:bg-[#D8B56A]/10 hover:border-[#E6C57A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6C57A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#081A35]"
                    >
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
        onOpenSearch={() => setSearchOpen(true)}
      />
    </>
  );
}
