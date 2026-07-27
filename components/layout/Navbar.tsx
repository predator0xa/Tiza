"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Search } from "lucide-react";

import {
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";

import { useWishlist } from "@/context/WishlistContext";
import CartBadge from "@/components/common/CartBadge";
import SearchOverlay from "@/components/search/SearchOverlay";

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const { wishlist } = useWishlist();
  const { isSignedIn } = useUser();

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full px-4 md:px-8">
        <div className="mx-auto mt-6 flex h-14 max-w-7xl items-center justify-between rounded-full border border-neutral-200 bg-white/80 px-6 shadow-lg backdrop-blur-xl md:px-8">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/logo-wordmark.png"
              alt="TIZA"
              width={115}
              height={35}
              className="h-auto w-[115px]"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-10 text-sm lg:flex">
            <Link href="/shop" className="transition hover:text-neutral-500">
              Shop
            </Link>

            <Link
              href="/collections"
              className="transition hover:text-neutral-500"
            >
              Collections
            </Link>

            <Link
              href="/wholesale"
              className="transition hover:text-neutral-500"
            >
              Wholesale
            </Link>

            <Link href="/about" className="transition hover:text-neutral-500">
              About
            </Link>

            <Link
              href="/contact"
              className="transition hover:text-neutral-500"
            >
              Contact
            </Link>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="transition hover:text-neutral-500"
            >
              <Search size={19} />
            </button>

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="relative transition hover:text-neutral-500"
            >
              <Heart size={19} />

              {wishlist.length > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-medium text-white">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Cart */}
            <CartBadge />

            {/* Authentication */}
            {isSignedIn ? (
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "h-9 w-9",
                  },
                }}
              />
            ) : (
              <div className="flex items-center gap-2">
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
            )}
          </div>
        </div>
      </header>

      <SearchOverlay
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </>
  );
}