import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="px-[4rem] py-6 h-screen flex flex-col justify-between bg-[#30304C] text-white">
      <div className="flex justify-between items-center">
        <Image src="/Images/logo.png" alt="#" width={130} height={90} />
        <button className="bg-[#4fa2ae] px-7 py-2 rounded-3xl text-white">
          Get Notified
        </button>
      </div>
      <div className="flex items-center justify-between flex-1 gap-4 mt-3">
        <div className="">
          <h1 className="font-semibold text-[64px] leading-[120.7%]">
            Discover Your Inner Universe with <br />
            <b className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#b15a43] via-[#CDB575] to-[#4fa2ae]">
              Chesper
            </b>
          </h1>
          <p className="text-[1.75rem] leading-[45px] max-w-[38rem] mt-4">
            Unleash Your Creativity and Rediscover Yourself with Our
            Thoughtfully Crafted Journals
          </p>
          <button className="bg-[#4fa2ae] px-7 py-2 rounded-lg text-white mt-10">
          Get Notified
        </button>
        </div>
        <Image
          src="/Images/banner-landing.png"
          alt="#"
          width={550}
          height={500}
        />
      </div>
    </section>
  );
};

export default Hero;
