import Navbar from "@/components/layout/Navbar";
import Hero from "@/sections/home/Hero";
import EditorialGrid from "@/sections/home/EditorialGrid";
import FeaturedProducts from "@/sections/home/FeaturedProducts";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <EditorialGrid />
      <FeaturedProducts />
    </>
  );
}