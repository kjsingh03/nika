import card from "../../utils/card";

// import React from 'react'
type proptype = {
  data: card;
};
function HomeCard(prop: proptype) {
  return (
    <>
      <div className="sm:p-6 p-4 flex items-start gap-4 flex-col rounded-[12px] bg-[#F6F6FD]">
        <div className="">
          <img src={prop.data.img} alt="Book" />
        </div>
        <div className="flex flex-col items-start gap-2">
          <div className="font-HelveticaNeueCyr sm:text-[28px] text-[20px] leading-[110%] tracking-[-1px] font-[550]  text-black">
            {prop.data.title}
          </div>
          <p className="sm:text-[16px] text-[14px] leading-6 tracking-[-0.08px] font-[400] text-[rgba(7,7,7,0.56)] font-inter">
            {prop.data.detail}
          </p>
        </div>
      </div>
    </>
  );
}

export default HomeCard;
