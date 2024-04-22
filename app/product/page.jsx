import Footer2 from "@/components/Footer/Footer2";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Hero from "./Hero";
import Description from "./Description";
import Review from "./Review";
import AllProduct from "./AllProduct";

const page = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Description/>
      <Review/>
      <AllProduct/>
      <Footer2 />
    </main>
  );
};

export default page;
