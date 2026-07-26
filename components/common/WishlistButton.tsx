"use client";

import { Heart } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";

type Props = {
  id: string;
  name: string;
  image: string;
  hoverImage: string;
  badge: string;
  price: number;
};

export default function WishlistButton({
  id,
  name,
  image,
  hoverImage,
  badge,
  price,
}: Props) {
  const { toggleWishlist, isWishlisted } = useWishlist();

  const active = isWishlisted(id);

  return (
    <button
      type="button"
      onClick={() => {
        toggleWishlist({
          id,
          name,
          image,
          hoverImage,
          badge,
          price,
        });
      }}
      className="rounded-full border p-2 transition hover:bg-neutral-100"
    >
      <Heart
        size={20}
        fill={active ? "currentColor" : "none"}
        className={active ? "text-red-500" : ""}
      />
    </button>
  );
}