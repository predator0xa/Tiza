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
    <main className="mx-auto max-w-7xl px-6 py-28">
      <div className="grid gap-16 lg:grid-cols-2">

        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden rounded-3xl bg-neutral-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Product Info */}
        <div>
          <p className="uppercase tracking-[6px] text-neutral-500">
            TIZA
          </p>

          <h1 className="mt-4 text-5xl font-light">
            {product.name}
          </h1>

          <p className="mt-6 text-3xl font-medium">
            ₹{product.price.toLocaleString("en-IN")}
          </p>

          <p className="mt-8 leading-8 text-neutral-600">
            {product.description}
          </p>

          <WishlistButton
            id={product.id}
            name={product.name}
            image={product.image}
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