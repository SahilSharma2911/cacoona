import React from "react";

const Section1 = () => {
  return (
    <section className="px-[4rem] py-[3.5rem] bg-gradient-to-t from-[#3FCEE3] via-[#F1D383] to-[#EC9C86] flex flex-col items-center justify-center ">
      <h2 className="font-semibold text-[64px] leading-[120.7%]">
        LAUNCHING SOON 
      </h2>
      <p className="mt-10 text-[22px] leading-[110%] text-center text-[#515151]">
        Stay tuned for the launch of our website. In the meantime, sign up to
        receive exclusive updates and special offers.
      </p>
      {/* timer */}
      <div className="flex text-[90px] leading-[110%] gap-16 mt-16">
        <div className="flex flex-col items-center">
          <span>02</span>
          <span className="text-[32px] font-normal mt-[-32px]">Days</span>
        </div>
        <span>:</span>
        <div className="flex flex-col items-center">
          <span>02</span>
          <span className="text-[32px] font-normal mt-[-32px]">Hours</span>
        </div>
        <span>:</span>
        <div className="flex flex-col items-center">
          <span>02</span>
          <span className="text-[32px] font-normal mt-[-32px]">Minutes</span>
        </div>
        <span>:</span>
        <div className="flex flex-col items-center">
          <span>02</span>
          <span className="text-[32px] font-normal mt-[-32px]">Seconds</span>
        </div>
      </div>
      <form action="">
        <input type="email" name="" id="" placeholder="Enter your email address" className="px-7 py-3 rounded-l-lg focus:outline-none text-[#7F7F7F] w-[20rem]"/>
        <button className="bg-[#4fa2ae] px-7 py-3 rounded-r-lg text-white mt-10">
          Get Notified
        </button>
      </form>
    </section>
  );
};

export default Section1;
