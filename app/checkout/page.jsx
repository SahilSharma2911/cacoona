import Footer2 from "@/components/Footer/Footer2";
import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main>
      <Navbar />
      <div className="bg-[#30304C] pb-12 md:pb-32 pt-6 md:pt-12 px-[1.2rem] md:px-[2.5rem] xl:px-[8rem]">
        <div className="flex gap-2 text-[15px] md:text-[16px]">
          <Link href="/" className="text-gray-400">
            Home
          </Link>
          <span>/</span>
          <Link href="/viewcart" className="text-gray-400">
            ViewCart
          </Link>
          <span>/</span>
          <Link href="/checkout" className="text-white">
            CheckOut
          </Link>
        </div>
        <div className="mt-8 md:mt-10 flex flex-col md:flex-row justify-between gap-4">
          <article className="bg-white flex flex-col items-center justify-center text-center py-6 lg:py-8 px-6 md:px-10 lg:px-20 max-w-[47rem] rounded-md ">
            <img
              src="/Images/tick.png"
              alt="##"
              className="w-[70px] md:w-[100px] h-[70px] md:h-[100px]"
            />
            <h2 className="font-medium text-[24px] md:text-[26px] mt-3 text-[#272727] leading-[130%]">
              Payment Confirmed
            </h2>
            <h3 className="font-black text-[#4FA2AE] mt-1.5 md:mt-1 text-[14px] md:text-[16px]">Order #3333</h3>
            <p className="font-medium leading-[22px] my-5 md:my-8 text-[#818181] text-[14px] md:text-[16px]">
              Thank you, [Customer's Name], for choosing Cacoona! Your celestial
              journey begins now. Now that your order is confirmed it will be
              ready to ship in 2 days. Please check your inbox in the future for
              your order updates
            </p>
            <div className="flex justify-center ">
              <button className="text-white bg-[#4FA2AE] text-[14px] md:text-[16px] flex justify-center items-center py-2 md:py-2.5 px-8 md:px-12 rounded-sm whitespace-nowrap">
                Back to shopping
              </button>
            </div>
            <div className="text-[#4FA2AE] underline mt-4 md:mt-8 text-[14px] md:text-[16px]" >Print receipt</div>
          </article>
          <article className="md:min-w-[18rem] lg:min-w-[23rem] mt-3 md:mt-0">
            <h2 className="text-[18px] md:text-[20px] text-white">Order Summary</h2>
            <div className="bg-white px-6 py-6 rounded-md mt-3">
              <div className="flex gap-4 flex-col lg:flex-row">
                <img
                  src="/Images/b2.png"
                  alt=""
                  className="rounded-2xl w-[120px] h-[150px]"
                />
                <span>
                  <h3 className="font-bold text-[14px]">Chesper</h3>
                  <p className="text-[14px] leading-[18px] text-[#818181] mt-1 md:max-w-[11.5rem]">
                    Experience the tactile pleasure of penning down your
                    thoughts and dreams in our beautifully crafted hardcover
                    journal.
                  </p>
                  <div className="flex justify-between mt-1.5">
                    <span>Qty: 1</span>
                    <span>$12.00</span>
                  </div>
                </span>
              </div>
              <div className="text-[#818181] mt-6 py-3 px-0.5 border-t border-[#818181] flex flex-col gap-1.5">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>$12.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>$2.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>$1.00</span>
                </div>
              </div>
              <div className="text-[#818181]  py-1.5 px-0.5 border-y border-[#818181] flex flex-col gap-1.5">
              <div className="flex justify-between">
                  <span>Total</span>
                  <span>$15.00</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
      <Footer2 />
    </main>
  );
};

export default page;
