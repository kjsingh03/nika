// import React from 'react'

import Lottie from "lottie-react";
import { book, ci1, cloud, light } from "../assets";
import { Signup } from "../components";
import { useEffect } from "react";

function About() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
  return (
    <>
      <div className="about-hero 2xl:h-[600px] lg:p-[160px_80px] xs:p-[160px_40px] p-[160px_16px] w-full flex justify-center items-center">
        <div className="w-[1280px] max-w-full">
          <div className="2xl:w-[690px] w-[650px] max-w-full flex flex-col gap-3 ">
            <h1 className="lg:text-[64px] text-[42px] tracking-[-1.28px] text-start leading-[100%] text-[#070707] font-HelveticaNeueCyr font-[550] lg:max-w-[690px] max-w-[500px]">
              About Us
            </h1>
            <p className="font-inter font-[500] leading-6 text-[rgba(7,7,7,0.72)]">
            At Nika, we're revolutionizing digital asset investing by offering expertly curated crypto indices and products, making diversification simple and accessible for investors of all types. Our experienced team leverages advanced statistical analysis and rigorous backtesting to construct indices that maximize risk-adjusted returns. With a user-friendly interface and robust security measures, we provide a seamless bridge between traditional finance and DeFi, empowering you to invest in the future of finance with confidence.            </p>
          </div>
        </div>
      </div>
      <div className="lg:p-[75px_80px_0] xs:p-[25px_40px] p-[25px_16px] w-full flex justify-center">
        <div className="max-w-[1280px]">
          <div className="w-[100%]">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-3 ">
              <div className="sm:p-6 p-4 flex items-start gap-4 flex-col rounded-[12px] bg-[#F6F6FD]">
                <div className="">
                  <img src={book} alt="Book" />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <div className="font-HelveticaNeueCyr sm:text-[28px] text-[20px] leading-[110%] tracking-[-1px] font-[550]  text-black">
                    Our Mission
                  </div>
                  <p className="sm:text-[16px] text-[14px] leading-6 tracking-[-0.08px] font-[400] text-[rgba(7,7,7,0.56)] font-inter">
                  Our mission is to democratize access to  investments by offering curated, on-chain products that empower all investors with simplicity, security, and value.
                  </p>
                </div>
              </div>
              <div className="sm:p-6 p-4 flex items-start gap-4 flex-col rounded-[12px] bg-[#F6F6FD]">
                <div className="">
                  <img src={light} alt="Light" />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <div className="font-HelveticaNeueCyr sm:text-[28px] text-[20px] leading-[110%] tracking-[-1px] font-[550]  text-black">
                    Our Vision
                  </div>
                  <p className="sm:text-[16px] text-[14px] leading-6 tracking-[-0.08px] font-[400] text-[rgba(7,7,7,0.56)] font-inter">
                  At Nika, we envision a world where digital asset management is seamless, secure, and accessible, becoming the go-to platform for bridging traditional and decentralized finance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team Expertise Start*/}
      <div className="lg:p-[75px_80px] xs:p-[25px_40px] p-[25px_16px] w-full flex justify-center">
        <div className="w-[1280px] max-w-full">
          <div className="w-[100%] flex flex-col items-start gap-6">
            <div className="text-[#070707] sm:text-[42px] text-[28px] font-['HelveticaNeueCyr'] leading-[42px] font-[550]">
              Team Expertise
            </div>
            <div className="flex lg:flex-row flex-col gap-3">
              <div className="lg:w-[50%] lg:h-[inherit] flex justify-center items-center">
                <Lottie
                  animationData={ci1}
                  className="xs:w-[464px] h-[490px] max-w-[100%]"
                  alt="Circle Lottie"
                />
              </div>
              <div className="flex flex-col lg:w-[50%] grid-rows-3 grid-cols-1 gap-3 ">
                <div className="sm:p-6 p-4 flex items-start gap-4 flex-col rounded-[12px] bg-[#F6F6FD]">
                  <div className="">
                    <img src={cloud} alt="Cloud" />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <div className="font-HelveticaNeueCyr sm:text-[28px] text-[20px] leading-[110%] tracking-[-1px] font-[550]  text-black">
                    Experienced Leadership
                    </div>
                    <p className="sm:text-[16px] text-[14px] leading-6 tracking-[-0.08px] font-[400] text-[rgba(7,7,7,0.56)] font-inter">
                    Our team is led by seasoned professionals with deep expertise in finance, technology, and digital assets. With a proven track record of building successful startups and driving innovation, our leadership team is committed to delivering exceptional value to our clients and partners.
                    </p>
                  </div>
                </div>
                <div className="sm:p-6 p-4 flex items-start gap-4 flex-col rounded-[12px] bg-[#F6F6FD]">
                  <div className="">
                    <img src={cloud} alt="Cloud" />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <div className="font-HelveticaNeueCyr sm:text-[28px] text-[20px] leading-[110%] tracking-[-1px] font-[550]  text-black">
                    Cutting-Edge Technology
                    </div>
                    <p className="sm:text-[16px] text-[14px] leading-6 tracking-[-0.08px] font-[400] text-[rgba(7,7,7,0.56)] font-inter">
                    Our technology team consists of skilled developers and engineers with extensive experience in blockchain, distributed systems, and financial technology. They are dedicated to building and maintaining a robust, secure, and user-friendly platform that leverages the latest advancements in blockchain and smart contract technology to power our innovative products and services.
                    </p>
                  </div>
                </div>
                <div className="sm:p-6 p-4 flex items-start gap-4 flex-col rounded-[12px] bg-[#F6F6FD]">
                  <div className="">
                    <img src={cloud} alt="Cloud" />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <div className="font-HelveticaNeueCyr sm:text-[28px] text-[20px] leading-[110%] tracking-[-1px] font-[550]  text-black">
                    Strategic Advisors and Collaborators
                    </div>
                    <p className="sm:text-[16px] text-[14px] leading-6 tracking-[-0.08px] font-[400] text-[rgba(7,7,7,0.56)] font-inter">
                    DiversiFi benefits from the guidance of a distinguished network of advisors and collaborators, including seasoned professionals from top financial institutions, renowned academics, and influential thought leaders in the digital asset space. These strategic partnerships enable us to stay at the forefront of industry developments, ensuring that our platform remains innovative and aligned with best practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team Expertise End */}
      <Signup />
    </>
  );
}

export default About;
