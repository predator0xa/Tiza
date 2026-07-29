import Image from "next/image";
import { Truck, ShieldCheck, RotateCcw } from "lucide-react";
import { products } from "@/lib/products";
import ProductActions from "@/components/product/ProductActions";
import WishlistButton from "@/components/common/WishlistButton";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-4xl font-light">Product Not Found</h1>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-5 pt-24 pb-16 sm:px-6 sm:pt-28 sm:pb-24">
      <div className="grid gap-10 sm:gap-14 lg:grid-cols-2 lg:gap-16">

        {/* Product Image */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-neutral-100 sm:aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Product Info */}
        <div>
          <p className="text-[10px] tracking-[.28em] text-[#D8B56A] uppercase">
            TIZA
          </p>

          <h1 className="mt-4 font-serif text-4xl font-light sm:text-5xl">
            {product.name}
          </h1>

          <p className="mt-5 text-2xl font-medium sm:text-3xl">
            ₹{product.price.toLocaleString("en-IN")}
          </p>

          <p className="mt-6 leading-7 text-neutral-600 sm:leading-8">
            {product.description}
          </p>

          <WishlistButton
            id={product.id}
            name={product.name}
            image={product.image}
            hoverImage={product.hoverImage}
            badge={product.badge}
            price={product.price}
          />

          <div className="mt-6">
            <ProductActions
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
            />
          </div>

          {/* Features */}
          <div className="mt-14 space-y-6 text-neutral-700">
            <div className="flex items-center gap-3">
              <Truck size={20} />
              Free Shipping
            </div>

            <div className="flex items-center gap-3">
              <RotateCcw size={20} />
              Easy Returns
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck size={20} />
              Premium Quality
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
