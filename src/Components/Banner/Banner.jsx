import { Search } from "lucide-react";
import React from "react";

const Banner = () => {
  return (
    <div className=" lg:px-[350px] space-y-7 bg-gray-200">
      <h1 className="text-center text-6xl font-extrabold pt-20">
        Deal your <span className="bg-gradient-to-r from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent"> Products </span> <br />
        in a <span className="bg-gradient-to-r from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent">Smart</span> way !
      </h1>
      <p className="text-gray-500 py-8 text-center">SmartDeals helps you sell, resell, and shop from trusted local sellers — all in one place!</p>
      <div className="flex items-center justify-center">
      <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden w-[500px]">
        <input
          type="text"
          placeholder="Search for Products, Categories..."
          className="flex-1 px-5 py-3 text-gray-700 outline-none"
        />
        <button className="p-4 bg-gradient-to-r from-[#9F62F2] to-[#632EE3] rounded-r-full text-white hover:opacity-90 transition">
          <Search size={20} />
        </button>
      </div>
    </div>
    <div className="flex justify-center pb-3">
        <button className="btn-primary px-3 py-2 rounded-xl mr-3">Watch All Product </button>
        <button className="btn-primary px-3 py-2 rounded-xl">Post an porduct</button>
    </div>
    </div>
  );
};

export default Banner;