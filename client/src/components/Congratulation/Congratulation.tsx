import React from "react";
import { cclose, congratPaper, logo } from "../../assets";
type proptype = {
  setCongrats: React.Dispatch<React.SetStateAction<boolean>>;
};
function Congratulation(prop: proptype) {
  const { setCongrats } = prop;
  return (
    <>
      <div className="fixed flex justify-center items-center w-full min-h-screen top-0  left-0 bg-[rgba(24,35,37,0.4)] z-[2000] p-[40px_15px]" onClick={() => { setCongrats(false); }}>
        <img src={congratPaper} alt="Congrats Paper" className="w-[654px]  max-w-full absolute z-[2001]" onClick={(e) => e.stopPropagation()} />
        <div className="w-[570px] h-[342px] p-10 bg-white rounded-3xl flex-col justify-start items-start gap-[25px] inline-flex relative z-[2001]" onClick={(e) => e.stopPropagation()}>
          <img src={cclose} alt="CClose" className="absolute right-3 top-3 w-10 " onClick={() => setCongrats(false)} />
          <div className="text-[#182224] max-w-[390px] lg:max-w-max lg:text-[32px] text-[20px] font-medium font-['Inter'] lg:leading-[38.72px]">
          Thank you for joining our waitlist!    <br /> Stay tuned for updates</div>
          <div className="cgrad h-[239px] rounded-xl flex-col justify-center items-center gap-3 flex">
          <div className="logo flex justify-center items-center">
              <img src={logo} alt="Nika Logo" />
              <div className="h-[34px] pl-2 pr-[7px] py-1 justify-center items-center gap-1 inline-flex">
                <div className="text-center text-[#070707] text-[22px] font-bold font-['Inter'] capitalize leading-tight">
                  Nika
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Congratulation;
