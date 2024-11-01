// import React from 'react'

import { Link } from "react-router-dom";
import { close, ham, logo } from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import { setNavOpen } from "../../store/UISlice";
import { RootState } from "../../store/store";

function Navbar() {
  const navOpen = useSelector((store: RootState) => store.ui.navOpen);
  const dispatcher = useDispatch();

  return (
    <>
      {navOpen && (
        <div className="top-0 mob-nav min-h-screen z-50 w-full" onClick={() => dispatcher(setNavOpen(!navOpen))}>
          <div className="w-[320px] mob-nav-ani p-4 min-h-screen max-w-full bg-white flex flex-col " onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between pb-4 border-b border-b-[rgba(0,0,0,.5)]">
              <div className="logo flex justify-center items-center">
                <img src={logo} alt="Nika Logo" />
                <div className="h-[34px] pl-2 pr-[7px] py-1 justify-center items-center gap-1 inline-flex">
                  <div className="text-center text-[#070707] text-[22px] font-bold font-['Inter'] capitalize leading-tight">
                    Nika
                  </div>
                </div>
              </div>
              <div
                className=""
                onClick={() => dispatcher(setNavOpen(!navOpen))}
              >
                <img src={close} alt="Close" className="w-10" />
              </div>
            </div>
            <div className="w-full h-full flex flex-col py-4 my-auto justify-center items-center text-[#070707] text-[16px] font-inter font-[500] leading-6 text-center gap-3">
              <Link
                to="/about"
                className="p-[4px_7px_4px_12px]"
                onClick={() => dispatcher(setNavOpen(!navOpen))}
              >
                About us
              </Link>
              <Link
                to="/blog"
                className="p-[4px_7px_4px_12px]"
                onClick={() => dispatcher(setNavOpen(!navOpen))}
              >
                Blog
              </Link>
              <Link
                to="/waitlist"
                className="p-[4px_7px_4px_12px]"
                onClick={() => dispatcher(setNavOpen(!navOpen))}
              >
                Waitlist
              </Link>
             {/* <Link
                to="/webapp"
                className="p-[4px_7px_4px_12px]"
                onClick={() => dispatcher(setNavOpen(!navOpen))}
              >
                Web3
              </Link>*/}
            </div>
          </div>
        </div>
      )}
      <div className="navbar max-w-[100%] flex justify-center lg:p-[12px_80px] sticky top-0 bg-white z-50">
        <div className="flex items-center justify-between w-[1280px] max-w-[100%] lg:h-12 xs:h-[75px] lg:px-0 px-4 xs:px-10 h-[60px]">
          <Link to="/">
            <div className="logo flex justify-center items-center">
              <img src={logo} alt="Nika Logo" />
              <div className="h-[34px] pl-2 pr-[7px] py-1 justify-center items-center gap-1 inline-flex">
                <div className="text-center text-[#070707] text-[22px] font-bold font-['Inter'] capitalize leading-tight">
                  Nika
                </div>
              </div>
            </div>
          </Link>
          <div className="lg:flex links hidden items-center gap-3 text-center text-[#070707] text-[16px] font-inter font-[500] leading-6">
            <Link to="/about" className="p-[4px_7px_4px_12px]">
              About us
            </Link>
            <Link to="/blog" className="p-[4px_7px_4px_12px]">
              Blog
            </Link>
            <Link to="/waitlist" className="p-[4px_7px_4px_12px]">
              Waitlist
            </Link>
            <Link to="/webapp" className="p-[4px_7px_4px_12px]">
              Web3
            </Link>
          </div>
          <Link to="/waitlist">
          <button className="w-32 btn btn3 h-12 text-center text-base font-semibold font-inter leading-tight px-4 py-[18px] rounded-lg justify-center items-center gap-2.5 lg:inline-flex hidden">
            Get Started
          </button>
            </Link>
          <div
            className="hamburger lg:hidden"
            onClick={() => dispatcher(setNavOpen(!navOpen))}
          >
            <img src={ham} alt="Hamburger" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
