import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import Section1 from "@/components/landing/Section1";
import Section2 from "@/components/landing/Section2";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Section1/>
      <Section2/>
      <Footer/>
    </main>
  );
}
