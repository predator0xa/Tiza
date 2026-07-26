"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, Plus, Minus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function CartDrawer({ open, onClose }: Props) {
  const [mounted, setMounted] = useState(false);

  const {
    cart,
    subtotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[9998] bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed inset-y-0 right-0 z-[9999] w-[420px] max-w-[90vw] bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b p-6">
            <h2 className="text-2xl font-light">Shopping Bag</h2>

            <button
              onClick={onClose}
              className="rounded-full p-2 hover:bg-neutral-100"
            >
              <X size={22} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto">
            {cart.length === 0 ? (
              <div className="flex h-full items-center justify-center text-neutral-500">
                Your bag is empty.
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="flex gap-4 border-b p-5"
                >
                  <div className="relative h-24 w-24 overflow-hidden rounded-xl bg-neutral-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col">
                    <h3 className="font-medium">{item.name}</h3>

                    <p className="text-sm text-neutral-500">
                      Size: {item.size}
                    </p>

                    <p className="mt-1 font-medium">
                      ₹{item.price.toLocaleString("en-IN")}
                    </p>

                    <div className="mt-4 flex items-center gap-3">
                      <button
                        onClick={() =>
                          decreaseQuantity(item.id, item.size)
                        }
                        className="rounded border p-1 hover:bg-neutral-100"
                      >
                        <Minus size={16} />
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() =>
                          increaseQuantity(item.id, item.size)
                        }
                        className="rounded border p-1 hover:bg-neutral-100"
                      >
                        <Plus size={16} />
                      </button>

                      <button
                        onClick={() =>
                          removeFromCart(item.id, item.size)
                        }
                        className="ml-auto text-sm text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="border-t p-6">
            <div className="mb-5 flex items-center justify-between text-lg">
              <span>Subtotal</span>

              <span className="font-medium">
                ₹{subtotal.toLocaleString("en-IN")}
              </span>
            </div>

            <Link
  href="/checkout"
  onClick={onClose}
  className="flex w-full items-center justify-center rounded-full bg-black py-4 text-white transition hover:opacity-90"
>
  Checkout
</Link>
          </div>
        </div>
      </aside>
    </>,
    document.body
  );
}