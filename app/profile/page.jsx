import Footer2 from "@/components/Footer/Footer2";
import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main>
      {/* <Navbar /> */}
      <section className="bg-[#30304C] py-8 px-[8rem]">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Link href="/" className="text-gray-400">
              Home
            </Link>
            <span>/</span>
            <Link href="/profile" className="text-white">
              My Account
            </Link>
          </div>
          <div className="text-white">
            <span>Welcome!</span>{" "}
            <span className="text-[#4FA2AE]">Md Rimel</span>
          </div>
        </div>
        <div className="flex mt-12 gap-12">
          <div className="font-medium text-white flex flex-col gap-5">
            <span className="flex flex-col gap-5">
              Manage My Account
              <span className="text-[#4FA2AE] ml-4">My Profile</span>
            </span>
            <span>My Orders</span>
            <span>My WishList</span>
          </div>
          <div className="">
            {/* components */}
          </div>
        </div>
      </section>
      <Footer2 />
    </main>
  );
};

export default page;
