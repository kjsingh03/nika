// import React from 'react'

import { ChangeEvent, useEffect, useState } from "react";
import { jo1, jo2, jo3, jo4, jo5, jo6, mail } from "../assets";
import { HomeCard, Signup } from "../components";
import card from "../utils/card";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAlert } from "../store/UISlice";

function Waitlist({ congrats, setCongrats }: { congrats: boolean, setCongrats: (x: boolean) => void }) {

  const waitlistCard: card[] = [
    {
      img: jo1,
      title: "Early Access to Products",
      detail: "Be among the first to access Nika's cutting-edge crypto indices and products, designed to simplify and enhance your digital asset investment experience.",
    },
    {
      img: jo2,
      title: "Exclusive Offers and Bonuses",
      detail: "Enjoy special bonuses and rewards available only to our waitlist members.",
    },
    {
      img: jo3,
      title: "Personalized Recommendations",
      detail: "Receive suggestions based on your preferences and risk profile, helping you make informed decisions and optimize your portfolio.",
    },
    {
      img: jo4,
      title: "Exclusive Insights",
      detail: "Stay ahead of the curve with exclusive insights, market analysis, and expert opinions from our team of seasoned professionals and industry leaders.",
    },
    {
      img: jo5,
      title: "Discounts on Future Products",
      detail: "Benefit from lower fees on our upcoming products and services, ensuring you can maximize your returns and minimize costs as an early adopter.",
    },
    {
      img: jo6,
      title: "Shape the Future of DeFi Investing",
      detail: "Play an active role in shaping the future of decentralized finance by participating in beta testing, providing feedback, and contributing to the development of our platform.",
    }
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const collectMail = async (e: any) => {
    e.preventDefault();
    try {
      if (!email) return;

      if ((/^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/).test(email)) {
        const res = await axios.get(`https://script.google.com/macros/s/AKfycbxF1wcL6GXVJanGmsElMO9zABwL2MzM0nAHPxvyAwjBTVEjKRl4sNM0nRx57H2ODrXNPw/exec?email=${email}`);
        console.log(res);

        setCongrats(!congrats);
      } else {
        dispatch(setAlert({ message: "Enter valid email", type: 'success' }));
      }

    } catch (e: any) {
      dispatch(setAlert("Failed to record"));
    } finally {
      setTimeout(() => dispatch(setAlert({ message: "", type: '' })), 1000);
      setEmail('')
    }
  };

  return (
    <>
      <div className="lg:p-[160px_80px_200px_80px] waitlist-hero xs:p-[160px_40px_120px_40px] p-[160px_25px_120px_25px] flex justify-center items-center">
        <div className="w-[1280px] max-w-full flex xs:gap-8 gap-6 lg:flex-row lg:items-center flex-col">
          <div className="lg:w-[50%] w-full">
            <h1 className="lg:text-[64px] text-[42px] tracking-[-1.28px] text-start leading-[100%] text-[#070707] font-HelveticaNeueCyr font-[550] lg:max-w-[690px] max-w-[500px]">
              On-Chain Diversification Starts Here:
            </h1>
            <p className="font-inter font-[500] leading-6 text-[rgba(7,7,7,0.72)]">
              Join Our Waitlist Today
            </p>
          </div>
          <form className="bg-white lg:w-[50%] w-full p-5 flex flex-col gap-5 rounded-[8px] border-[1px] border-[rgba(255,255,255,0.20)]">
            <div className="flex-col w-full justify-start items-start gap-3 inline-flex">
              <div className="h-[41px] w-full flex-col justify-start items-start gap-2 flex">
                <div className="h-[41px] w-full pl-3 pr-2.5 py-[8.50px] bg-[#9f9f9f]/0 rounded border border-black/50 justify-start items-center inline-flex">
                  <input
                    type="text"
                    placeholder="Name"
                    className="text-black/60 border-none outline-none text-base font-normal font-ibm leading-snug w-full"
                  />
                </div>
              </div>
              <div className=" h-[41px] w-full flex-col justify-start items-start gap-2 flex">
                <div className=" h-[41px] w-full pl-3 pr-2.5 py-[8.50px] bg-[#9f9f9f]/0 rounded border border-black/50 justify-start items-center inline-flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    className="text-black/60 border-none outline-none text-base font-normal font-ibm leading-snug w-full"
                    placeholder="Email"
                  />
                  <div className="w-5 h-5 relative">
                    <img src={mail} alt="Mail" />
                  </div>
                </div>
              </div>
            </div>
            <button onClick={collectMail} className="h-[41px] btn btn1 px-4 py-[15px] text-center text-base font-medium font-ibm leading-[17.60px] rounded flex-col justify-center items-center inline-flex">
              Get Started
            </button>
          </form>
        </div>
      </div>
      <div className="lg:p-[75px_80px] xs:p-[25px_40px] p-[25px_16px] w-full flex justify-center">
        <div className="w-[1280px] max-w-full">
          <div className="w-[100%] flex flex-col items-start gap-6">
            <div className="text-[#070707] sm:text-[42px] text-[28px] font-['HelveticaNeueCyr'] leading-[42px] font-[550]">
              Why Join?
            </div>
            <div className="grid sm:grid-cols-3 grid-cols-1 gap-3 ">
              {waitlistCard.map((data, idx) => (
                <HomeCard key={idx} data={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Signup />
    </>
  );
}

export default Waitlist;
