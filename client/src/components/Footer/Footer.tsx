// import React from 'react'

import { Link } from "react-router-dom";
import { logo, youtube } from "../../assets";
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setAlert } from "../../store/UISlice";

function Footer() {

  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const collectMail = async (e: any) => {
    e.preventDefault();
    try {
      if (!email) return;

      if ((/^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/).test(email)) {
        const res = await axios.get(`https://script.google.com/macros/s/AKfycbxF1wcL6GXVJanGmsElMO9zABwL2MzM0nAHPxvyAwjBTVEjKRl4sNM0nRx57H2ODrXNPw/exec?email=${email}`);
        console.log(res);

        dispatch(setAlert({ message: "Email subscribed sucessfully", type: 'success' }));
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
      <div className="lg:p-[40px_80px] xs:p-[24px_40px] p-[24px_16px] lg:pb-0 xs:pb-0 pb-0 w-full flex justify-center bg-[#070707]">
        <div className="w-[1280px] max-w-[100%]">
          <div className="lg:pb-5 xs:pb-2.5 pb-6 flex items-center ">
            <img src={logo} alt="Brand Logo" />
            <p className="font-inter lg:text-[22px] text-[16px] text-white font-bold leading-[90%] text-center px-1.5 py-[3px]">
              Nika
            </p>
          </div>
          <div className="flex flex-col gap-4 w-[100%] ">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="">
                <h3 className="lg:text-[36px] font-[550] font-HelveticaNeueCyr tracking-[-1px] lg:leading-[120%] text-white text-[28px] leading-[110%] lg:max-w-[450px] max-w-[330px]">
                  On-Chain Diversification Made Simple
                </h3>
                <div className="text-[rgba(255,255,255,.72)] pt-1 text-sm font-normal font-['Inter'] leading-[140%]">
                  Investment opportunities available to everyone
                </div>
              </div>

              <form method="POST" className="">
                <div className="flex lg:flex-row flex-col gap-1.5">
                  <input
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    className="h-[38px] w-[100%] pl-3 py-3 text-base font-normal font-['Inter'] leading-tight bg-white/20 rounded-md justify-start items-center gap-2.5 inline-flex text-[rgba(255,255,255,.72)]"
                    placeholder="Email address"
                  />
                  <button onClick={collectMail} className="h-9 lg:w-[156px] btn btn4 w-[100%] px-4 py-3 text-base font-medium font-['Inter'] leading-tight rounded-md shadow justify-center items-center gap-2.5 inline-flex">
                    Try it out
                  </button>
                </div>
                <div className="h-[17px] mt-2 justify-start items-center gap-2 inline-flex">
                  <input
                    type="checkbox"
                    id="check"
                    className="w-4 h-4 relative bg-white rounded-[3px] shadow"
                  />
                  <label
                    htmlFor="check"
                    className="text-white text-xs font-light font-['Inter'] leading-none"
                  >
                    I agree to receive marketing emails from Nika
                  </label>
                </div>
              </form>
            </div>
            <div className="pt-5 pb-[30px] grid sm:grid-cols-4 gap-4">
              <div className="flex flex-col items-start gap-2">
                <div className="text-white text-sm font-medium font-['Inter'] leading-[16.80px]">
                  Page
                </div>
                <Link className="text-[rgba(255,255,255,0.56)] text-sm font-normal font-['Inter'] leading-tight" to={"/about"}                >
                  About Us
                </Link>
                <Link className="text-[rgba(255,255,255,0.56)] text-sm font-normal font-['Inter'] leading-tight" to={"/blog"}                >
                  Blog
                </Link>
                <Link className="text-[rgba(255,255,255,0.56)] text-sm font-normal font-['Inter'] leading-tight" to={"/waitlist"}                >
                  Waitlist
                </Link>
              </div>
              {/* <div className="flex flex-col items-start gap-2">
                <div className="text-white text-sm font-medium font-['Inter'] leading-[16.80px]">
                  Contact Us
                </div>
                <p className="text-[rgba(255,255,255,0.56)] text-sm font-normal font-['Inter'] leading-tight">
                  customerservice@nika.com
                </p>
                <p className="text-[rgba(255,255,255,0.56)] text-sm font-normal font-['Inter'] leading-tight">
                  222-22-22
                </p>
              </div> */}
              <div className="flex flex-col items-start gap-2">
                <div className="text-white text-sm font-medium font-['Inter'] leading-[16.80px]">
                  Help
                </div>
                <Link
                  to={"/terms"}
                  className="text-[rgba(255,255,255,0.56)] text-sm font-normal font-['Inter'] leading-tight"
                >
                  Terms of Service
                </Link>
                <Link
                  to={"/privacy"}
                  className="text-[rgba(255,255,255,0.56)] text-sm font-normal font-['Inter'] leading-tight"
                >
                  Privacy Policy
                </Link>
              </div>
              <div className="flex flex-col items-start gap-2">
                <div className="text-white text-sm font-medium font-['Inter'] leading-[16.80px]">
                  Twitter
                </div>
                <div className="flex gap-4">
                  <a href="https://x.com/nikafinance" target="_blank">
                    <img src={youtube} alt="Youtube" />
                  </a>
                  {/* <a href="" target="_blank">
                    <img src={insta} alt="Instagram" />
                  </a>
                  <a href="" target="_blank">
                    <img src={twitter} alt="Twitter" />
                  </a> */}
                </div>
              </div>
            </div>
            <div className="h-[41px] py-3 justify-center items-center inline-flex">
              <div className="text-[rgba(255,255,255,0.72)] text-xs font-normal font-['Inter'] leading-none">
                © 2024 Nika
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-[100%] text-[rgba(255,255,255,.72)] text-xs py-12">
            <p>
              Disclaimer: The material contained on this website is for informational purposes only and is not legal, tax, investment, financial, or other advice. You should not take, or refrain from taking, any action based on any information contained herein or any other information that we make available at any time, including blog posts, data, articles, links to third-party content, Discord content, news feeds, tutorials, tweets, and videos. Before making any financial, legal, technical, or other decisions, seek independent professional advice from a licensed and qualified individual in the appropriate area.
            </p>
            <p>
              You shall not purchase or otherwise acquire our token products if you are: a citizen, resident (tax or otherwise), and/or green card holder, incorporated in, owned or controlled by a person or entity in, located in, or have a registered office or principal place of business in the U.S. (defined as a U.S. person), or if you are a person in any jurisdiction in which such offer, sale, and/or purchase of any of our token products is unlawful, prohibited, or unauthorized (together with U.S. persons, a “Restricted Person”). The term “Restricted Person” includes, but is not limited to, any natural person residing in, or any firm, company, partnership, trust, corporation, entity, government, state or agency of a state, or any other incorporated or unincorporated body or association that is established and/or lawfully existing under the laws of a jurisdiction in which such offer, sale, and/or purchase of any of our token products is unlawful, prohibited, or unauthorized.
            </p>
            <p>
              Products referenced on this website may not be available to persons who are located in, or residents of, the United States and are subject to the risks associated with purchasing crypto assets, including cryptocurrencies and crypto tokens. Because crypto assets are a new technological innovation with a limited history, they are highly speculative assets. Future regulatory actions or policies may limit the ability to sell, exchange, or use a crypto asset. The price of a crypto asset may be impacted by the transactions of a small number of holders. Crypto assets may decline in popularity, acceptance, or use, impacting their price. Carefully consider the risk factors, purchase objectives, fees, expenses, and other information associated with any investment before making a purchase decision. All products that are speculative in nature involve a high degree of risk and uncertainty. There is no guarantee that any token will grow in value.
            </p>
            <p>
              Past performance of any product is not indicative of future results. Prospective users must not construe the contents of this website as legal, tax, investment, or other advice. Each prospective user is urged to consult with its own advisors with respect to legal, tax, regulatory, financial, accounting, and similar consequences of investing in any product, the suitability of the purchase, and other relevant matters. This website contains an overview summary of the constituents of each product. This website is neither an offer to sell nor a solicitation or recommendation to buy units or shares in any product. The summary set forth on this website does not purport to be complete and may be qualified either in whole or in part by reference to other documents or sources of information. Do not place undue reliance on this website. To the extent this website or any product refers to or incorporates third-party content, DiversiFi is not responsible for any errors or omissions in such content. The tokens have not been approved or disapproved by the Securities and Exchange Commission, are not registered under the Securities Act of 1933, the Investment Company Act of 1940, or any state securities commission or other regulatory body. DiversiFi is not registered as an Investment Adviser under the Investment Advisers Act of 1940 or as a Commodity Pool Operator or Commodity Trading Adviser under the Commodity Exchange Act. Your use of this site signifies that you accept our <Link to="/dashboard"> Terms and Conditions of Use</Link> , including the <Link to="/privacy">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
