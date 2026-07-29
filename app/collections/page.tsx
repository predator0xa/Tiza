import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

const collections = [
  {
    title: "Men",
    slug: "men",
    image: "/images/products/hoodie.jpg",
  },
  {
    title: "Women",
    slug: "women",
    image: "/images/products/jacket.jpg",
  },
  {
    title: "Accessories",
    slug: "accessories",
    image: "/images/products/cargo.jpg",
  },
  {
    title: "New Arrivals",
    slug: "new",
    image: "/images/products/tshirt.jpg",
  },
];

export default function CollectionsPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-5 pt-24 pb-20 sm:px-6 sm:pt-28 sm:pb-28"><p className="text-[10px] font-semibold tracking-[.25em] text-[#D8B56A] uppercase">TIZA editions</p>
        <h1 className="mb-10 mt-3 font-serif text-4xl font-light sm:mb-12 sm:text-5xl">Collections</h1>

        <div className="grid gap-8 md:grid-cols-2">
          {collections.map((collection) => (
            <Link
              key={collection.slug}
              href={`/collections/${collection.slug}`}
              className="group relative overflow-hidden rounded-[2rem]"
            >
              <img
                src={collection.image}
                alt={collection.title}
                className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#081A35]/85 via-[#081A35]/15 to-transparent transition group-hover:from-[#081A35]/95" />

              <div className="absolute bottom-8 left-8 text-white">
                <h2 className="font-serif text-4xl font-light">
                  {collection.title}
                </h2>

                <p className="mt-2">
                  Explore →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
