// import Footer from "@/components/landing/Footer";
// import Footer from "@/components/Footer/Footer";
import Footer2 from "@/components/Footer/Footer2";
import Hero from "@/components/Home/Hero";
import Section1 from "@/components/Home/Section1";
import Section2 from "@/components/Home/Section2";
import Section3 from "@/components/Home/Section3";
import Section4 from "@/components/Home/Section4";
import Section5 from "@/components/Home/Section5";
import Navbar from "@/components/Navbar/Navbar";
// import Hero from "@/components/landing/Hero";
// import Section1 from "@/components/landing/Section1";
// import Section2 from "@/components/landing/Section2";
import Image from "next/image";


export default function Home() {
  return (
    <main className="">
      {/* <Hero />
      <Section1 />
      <Section2 /> */}
      <Navbar />
      <Hero />
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Footer2 />
    </main>
  );
}
