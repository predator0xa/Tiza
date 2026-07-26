import Navbar from "@/components/layout/Navbar";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/lib/products";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export default async function CollectionPage({ params }: Props) {
  const { category } = await params;

  const filtered =
    category === "new"
      ? products.filter((p) => p.collection === "new")
      : products.filter((p) => p.category === category);

  // ...
}