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

      <main className="mx-auto max-w-7xl px-6 py-28">
        <h1 className="mb-12 text-5xl font-light">Collections</h1>

        <div className="grid gap-8 md:grid-cols-2">
          {collections.map((collection) => (
            <Link
              key={collection.slug}
              href={`/collections/${collection.slug}`}
              className="group relative overflow-hidden rounded-3xl"
            >
              <img
                src={collection.image}
                alt={collection.title}
                className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/35 transition group-hover:bg-black/45" />

              <div className="absolute bottom-8 left-8 text-white">
                <h2 className="text-4xl font-light">
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