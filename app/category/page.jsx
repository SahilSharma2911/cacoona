"use client";
import Footer2 from "@/components/Footer/Footer2";
import Product from "@/components/Home/Product";
import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";
import React from "react";

const productList = [
  {
    id: 1,
    imageSrc: "/Images/p1.png",
    productName: "Starry Night Keychain",
    currentPrice: "$12.99",
    originalPrice: "$19.49",
    discount: "-40%",
    rating: 4.5,
    totalRatings: 88,
  },
  {
    id: 1,
    imageSrc: "/Images/p1.png",
    productName: "Starry Night Keychain",
    currentPrice: "$12.99",
    originalPrice: "$19.49",
    discount: "-40%",
    rating: 4.5,
    totalRatings: 88,
  },
  {
    id: 1,
    imageSrc: "/Images/p1.png",
    productName: "Starry Night Keychain",
    currentPrice: "$12.99",
    originalPrice: "$19.49",
    discount: "-40%",
    rating: 4.5,
    totalRatings: 88,
  },
  {
    id: 1,
    imageSrc: "/Images/p1.png",
    productName: "Starry Night Keychain",
    currentPrice: "$12.99",
    originalPrice: "$19.49",
    discount: "-40%",
    rating: 4.5,
    totalRatings: 88,
  },
  {
    id: 1,
    imageSrc: "/Images/p1.png",
    productName: "Starry Night Keychain",
    currentPrice: "$12.99",
    originalPrice: "$19.49",
    discount: "-40%",
    rating: 4.5,
    totalRatings: 88,
  },
  {
    id: 1,
    imageSrc: "/Images/p1.png",
    productName: "Starry Night Keychain",
    currentPrice: "$12.99",
    originalPrice: "$19.49",
    discount: "-40%",
    rating: 4.5,
    totalRatings: 88,
  },
  {
    id: 1,
    imageSrc: "/Images/p1.png",
    productName: "Starry Night Keychain",
    currentPrice: "$12.99",
    originalPrice: "$19.49",
    discount: "-40%",
    rating: 4.5,
    totalRatings: 88,
  },
];

const page = () => {
  return (
    <main>
      <Navbar />
      <div className="bg-[#30304C] py-6 md:py-12 px-[1.2rem] md:px-[2.5rem] xl:px-[8rem]">
        <div className="flex gap-2 text-[15px] md:text-[16px]">
          <Link href="/" className="text-gray-400">
            Home
          </Link>
          <span>/</span>
          <Link href="/category" className="text-white">
            Category
          </Link>
        </div>
        <div className="">
          <div
            className="mt-8 md:mt-10 flex flex-wrap justify-center md:justify-start gap-6 md:gap-10"
            style={{ scrollbarWidth: "none" }}
          >
            {productList.map((product) => (
              <Product
                key={product.id}
                imageSrc={product.imageSrc}
                productName={product.productName}
                currentPrice={product.currentPrice}
                originalPrice={product.originalPrice}
                discount={product.discount}
                rating={product.rating}
                totalRatings={product.totalRatings}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer2 />
    </main>
  );
};

export default page;
