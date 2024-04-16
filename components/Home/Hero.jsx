"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          textAlign: "center",
          width: "100%"
        }}
      >
        <ul style={{ margin: "0" }}> {dots} </ul>
      </div>
    )
  };
  return (
    <div className="relative">
      <Slider {...settings}>
        <div className="bg-gray-300 h-[26rem]">
          <h3>1</h3>
        </div>
        <div className="bg-gray-300 h-[26rem]">
          <h3>2</h3>
        </div>
        <div className="bg-gray-300 h-[26rem]">
          <h3>3</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
