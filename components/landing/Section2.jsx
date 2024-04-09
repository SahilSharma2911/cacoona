import React from "react";
import Image from "next/image";

const Section2 = () => {
  return (
    <section className="px-[4rem] py-[7rem] bg-[#30304C] text-white">
      <h2 className="text-[64px] leading-[110%] font-semibold">
        What we offer?
      </h2>
      <div className="flex gap-52 bg-gradient-to-r from-[#B15A43] to-[#30304C] p-10 mt-[3rem] rounded-tl-[5rem]">
        <Image src="/Images/lp1.png" alt="#" width={400} height={400} />
        <div className="flex flex-col items-start justify-center">
          <h3 className="font-semibold text-[32px]">Chesper by Cacoona</h3>
          <p className="text-[20px] leading-[160%] mt-2">
            A Chesper is your paper chest. It's where you can be free to imagine
            and record your story, outline your journey and display your inner
            youth. Only good things and positive thoughts go into your chesper
            about you. There's always room for growth within you but to do so
            you must relinquish your burdens, anger and fears and there are
            specific pages for those moments. Your Chesper is a safe for your
            secrets and deep reflections.
          </p>
        </div>
      </div>
      <div className="flex gap-52 bg-gradient-to-r from-[#30304C] to-[#CDB575] p-10 mt-[3rem] rounded-tr-[5rem]">
        <div className="flex flex-col items-start justify-center">
          <h3 className="font-semibold text-[32px]">Cacoona Accessories</h3>
          <p className="text-[20px] leading-[160%] mt-2">
            Elevate and connect your style with the celestial realm through
            Cacoona Charms and Accessories. Our astrology-inspired charms and
            accessories are more than mere adornments; they’re symbols of cosmic
            alignment and spiritual empowerment. Each piece is thoughtfully
            designed to resonate with your unique astrological energy, allowing
            you to harness the power of the universe and express your inner
            essence authentically
          </p>
        </div>
        <Image src="/Images/lp2.png" alt="#" width={400} height={400} />
      </div>
      <div className="flex gap-52 bg-gradient-to-r from-[#4FA2AE] to-[#30304C] p-10 mt-[3rem] rounded-tl-[5rem]">
        <Image src="/Images/lp3.png" alt="#" width={400} height={400} />
        <div className="flex flex-col items-start justify-center">
          <h3 className="font-semibold text-[32px]">Cacoona Farm</h3>
          <p className="text-[20px] leading-[160%] mt-2">
            Journey with us into the future with Cacoona your exclusive preview
            of upcoming products and releases. Be the first to discover our
            later expansions as we gain insider access to our creative process
            and products development ensuring that you’re always at the
            forefront of the Cacoona experience
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section2;
