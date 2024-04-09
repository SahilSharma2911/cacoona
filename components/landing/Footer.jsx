import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col text-[#898989] justify-center items-center bg-[#1C1C1C] py-[2.5rem]">
        <Image src="/Images/logo.png" alt="#" width={130} height={90} />
        <p className="max-w-[35rem] text-center leading-[33px] mt-[1.8rem]">
          Unleash Your Creativity and Rediscover Yourself with Our Thoughtfully
          Crafted Journals
        </p>
      </div>
      <div className="bg-black flex justify-center items-center text-[#CBCBCB] py-[1rem]">@Copyright 2024 all rights reserved by Cacoona</div>
    </>
  );
};

export default Footer;
