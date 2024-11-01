// import React from 'react'

import { useEffect } from "react";
import { Link } from "react-router-dom";

function Error404() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <>
      <div className="w-full h-[600px] flex justify-center flex-col items-center err-404">
        <div className="h-[50px] pb-2 justify-start items-start inline-flex">
          <div className="font-[550] text-center text-[#5a40fe] text-[42px] font-['HelveticaNeueCyr'] leading-[42px]">
            Page not found
          </div>
        </div>
        <div className="w-[294px] h-[68px] pb-5 justify-center items-center inline-flex text-center">
          <div className="text-center text-[#333333] text-base font-normal font-inter leading-normal">
            Our team is on it.
          </div>
        </div>
        <Link to={"/"} className="w-32 h-12 px-4 py-[18px] bg-[#5a40fe] rounded-lg justify-center items-center gap-2.5 inline-flex btn btn1 "        >
          <div className="text-center  text-base font-semibold font-['Inter'] leading-tight">
            Home Page
          </div>
        </Link>
      </div>
    </>
  );
}

export default Error404;
