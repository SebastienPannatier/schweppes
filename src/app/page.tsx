import Image from "next/image";
import { Hero } from "@/app/components/Hero";
import { Product } from "@/app/components/Product";
import "@/app/styles/global.css";

export default function Home() {
  return (
    <>
      <Hero />
      <Product />
    </>
  );
}
