import { Hero } from "@/app/components/Hero";
import { Product } from "@/app/components/Product";
import { ProductSelection } from "@/app/components/ProductSelection";
import { VideoPub } from "@/app/components/VideoPub";
import { OtherSelections } from "@/app/components/OtherSelections";
import { Footer } from "@/app/components/Footer";
import "@/app/styles/global.css";

export default function Home() {
  return (
    <>
      <Hero />
      <Product />
      <ProductSelection />
      <VideoPub />
      <OtherSelections />
      <Footer />
    </>
  );
}
