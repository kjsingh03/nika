// import React from 'react'

import { useEffect } from "react";
import card from "../utils/card";
import {
  ci1,
  ci3,
  circlelottie,
  lockshield,
  wa1,
  wa2,
  wa3,
  wc1,
  wc2,
  wc3,
  wc4,
} from "../assets";
import { Faq, HomeCard, Signup } from "../components";
import Lottie from "lottie-react";

function WebApp() {
  const webappCard: card[] = [
    {
      img: wa1,
      title: "Connect Your Wallet",
      detail: "Explain how users can connect their crypto wallet",
    },
    {
      img: wa2,
      title: "Choose Your Assets",
      detail: "Instructions on selecting assets for swapping or buying",
    },
    {
      img: wa3,
      title: "Confirm and Buy",
      detail: "Highlight the simplicity of the final step",
    },
  ];
  const whyChoose: card[] = [
    {
      img: wc1,
      title: "Instant Swaps",
      detail: "Fast and secure transactions.",
    },
    {
      img: wc2,
      title: "Low Fees",
      detail: "Lower fees compared to competitors.",
    },
    {
      img: wc3,
      title: "Security",
      detail: "High security standards to protect your assets.",
    },
    {
      img: wc4,
      title: "Wide Asset Support",
      detail: "Support for a variety of popular Web3 assets.",
    },
  ];
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <>
      <div className="lg:p-[160px_80px] webapp-hero xs:p-[120px_40px] justify-center p-[160px_16px] flex items-center">
        <div className="w-[1280px] max-w-[100%]">
          <div className="flex flex-col gap-6 w-[672px] max-w-full">
            <div className="flex flex-col gap-3">
              <h1 className="lg:text-[64px] text-[42px] tracking-[-1.28px] text-start leading-[100%] text-[#070707] font-HelveticaNeueCyr font-[550] lg:max-w-[690px] max-w-[500px]">
                Manage your Web3 assets with confidence and ease
              </h1>
              <p className="font-inter text-[16px] font-[500] leading-6 text-start text-[rgba(7,7,7,0.72)]">
                Swap and buy digital assets effortlessly in one secure platform
              </p>
            </div>
            <div className="">
              <div className="min-h-12 w-full inline-flex">
                <button className="xs:w-32 w-full h-12 px-4 py-[18px] text-center text-base font-bold font-['Inter'] leading-normal btn btn1 rounded-lg justify-center items-center gap-2.5 flex">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:p-[75px_80px] xs:p-[25px_40px] p-[25px_16px] w-full flex justify-center">
        <div className="w-[1280px] max-w-full">
          <div className="w-[100%] flex flex-col items-start gap-6">
            <div className="text-[#070707] sm:text-[42px] text-[28px] font-['HelveticaNeueCyr'] leading-[42px] font-[550]">
              How It Works
            </div>
            <div className="grid sm:grid-cols-3 grid-cols-1 gap-3 w-full">
              {webappCard.map((item, idx) => (
                <HomeCard data={item} key={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:p-[75px_80px] xs:p-[25px_40px] p-[25px_16px] w-full flex justify-center">
        <div className="w-[1280px] max-w-full">
          <div className="w-full flex flex-col items-start gap-6">
            <div className="text-[#070707] sm:text-[42px] text-[28px] font-['HelveticaNeueCyr'] leading-[42px] font-[550]">
              Why Choose Us?
            </div>
            <div className="flex sm:flex-row flex-col-reverse gap-3 w-full">
              <div className="grid sm:w-[50%] lg:grid-cols-2 gap-3 ">
                {whyChoose.map((item, idx) => (
                  <HomeCard data={item} key={idx} />
                ))}
              </div>
              <div className="sm:w-[50%] sm:min-h-[427px] sm:h-[inherit] flex justify-center items-center bg-[#F6F6FD]">
                <Lottie
                  animationData={circlelottie}
                  className="w-[316px] h-[280px] "
                  alt="Circle Lottie"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:p-[75px_80px] xs:p-[25px_40px] p-[25px_16px] w-full flex justify-center">
        <div className="w-[1280px] max-w-[100%]">
          <div className="flex justify-start flex-col gap-10 w-[100%]">
            <div className="text-[#070707] sm:text-[42px] text-[28px] font-['HelveticaNeueCyr'] leading-[42px] font-[550]">
              Your Security is Our Priority
            </div>
            <div className="flex flex-col">
              <div className="flex sm:flex-row flex-col gap-x-5 gap-y-[17.5px]  border-t-[1px] border-[rgba(7,7,7,0.20)]">
                <div className="flex sm:w-[50%] justify-center items-center sm:py-[77px] lg:py-[23px] py-6">
                  <div className="sm:w-[284px] sm:h-[284px] xl:w-[394px] xl:h-[390px] w-[288px] h-[260px]">
                    <Lottie animationData={ci1} loop={true} />
                  </div>
                </div>
                <div className="sm:h-[inherit] sm:w-[1px] sm:block hidden bg-[rgba(7,7,7,0.20)]"></div>
                <div className="flex sm:w-[50%] items-center sm:border-t-0 pb-8">
                  <div className="flex flex-col justify-start gap-2">
                    <div className="font-HelveticaNeueCyr sm:text-[28px] text-[20px] leading-[110%] tracking-[-1px] font-[550]  text-black">
                      Encryption
                    </div>
                    <p className="sm:text-[16px] text-[14px] leading-6 tracking-[-0.08px] font-[400] text-[rgba(7,7,7,0.72)] font-inter">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-row flex-col-reverse gap-x-5 gap-y-[17.5px]  border-t-[1px] border-[rgba(7,7,7,0.20)]">
                <div className="flex sm:w-[50%] items-center pb-8">
                  <div className="flex flex-col justify-start gap-2">
                    <div className="font-HelveticaNeueCyr sm:text-[28px] text-[20px] leading-[110%] tracking-[-1px] font-[550]  text-black">
                      Protection against hacks
                    </div>
                    <p className="sm:text-[16px] text-[14px] leading-6 tracking-[-0.08px] font-[400] text-[rgba(7,7,7,0.72)] font-inter">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi
                    </p>
                  </div>
                </div>
                <div className="sm:h-[inherit] sm:w-[1px] sm:block hidden bg-[rgba(7,7,7,0.20)]"></div>

                <div className="flex sm:w-[50%] justify-center items-center sm:py-[77px] lg:py-[23px] py-6">
                  <div className="sm:w-[265px] xl:w-[401px] xl:h-[427px]  sm:h-[282px] w-[288px] h-[260px]">
                    <Lottie animationData={lockshield} loop={true} />
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-row flex-col gap-x-5 gap-y-[17.5px]  border-t-[1px] border-b-[1px] border-[rgba(7,7,7,0.20)]">
                <div className="flex sm:w-[50%] justify-center items-center  py-[80px]">
                  <div className="sm:w-[282px] xl:w-[518px] xl:h-[436px] sm:h-[236px] w-[288px] h-[260px]">
                    <Lottie animationData={ci3} loop={true} />
                  </div>
                </div>
                <div className="sm:h-[inherit] sm:w-[1px] sm:block hidden bg-[rgba(7,7,7,0.20)]"></div>

                <div className="flex sm:w-[50%] items-center pb-8">
                  <div className="flex flex-col justify-start gap-2">
                    <div className="font-HelveticaNeueCyr sm:text-[28px] text-[20px] leading-[110%] tracking-[-1px] font-[550]  text-black">
                      Transparency in operations
                    </div>
                    <p className="sm:text-[16px] text-[14px] leading-6 tracking-[-0.08px] font-[400] text-[rgba(7,7,7,0.72)] font-inter">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Faq />
      <div className="lg:pt-[75px] xs:pt-[25px] pt-[25px]"></div>
      <Signup />
    </>
  );
}

export default WebApp;
