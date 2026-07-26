"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const router = useRouter();

  const { cart, subtotal, clearCart } = useCart();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");

  const placeOrder = () => {
    if (
      !fullName ||
      !email ||
      !phone ||
      !address ||
      !city ||
      !zip
    ) {
      alert("Please fill in all shipping information.");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    clearCart();
    router.push("/order-success");
  };

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-28">
        <h1 className="mb-10 text-5xl font-light">
          Checkout
        </h1>

        <div className="grid gap-12 lg:grid-cols-2">
          <section className="space-y-5">
            <h2 className="text-xl font-medium">
              Shipping Information
            </h2>

            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
              className="w-full rounded-xl border p-4 outline-none focus:ring-2 focus:ring-black"
            />

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full rounded-xl border p-4 outline-none focus:ring-2 focus:ring-black"
            />

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
              className="w-full rounded-xl border p-4 outline-none focus:ring-2 focus:ring-black"
            />

            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Street Address"
              className="w-full rounded-xl border p-4 outline-none focus:ring-2 focus:ring-black"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="City"
                className="rounded-xl border p-4 outline-none focus:ring-2 focus:ring-black"
              />

              <input
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                placeholder="ZIP Code"
                className="rounded-xl border p-4 outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </section>

          <section className="rounded-3xl border p-8 shadow-sm">
            <h2 className="mb-6 text-xl font-medium">
              Order Summary
            </h2>

            {cart.length === 0 ? (
              <>
                <p className="text-neutral-500">
                  Your cart is empty.
                </p>

                <Link
                  href="/shop"
                  className="mt-6 inline-block rounded-full bg-black px-8 py-3 text-white"
                >
                  Continue Shopping
                </Link>
              </>
            ) : (
              <>
                <div className="space-y-5">
                  {cart.map((item) => (
                    <div
                      key={`${item.id}-${item.size}`}
                      className="flex items-center gap-4"
                    >
                      <div className="relative h-20 w-20 overflow-hidden rounded-xl bg-neutral-100">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1">
                        <h3 className="font-medium">
                          {item.name}
                        </h3>

                        <p className="text-sm text-neutral-500">
                          Size: {item.size}
                        </p>

                        <p className="text-sm text-neutral-500">
                          Qty: {item.quantity}
                        </p>
                      </div>

                      <span className="font-medium">
                        ₹
                        {(item.price * item.quantity).toLocaleString(
                          "en-IN"
                        )}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 border-t pt-6">
                  <div className="mb-2 flex justify-between">
                    <span>Subtotal</span>
                    <span>
                      ₹{subtotal.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <div className="mb-2 flex justify-between">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>

                  <div className="mt-4 flex justify-between border-t pt-4 text-xl font-semibold">
                    <span>Total</span>
                    <span>
                      ₹{subtotal.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <button
                    onClick={placeOrder}
                    className="mt-8 w-full rounded-full bg-black py-4 text-white transition hover:opacity-90"
                  >
                    Place Order
                  </button>
                </div>
              </>
            )}
          </section>
        </div>
      </main>
    </>
  );
}