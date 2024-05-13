"use client";

import React, { useState } from "react";
import Footer2 from "@/components/Footer/Footer2";
import Preview from "./Preview";
import { GoDotFill } from "react-icons/go";
import html2pdf from "html2pdf.js";


const data = {
  name: "John Deo",
  dateOfBirth: "January 10, 1990",
  timeOfBirth: "10:00 AM",
  interests: ["Love", "Career"],
  gender: "Male",
  placeOfBirth: "New York City, US",
  zodiacSign: "Capricorn",
};

const Page = () => {
  const [backgroundImageUrl, setBackgroundImageUrl] =
    useState("/Images/pdf1.png");
  const [selectedImage, setSelectedImage] = useState("/Images/pdf1.png");

  const handleImageClick = (imageUrl) => {
    setBackgroundImageUrl(imageUrl);
    setSelectedImage(imageUrl);
  };

  const handlePrint = () => {
    const element = document.getElementById("pdf-content");
    const opt = {
      margin:       0,
      filename:     'myfile.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 1 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'landscape' }
    };

    html2pdf().from(element).set(opt).save();
  };


  return (
    <main>
      <section className="px-[1.2rem] md:px-[4rem] py-16 items-center bg-[#30304C] text-white flex justify-center relative">
        <div className="w-full flex justify-center flex-col items-center relative">
          <h1 className="text-[26px] md:text-[32px] font-medium mb-8 md:mb-[2.5rem] text-center leading-[120%] md:leading-0">
            Preview
          </h1>
          <div id="pdf-content">

          <Preview backgroundImage={backgroundImageUrl} data={data} />
          </div>
          <div   className="mt-10 md:mt-12 flex flex-row gap-4 md:gap-10">
            <div className="flex items-center flex-col">
              <img
                src="/Images/pdf1.png"
                alt="#"
                className="w-14 md:w-20 md:h-16 rounded-md  cursor-pointer"
                onClick={() => handleImageClick("/Images/pdf1.png")}
              />
              <div className="mt-1.5">
                <div className="bg-[#4FA2AE] h-4 w-4 rounded-full relative"></div>
                {selectedImage === "/Images/pdf1.png" && (
                  <GoDotFill className="absolute text-black -mt-4" />
                )}
              </div>
            </div>
            <div className="flex items-center flex-col">
              <img
                src="/Images/pdf2.png"
                alt="#"
                className="w-14 md:w-20 md:h-16 rounded-md  cursor-pointer"
                onClick={() => handleImageClick("/Images/pdf2.png")}
              />
              <div className="mt-1.5">
                <div className="bg-[#4FA2AE] h-4 w-4 rounded-full relative"></div>
                {selectedImage === "/Images/pdf2.png" && (
                  <GoDotFill className="absolute text-black -mt-4" />
                )}
              </div>
            </div>

            <div className="flex items-center flex-col">
              <img
                src="/Images/pdf3.png"
                alt="#"
                className="w-14 md:w-20 md:h-16 rounded-md  cursor-pointer"
                onClick={() => handleImageClick("/Images/pdf3.png")}
              />
              <div className="mt-1.5">
                <div className="bg-[#4FA2AE] h-4 w-4 rounded-full relative"></div>
                {selectedImage === "/Images/pdf3.png" && (
                  <GoDotFill className="absolute text-black -mt-4" />
                )}
              </div>
            </div>
            <div className="flex items-center flex-col">
              <img
                src="/Images/pdf4.png"
                alt="#"
                className="w-14 md:w-20 md:h-16 rounded-md  cursor-pointer"
                onClick={() => handleImageClick("/Images/pdf4.png")}
              />
              <div className="mt-1.5">
                <div className="bg-[#4FA2AE] h-4 w-4 rounded-full relative"></div>
                {selectedImage === "/Images/pdf4.png" && (
                  <GoDotFill className="absolute text-black -mt-4" />
                )}
              </div>
            </div>
          </div>
          <button onClick={handlePrint} className="bg-[#4FA2AE] text-[14px] md:text-[16px] w-[10rem] p-2 md:p-3 rounded-xl mt-10 md:mt-12">
            Pay Now
          </button>
        </div>
      </section>
      <Footer2 />
    </main>
  );
};

export default Page;
