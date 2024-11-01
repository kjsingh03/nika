import { mail } from "../../assets";

function Signup() {
  return (
    <>
      {/* Signup Start */}
      <form
        method="POST"
        className="lg:p-[0px_80px_75px] xs:p-[0px_40px_25px] p-[0px_16px_25px] w-full flex justify-center"
      >
        <div className="w-[1280px] max-w-[100%] rounded-[12px] stay-sec sm:p-[60px_24px] p-[24px_12px] flex lg:flex-row flex-col gap-3">
          <div className="lg:w-[50%] w-[100%]">
            <div className="text-[#070707] sm:text-[42px] text-[28px] font-['HelveticaNeueCyr'] leading-[42px] font-[550]">
              Sign up to be the first to know about our launch
            </div>
            <p className="sm:text-[16px] text-[14px] leading-6 tracking-[-0.08px] font-[400] text-[rgba(7,7,7,0.56)] font-inter pt-2">
            Join us in shaping the future of finance.
            </p>
          </div>
          <div className="lg:w-[50%] w-[100%] bg-white xs:p-5 p-4 gap-3 rounded-[8px] border-[1px] border-[rgba(255,255,255,0.20)] flex flex-col xs:gap-5">
            <div className="h-[34px] pl-3 pr-[7px] py-[5px] rounded border border-[#070707]/60 justify-start items-center inline-flex">
              <input
                type="text"
                placeholder="Name"
                className="border-none outline-none w-[100%] text-[#070707]/70 text-sm font-normal font-ibm leading-tight"
              />
            </div>
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
            <button className="h-[34px] p-3 rounded flex-col justify-center items-center inline-flex text-center text-sm font-medium font-ibm leading-none btn btn1">
              Sign Up
            </button>
          </div>
        </div>
      </form>
      {/* Signup End */}
    </>
  );
}

export default Signup;
