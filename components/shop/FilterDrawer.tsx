"use client";

import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  open: boolean;
  onClose: () => void;

  category: string;
  setCategory: (value: string) => void;

  collection: string;
  setCollection: (value: string) => void;
};

export default function FilterDrawer({
  open,
  onClose,
  category,
  setCategory,
  collection,
  setCollection,
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
          />

          <motion.aside
            initial={{ x: -420 }}
            animate={{ x: 0 }}
            exit={{ x: -420 }}
            transition={{ duration: 0.3 }}
            className="fixed left-0 top-0 z-[60] h-screen w-[360px] bg-white p-8 shadow-2xl"
          >
            <div className="mb-10 flex items-center justify-between">
              <h2 className="text-2xl font-light">
                Filters
              </h2>

              <button onClick={onClose}>
                <X size={24} />
              </button>
            </div>

            <div className="space-y-10">
              <div>
                <h3 className="mb-4 font-medium uppercase tracking-wider">
                  Category
                </h3>

                <div className="space-y-3">
                  {["all", "men", "women"].map((item) => (
                    <button
                      key={item}
                      onClick={() => setCategory(item)}
                      className={`block text-left transition ${
                        category === item
                          ? "font-semibold"
                          : "text-neutral-500 hover:text-black"
                      }`}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-4 font-medium uppercase tracking-wider">
                  Collection
                </h3>

                <div className="space-y-3">
                  {[
                    "all",
                    "new",
                    "essentials",
                    "summer",
                    "winter",
                  ].map((item) => (
                    <button
                      key={item}
                      onClick={() => setCollection(item)}
                      className={`block text-left transition ${
                        collection === item
                          ? "font-semibold"
                          : "text-neutral-500 hover:text-black"
                      }`}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setCategory("all");
                  setCollection("all");
                }}
                className="mt-8 rounded-full border px-6 py-3 transition hover:bg-black hover:text-white"
              >
                Clear Filters
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}