import { useState } from "react";
import { close } from "../../assets";
type faqType = {
  ques: string;
  ans: string;
  checked: boolean;
};
function Faq() {
  const [faq, setFaq] = useState([
    {
      ques: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con",
      checked: true,
    },
    {
      ques: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con",
      checked: false,
    },
    {
      ques: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con",
      checked: false,
    },
    {
      ques: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con",
      checked: false,
    },
  ]);
  const faqHandle = (idx: number) => {
    const newFaq: faqType[] = faq.map((item, i) => {
      if (idx == i) {
        item.checked = !item.checked;
        return item;
      } else {
        item.checked = false;
        return item;
      }
    });
    setFaq(newFaq);
  };
  return (
    <>
      <div className="lg:p-[65px_80px_75px] xs:p-[25px_40px] p-[25px_16px] w-full flex justify-center">
        <div className="w-[1280px] max-w-full flex justify-center">
          <div className="flex flex-col xs:gap-5 gap-4 w-[600px] max-w-full items-center">
            <div className="text-[#070707] sm:text-[42px] text-[28px] font-['HelveticaNeueCyr'] leading-[42px] font-[550] tracking-[-2px] text-center">
              FAQ
            </div>
            <div className="flex flex-col w-full gap-2">
              {faq.map((faq, idx) => (
                <>
                  <div
                    className="flex flex-col gap-3 p-5 bg-[#F6F6FD] rounded-[12px]"
                    key={idx}
                  >
                    <div
                      className="flex w-full cursor-pointer items-center gap-0.5"
                      onClick={() => faqHandle(idx)}
                    >
                      <div className="w-full font-inter font-[500] leading-[140%] tracking-[-0.25px] text-[18px]">
                        {faq.ques}
                      </div>
                      <img src={close} alt="Close" />
                    </div>
                    {faq.checked ? (
                      <div className="font-inter text-base leading-6 tracking-[-0.08px] text-[rgba(7,7,7,0.72)]">
                        {faq.ans}
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </>
              ))}
            </div>
            <button className="h-[41px] xs:w-fit w-full px-4 btn btn3 py-[15px] text-center text-base font-medium font-ibm leading-[17.60px] rounded flex-col justify-center items-center inline-flex">
              Talk to an expert
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
