import ComingSoon from "@/components/ComingSoon";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/sections/home/Hero";
import EditorialGrid from "@/sections/home/EditorialGrid";
import FeaturedProducts from "@/sections/home/FeaturedProducts";
import EditorialJournal from "@/sections/home/EditorialJournal";
import FeaturedOutfits from "@/sections/home/FeaturedOutfits";

const LAUNCH = true;

export default function Home() {
  if (!LAUNCH) {
    return <ComingSoon />;
  }

  return (
    <>
      <Navbar />
      <Hero />
      <EditorialGrid />
      <EditorialJournal />
      <FeaturedOutfits />
      <FeaturedProducts />
    </>
  );
}
