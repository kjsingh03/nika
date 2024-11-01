// import React from 'react'
import { useEffect } from "react";
import {  mail } from "../assets";
import { BlogCard, BreadCrumb } from "../components";
import { Blogs } from "../interfaces";

function Blog({ blogs }: { blogs: Blogs[], tags: string[] }) {

  // const [selectTag, setSelecttag] = useState("All");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <>
      <BreadCrumb />
      {/* <div className="lg:p-[30px_80px_0] xs:p-[30px_40px_0] p-[30px_16px_0] w-full flex xl:justify-center justify-start overflow-hidden">
        <div className="xl:w-[1280px] max-w-[100%] ">
          <div className="flex gap-1 w-[100%] overflow-auto">
            {tags.map((item, ind) => (
              <p
                className={`py-1 px-2 rounded-[34px] cursor-pointer text-xs font-inter text-center w-max ${selectTag == item
                    ? "bg-[#5B40FF] text-white"
                    : "bg-[rgba(91,64,255,0.08)] text-[#5B40FF]"
                  }`}
                onClick={() => setSelecttag(item)}
                key={ind}
              >
                #{item.replace(" ", "")}
              </p>
            ))}
          </div>
        </div>
      </div> */}
      <div className="lg:p-[75px_80px] xs:p-[25px_40px] p-[25px_16px] w-full flex justify-center">
        <div className="w-[1280px] max-w-[100%]">
          <div className="w-[100%] flex flex-col items-start gap-6">
            <div className="flex justify-between w-full items-center">
              <div className="text-[#070707] sm:text-[42px] text-[28px] font-['HelveticaNeueCyr'] leading-[42px] font-[550]">
                Blog
              </div>
              {/* <div className="w-auto text-right text-[#070707] text-base font-medium font-inter leading-normal">
                Show more
              </div> */}
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-rows-[auto] gap-3 ">
              {/* {selectTag !== "All"
                ? blogs
                  .filter((blog) => selectTag === blog.category)
                  .reverse()
                  .map((blog, ind) => <BlogCard blog={blog} key={ind} />)
                : blogs.map((blog, ind) => <BlogCard blog={blog} key={ind} />)} */}
              {
                [...blogs].reverse().map((blog, ind) => <BlogCard blog={blog} key={ind} />)
              }
            </div>
          </div>
        </div>
      </div>
      {/* <div className="lg:p-[75px_80px_0] xs:p-[25px_40px_0] p-[25px_16px_0] w-full flex justify-center">
        <div className="w-[1280px] max-w-[100%]">
          <div className="w-[100%] flex flex-col items-start gap-6">
            <div className="flex justify-between w-full items-center">
              <div className="text-[#070707] sm:text-[42px] text-[28px] font-['HelveticaNeueCyr'] leading-[42px] font-[550]">
                Latest Articles
              </div>
              <div className="w-auto text-right text-[#070707] text-base font-medium font-inter leading-normal">
                Show more
              </div>
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-rows-[auto] gap-3 ">
              {
              blogs.map((blog, ind) =>
                ind > 2 && <BlogCard blog={blog} key={ind} />
              )
              }
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="lg:p-[75px_80px] xs:p-[25px_40px] p-[25px_16px] w-full flex justify-center">
        <div className="w-[1280px] max-w-[100%]">
          <div className="w-[100%] flex flex-col items-start gap-6">
            <div className="flex justify-between w-full items-center">
              <div className="text-[#070707] sm:text-[42px] text-[28px] font-['HelveticaNeueCyr'] leading-[42px] font-[550]">
                Categories
              </div>
              <div className="w-auto text-right text-[#070707] text-base font-medium font-inter leading-normal">
                Show more
              </div>
            </div>
            <div className="grid lg:grid-cols-4 xs:grid-cols-2 grid-cols-1 grid-rows-[auto] gap-3 ">
              <div className="sm:p-6 p-4 flex items-start gap-4 flex-col rounded-[12px] bg-[#F6F6FD]">
                <div className="">
                  <img src={light} alt="Light" />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <div className="font-HelveticaNeueCyr sm:text-[28px] text-[20px] leading-[110%] tracking-[-1px] font-[550]  text-black">
                    DeFi Tutorials
                  </div>
                  <p className="sm:text-[16px] text-[14px] leading-6 tracking-[-0.08px] font-[400] text-[rgba(7,7,7,0.56)] font-inter">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut
                  </p>
                </div>
              </div>
              <div className="sm:p-6 p-4 flex items-start gap-4 flex-col rounded-[12px] bg-[#F6F6FD]">
                <div className="">
                  <img src={light} alt="Light" />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <div className="font-HelveticaNeueCyr sm:text-[28px] text-[20px] leading-[110%] tracking-[-1px] font-[550]  text-black">
                    Company Updates
                  </div>
                  <p className="sm:text-[16px] text-[14px] leading-6 tracking-[-0.08px] font-[400] text-[rgba(7,7,7,0.56)] font-inter">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut
                  </p>
                </div>
              </div>
              <div className="sm:p-6 p-4 flex items-start gap-4 flex-col rounded-[12px] bg-[#F6F6FD]">
                <div className="">
                  <img src={light} alt="Light" />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <div className="font-HelveticaNeueCyr sm:text-[28px] text-[20px] leading-[110%] tracking-[-1px] font-[550]  text-black">
                    Investment Strategies
                  </div>
                  <p className="sm:text-[16px] text-[14px] leading-6 tracking-[-0.08px] font-[400] text-[rgba(7,7,7,0.56)] font-inter">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut
                  </p>
                </div>
              </div>
              <div className="sm:p-6 p-4 flex items-start gap-4 flex-col rounded-[12px] bg-[#F6F6FD]">
                <div className="">
                  <img src={light} alt="Light" />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <div className="font-HelveticaNeueCyr sm:text-[28px] text-[20px] leading-[110%] tracking-[-1px] font-[550]  text-black">
                    Crypto Market News
                  </div>
                  <p className="sm:text-[16px] text-[14px] leading-6 tracking-[-0.08px] font-[400] text-[rgba(7,7,7,0.56)] font-inter">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Stay Informed Start */}
      <form
        method="POST"
        className="lg:p-[0px_80px] xs:p-[0px_40px] p-[0px_16px] w-full flex justify-center mb-20"
      >
        <div className="w-[1280px] max-w-[100%] rounded-[12px] stay-sec sm:p-[60px_24px] p-[24px_12px] flex lg:flex-row flex-col gap-3">
          <div className="lg:w-[50%] w-[100%]">
            <div className="text-[#070707] sm:text-[42px] text-[28px] font-['HelveticaNeueCyr'] leading-[42px] font-[550]">
              Stay Informed
            </div>
            <p className="sm:text-[16px] text-[14px] leading-6 tracking-[-0.08px] font-[400] text-[rgba(7,7,7,0.56)] font-inter pt-2">
            Sign up and stay ahead of the curve with early access and exclusive insights.
            </p>
          </div>
          <div className="lg:w-[50%] w-[100%] bg-white xs:p-5 p-4 gap-3 rounded-[8px] border-[1px] border-[rgba(255,255,255,0.20)] flex flex-col xs:gap-5">
            <div className="h-[34px] pl-3 pr-[7px] py-[5px] rounded border border-[#070707]/60 justify-start items-center inline-flex">
              <input
                type="email"
                placeholder="Email"
                className="border-none outline-none w-[100%] text-[#070707]/70 text-sm font-normal font-ibm leading-tight"
              />
              <div className="w-5 h-5">
                <img src={mail} alt="Mail" />
              </div>
            </div>
            <button className="h-[34px] btn btn1 p- text-center text-sm font-medium font-ibm leading-none rounded flex-col justify-center items-center inline-flex">
              Get Started
            </button>
          </div>
        </div>
      </form>
      {/* Stay Informed End */}

      {/* <div className="lg:p-[75px_80px] xs:p-[25px_40px] p-[25px_16px] w-full flex justify-center">
        <div className="w-[1280px] max-w-[100%]">
          <div className="w-[100%] flex flex-col items-start gap-6">
            <div className="flex justify-between w-full items-center">
              <div className="text-[#070707] sm:text-[42px] text-[28px] font-['HelveticaNeueCyr'] leading-[42px] font-[550]">
                Insights&Updates
              </div>
              <div className="w-auto text-right text-[#070707] text-base font-medium font-inter leading-normal">
                Show more
              </div>
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-rows-[auto] gap-3 ">
              {blogs.map((blog, ind) =>
                ind > 2 && <BlogCard blog={blog} key={ind} />
              )}
            </div>
          </div>
        </div>
      </div> */}
      {/* <Signup /> */}
    </>
  );
}

export default Blog;
