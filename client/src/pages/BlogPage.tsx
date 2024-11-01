import { useParams } from "react-router-dom";
import { BreadCrumb, Signup } from "../components";
// import { al1, al2, al3, al4, mailWhite, } from "../assets";
import { useEffect, useState } from "react";
import { Blogs } from "../interfaces";
import axios from "axios";

function BlogPage() {

  const { id} = useParams();

  const [blog,setBlog] = useState<Blogs>({ thumbnail: "",    title: "",  category: "",    createdAt:  "", readLength: "", author: "",  updatedAt: "",    _id: "",    content: ""})

  const fetchBlog = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/blogs/${id}`);
      setBlog(res.data.blog);

    } catch (e: any) {
      console.log(e)
    }
  }

  // const tags: string[] = [
  //   "All",
  //   "Tag",
  //   "DeFi Tutorials",
  //   "Insights",
  //   "Updates",
  //   "Investment Strategies",
  // ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    fetchBlog()
  },[]);

  return (
    <>
      <BreadCrumb />
      <div className="flex w-full justify-center lg:px-[80px]">
        <div className="w-[1200px] max-w-full lg:pt-8 lg:pb-[60px] lg:px-0 sm:p-[25px_40px] p-[25px_16px]">
          <div className="flex gap-8 justify-center items-start w-full">
            {/* <article className="w-[280px] lg:flex hidden flex-col p-4 bg-[#5B40FF] rounded-[6px] gap-6 ">
              <div className="pb-6 flex flex-col w-full gap-3 border-b-[1px] border-[rgba(255,255,255,0.20)]">
                <div className="text-white text-sm font-normal font-inter leading-tight">
                  Fast links
                </div>
                <div className="flex flex-col gap-3 pl-3">
                  <a href="#digital-finance" className="text-[rgba(255,255,255,0.72)] scroll-smooth text-sm font-normal font-inter leading-tight"> Navigating the Digital Finance Landscape</a>
                  <a href="#ledgers" className="text-[rgba(255,255,255,0.72)] scroll-smooth text-sm font-normal font-inter leading-tight"> From Ledgers to Leadership</a>
                  <a href="#digital-wave" className="text-[rgba(255,255,255,0.72)] scroll-smooth text-sm font-normal font-inter leading-tight"> The Digital Wave</a>
                  <a href="#advisor" className="text-[rgba(255,255,255,0.72)] scroll-smooth text-sm font-normal font-inter leading-tight"
                  > The Strategic Advisor                  </a>
                  <a href="#digital-finance" className="text-[rgba(255,255,255,0.72)] scroll-smooth text-sm font-normal font-inter leading-tight"
                  > Continuous Learning and Adaptation                  </a>
                  <a href="#digital-finance" className="text-[rgba(255,255,255,0.72)] scroll-smooth text-sm font-normal font-inter leading-tight"> Specialty Tax Incentives in Digital Transformation
                  </a>
                  <a href="#digital-finance" className="text-[rgba(255,255,255,0.72)] scroll-smooth text-sm font-normal font-inter leading-tight"> Integrating Specialty Tax Incentives into Business Strategy
                  </a>
                  <a href="#digital-finance" className="text-[rgba(255,255,255,0.72)] scroll-smooth text-sm font-normal font-inter leading-tight"> Challenges and Opportunities
                  </a>
                  <a href="#looking-ahead" className="text-[rgba(255,255,255,0.72)] scroll-smooth text-sm font-normal font-inter leading-tight"> Looking Ahead                  </a>
                </div>
              </div>
              <div className="h-[124px] flex-col justify-start items-start gap-2 inline-flex">
                <div className="text-white text-base font-semibold font-inter leading-tight">
                  Get productivity tips straight to your inbox
                </div>
                <div className="h-[34px] flex-col w-full justify-start items-start gap-1 flex">
                  <div className="h-[34px] pl-3 w-full pr-[7px] py-[5px] bg-white/20 rounded border border-white/30 justify-start items-center inline-flex"> <input
                    type="email" className="text-[rgba(255,255,255,0.72)] bg-[transparent] border-none outline-none w-full text-sm font-normal font-ibm leading-tight placeholder:text-[rgba(255,255,255,0.72)]" placeholder="Mail" /> <div className="w-5 h-5 relative">   <img src={mailWhite} alt="Mail" />{" "} </div>
                  </div>
                </div>
                <button className="h-[34px] w-full px-3 py-2.5 rounded text-center btn btn5 text-sm font-medium font-ibm leading-none flex-col justify-center items-center flex">
                  Subscribe
                </button>
              </div>
            </article> */}
            <div className="flex flex-col w-full gap-5 md:w-[876px]">
              <div className="w-full flex justify-center" id="digital-finance">
                <img src={blog.thumbnail || ''} className="w-full max-w-[876px] md:h-[387px" alt="" />
              </div>
              {/* <div
                id="#ledgers"
                className="px-2 w-fit py-1 bg-[#5a40fe] rounded-[34px] justify-center items-center gap-2.5 flex"
              >
                <div className="text-white text-xs font-medium font-inter leading-[18px]">
                  #{blog.category}
                </div>
              </div> */}
              <div className="text-[#070707] sm:text-[42px] text-[28px] font-HelveticaNeueCyr leading-[42px] font-[550]">
                {blog.title}
              </div>
              <div className="grid sm:grid-cols-4 grid-cols-1 gap-3">
                <div className="sm:col-span-2">
                  <div className="text-[rgba(0,0,0,0.56)] text-sm font-normal font-ibm leading-tight"> Author
                  </div>
                  <div className="text-black text-lg font-medium font-ibm leading-[25.20px]"> {blog.author}
                  </div>
                </div>
                {/* <div className="">
                  <div className="text-[rgba(0,0,0,0.56)] text-sm font-normal font-ibm leading-tight"> Read
                  </div>

                  <div className="text-black text-lg font-medium font-ibm leading-[25.20px]">{blog.readLength}
                  </div>
                </div> */}
                {/* <div className="">
                  <div className="text-[rgba(0,0,0,0.56)] text-sm font-normal font-ibm leading-tight"> Share
                  </div>
                  <div className="flex gap-1"> <img src={al1} alt="Link" /> <img src={al2} alt="Linkdin" /> <img src={al3} alt="Facebook" /> <img src={al4} alt="Twitter" />
                  </div>
                </div> */}
              </div>
              {/* <article className="w-full lg:hidden flex flex-col p-4 bg-[#5B40FF] rounded-[6px] gap-6 ">
                <div className="pb-6 flex flex-col w-full gap-3 border-b-[1px] border-[rgba(255,255,255,0.20)]">
                  <div className="text-white text-sm font-normal font-inter leading-tight"> Fast links
                  </div>
                  <div className="flex flex-col gap-3 pl-3"> <a
                    href="#digital-finance" className="text-[rgba(255,255,255,0.72)] scroll-smooth text-sm font-normal font-inter leading-tight" >   Navigating the Digital Finance Landscape
                  </a> <a
                    href="#ledgers" className="text-[rgba(255,255,255,0.72)] scroll-smooth text-sm font-normal font-inter leading-tight" >   From Ledgers to Leadership
                    </a> <a
                      href="#digital-wave" className="text-[rgba(255,255,255,0.72)] scroll-smooth text-sm font-normal font-inter leading-tight" >   The Digital Wave
                    </a> <a
                      href="#advisor" className="text-[rgba(255,255,255,0.72)] scroll-smooth text-sm font-normal font-inter leading-tight" >   The Strategic Advisor
                    </a> <a
                      href="#digital-finance" className="text-[rgba(255,255,255,0.72)] scroll-smooth text-sm font-normal font-inter leading-tight" >   Continuous Learning and Adaptation
                    </a> <a
                      href="#digital-finance" className="text-[rgba(255,255,255,0.72)] scroll-smooth text-sm font-normal font-inter leading-tight" >   Specialty Tax Incentives in Digital Transformation
                    </a> <a
                      href="#digital-finance" className="text-[rgba(255,255,255,0.72)] scroll-smooth text-sm font-normal font-inter leading-tight" >   Integrating Specialty Tax Incentives into Business
                      Strategy
                    </a> <a
                      href="#digital-finance" className="text-[rgba(255,255,255,0.72)] scroll-smooth text-sm font-normal font-inter leading-tight" >   Challenges and Opportunities
                    </a> <a
                      href="#looking-ahead" className="text-[rgba(255,255,255,0.72)] scroll-smooth text-sm font-normal font-inter leading-tight" >   Looking Ahead
                    </a>
                  </div>
                </div>
                <div className="h-[124px] flex-col justify-start items-start gap-2 inline-flex">
                  <div className="text-white text-base font-semibold font-inter leading-tight"> Get productivity tips straight to your inbox
                  </div>
                  <div className="h-[34px] flex-col w-full justify-start items-start gap-1 flex"> <div className="h-[34px] pl-3 w-full pr-[7px] py-[5px] bg-white/20 rounded border border-white/30 justify-start items-center inline-flex">   <input
                    type="email" className="text-[rgba(255,255,255,0.72)] bg-[transparent] border-none outline-none w-full text-sm font-normal font-ibm leading-tight placeholder:text-[rgba(255,255,255,0.72)]" placeholder="Mail" />   <div className="w-5 h-5 relative">     <img src={mailWhite} alt="Mail" />{" "}   </div> </div>
                  </div>
                  <button className="h-[34px] w-full px-3 py-2.5 rounded text-center btn btn5 text-sm font-medium font-ibm leading-none flex-col justify-center items-center flex"> Subscribe
                  </button>
                </div>
              </article> */}
              <div className="overflow-hidden flex flex-col items-center" dangerouslySetInnerHTML={{ __html: blog.content }}>
              </div>
              {/* <div className="xs:py-8 py-4 flex flex-col gap-4 w-full">
                <div className="text-[rgba(7,7,7,0.72)] text-base font-normal font-inter leading-normal tracking-[-0.08px]">
                  In an era where digital innovation reshapes landscapes
                  overnight, the finance sector is no exception. The swift
                  currents of digital transformation have not only
                  revolutionized the tools and platforms we rely on but have
                  also fundamentally altered the terrain in which Certified
                  Public Accountants (CPAs) operate.
                </div>
                <div className="p-6 rounded-[8px] border-[#8B73C6] border-l-[1px] bg-[#EEEAF7]">
                  <div className="text-[rgba(7,7,7,0.72)] xs:py-5 text-sm font-normal font-inter leading-tight"> Other major cryptocurrencies, including Ethereum (ETH) and
                    Solana (SOL), are also experiencing upward momentum as the
                    overall market capitalization of crypto assets climbs back
                    to $1.5 trillion. Experts suggest that the crypto market may
                    be entering a new phase of growth, with investors eyeing
                    long-term potential.
                  </div>
                </div>
                <div className="text-[rgba(7,7,7,0.72)] text-base font-normal font-inter leading-normal tracking-[-0.08px]">
                  As we delve into the heart of this evolution, it becomes
                  evident that CPAs and Fractional CFOs are at a pivotal
                  crossroads. The transition from traditional number crunching
                  to strategic advisory roles requires not just an acclimation
                  to new technologies but a deeper, more nuanced understanding
                  of the digital economy and its implications for businesses.
                </div>
                <div className="text-[rgba(7,7,7,0.72)] text-base font-normal font-inter leading-normal tracking-[-0.08px]">
                  This blog explores the transformation of their roles in the
                  digital finance era, highlighting the emerging challenges they
                  face, the opportunities that lie ahead, and the indispensable
                  need for continuous learning and adaptation. As finance
                  professionals navigate this new digital domain, their ability
                  to guide businesses through complex financial landscapes has
                  never been more critical.
                </div>
                <div className="w-[100%] article-tech h-[307px]" />
              </div>
              <div className="xs:py-8 py-4 flex flex-col gap-4 w-full">
                <div
                  className="text-[#070707] sm:text-[42px] text-[28px] font-HelveticaNeueCyr leading-[42px] font-[550]"
                  id="digital-wave"
                >
                  The Digital Wave
                </div>
                <div className="text-[rgba(7,7,7,0.72)] text-base font-normal font-inter leading-normal tracking-[-0.08px]">
                  The digital wave that swept across industries in the late 20th
                  and early 21st centuries brought with it a host of new
                  technologies that revolutionized how CPAs performed their
                  work. Software for accounting and tax preparation automated
                  many of the time-consuming tasks that had once been the
                  hallmark of the profession.
                </div>
                <div className="text-[rgba(7,7,7,0.72)] text-base font-normal font-inter leading-normal tracking-[-0.08px]">
                  This automation not only increased efficiency but also reduced
                  the margin for error in financial reporting. Moreover, the
                  internet facilitated instant access to financial data and
                  global communication, enabling CPAs to serve clients more
                  effectively and stay updated with real-time financial
                  information.
                </div>
                <div className="text-[rgba(7,7,7,0.72)] text-base font-normal font-inter leading-normal tracking-[-0.08px]">
                  As digital finance tools evolved, they began to offer more
                  than just operational efficiency. Advanced data analytics,
                  cloud computing, and artificial intelligence started to play
                  significant roles in financial decision-making. CPAs found
                  themselves at the intersection of finance and technology,
                  equipped with new tools that allowed them to provide insights
                  into financial forecasting, risk assessment, and strategic
                  planning. This transition demanded that CPAs acquire new
                  skills, including digital literacy and a deep understanding of
                  data analytics, to leverage these technologies fully.
                </div>
              </div>
              <div className="xs:py-8 py-4 flex flex-col gap-4 w-full">
                <div
                  className="text-[#070707] sm:text-[42px] text-[28px] font-HelveticaNeueCyr leading-[42px] font-[550]"
                  id="advisor"
                >
                  Integrating Specialty Tax Incentives into Business Strategy
                </div>
                <div className="text-[rgba(7,7,7,0.72)] text-base font-normal font-inter leading-normal tracking-[-0.08px]">
                  The integration of specialty tax incentives like the R&D tax
                  credit and the 179D deduction into a company's financial
                  strategy underscores the evolving role of CPAs. In the era of
                  digital finance, these professionals are tasked with
                  navigating a complex web of incentives that can significantly
                  impact a business's bottom line and its approach to innovation
                  and sustainability. The ability of CPAs to effectively manage
                  these incentives is indicative of their critical role in the
                  digital transformation of finance.
                </div>
                <div className="text-[rgba(7,7,7,0.72)] text-base font-normal font-inter leading-normal tracking-[-0.08px]">
                  Through their expertise in specialty tax incentives, CPAs are
                  uniquely positioned to guide businesses through the
                  intricacies of digital finance. This not only includes
                  maximizing tax benefits but also aligning financial strategies
                  with broader business objectives, from fostering innovation to
                  promoting sustainability. As the digital landscape continues
                  to evolve, the knowledge and skills of CPAs in managing
                  specialty tax incentives will remain invaluable to businesses
                  looking to thrive in an era of constant change.
                </div>
                <div className="w-[100%] article-tech h-[307px]" />
              </div>
              <form
                method="POST"
                className="xs:p-6 p-4 bg-[#070707] rounded-md flex-col justify-start items-start gap-2 inline-flex"
              >
                <div className="text-white text-base font-medium font-ibm leading-[17.92px]">
                  Subscribe for regular updates
                </div>
                <div className="justify-start items-center gap-1 w-full inline-flex xs:flex-row flex-col">
                  <div className="h-[34px] w-full px-3 py-[7px] bg-white/20 rounded border border-white/30 justify-start items-center gap-2.5 flex"> <input
                    type="email" placeholder="Your Email" className="border-none outline-none bg-[transparent] w-full text-[rgba(7,7,7,0.72)] text-sm font-normal font-ibm leading-tight" />
                  </div>
                  <button className="px-3 py-2.5 btn btn5 text-center text-sm font-medium font-ibm leading-none xs:w-fit w-full rounded flex-col justify-center items-center inline-flex"> Subscribe
                  </button>
                </div>
              </form>
              <div className="xs:py-8 py-4 flex flex-col gap-4 w-full">
                <div
                  className="text-[#070707] sm:text-[42px] text-[28px] font-HelveticaNeueCyr leading-[42px] font-[550]"
                  id="looking-ahead"
                >
                  Looking Ahead
                </div>
                <div className="text-[rgba(7,7,7,0.72)] text-base font-normal font-inter leading-normal tracking-[-0.08px]">
                  As we gaze into the future, it's clear that the role of CPAs
                  will continue to evolve. Technologies like blockchain and
                  machine learning promise to further transform financial
                  management and reporting. CPAs will need to navigate these
                  developments, integrating new tools into their practice and
                  advising clients on how to leverage these technologies
                  effectively. Additionally, as businesses increasingly
                  prioritize sustainability and social responsibility, CPAs will
                  likely play a crucial role in measuring and reporting on these
                  non-financial metrics.
                </div>
                <div className="text-[rgba(7,7,7,0.72)] text-base font-normal font-inter leading-normal tracking-[-0.08px]">
                  The future of the CPA profession is one of dynamic change and
                  opportunity. As digital finance continues to evolve, CPAs will
                  remain at the forefront, adapting to new technologies,
                  mastering emerging regulatory complexities, and guiding
                  businesses through the financial challenges of the 21st
                  century. The journey from traditional accountants to strategic
                  advisors in the digital age is just the beginning. The next
                  chapters will undoubtedly see CPAs continuing to innovate,
                  lead, and shape the future of business finance.
                </div>
              </div>
              <div className="xs:pt-8 pt-4 w-full flex flex-col gap-2.5">
                <div className="flex justify-between p-4 bg-[black] rounded-[6px]">
                  <div className="text-white text-lg font-medium font-ibm leading-[25.20px]"> Share this article
                  </div>
                  <div className="flex gap-1"> <div className="w-8 h-8 rounded-[6px] bg-[rgba(255,255,255,0.20)] flex justify-center items-center">   <img src={artSoc1} alt="Link" /> </div> <div className="w-8 h-8 rounded-[6px] bg-[rgba(255,255,255,0.20)] flex justify-center items-center">   <img src={artSoc2} alt="Linkedin" /> </div> <div className="w-8 h-8 rounded-[6px] bg-[rgba(255,255,255,0.20)] flex justify-center items-center">   <img src={artSoc3} alt="Facebook" /> </div> <div className="w-8 h-8 rounded-[6px] bg-[rgba(255,255,255,0.20)] flex justify-center items-center">   <img src={artSoc4} alt="Twitter" /> </div>
                  </div>
                </div>
                <form
                  method="POST"
                  className="xs:p-6 p-4 bg-[#070707] rounded-md flex-col justify-start items-start gap-2 inline-flex"
                >
                  <div className="text-white text-base font-medium font-ibm leading-[17.92px]"> Subscribe for regular updates
                  </div>
                  <div className="justify-start items-center gap-1 w-full inline-flex xs:flex-row flex-col"> <div className="h-[34px] w-full px-3 py-[7px] bg-white/20 rounded border border-white/30 justify-start items-center gap-2.5 flex">   <input
                    type="email" placeholder="Your Email" className="border-none outline-none bg-[transparent] w-full text-[rgba(7,7,7,0.72)] text-sm font-normal font-ibm leading-tight" /> </div> <button className="px-3 py-2.5 btn btn5 xs:w-fit w-full text-center text-sm font-medium font-ibm leading-none rounded flex-col justify-center items-center inline-flex">   Subscribe
                    </button>
                  </div>
                </form>
              </div>
              <article className="w-full lg:hidden flex flex-col gap-8 ">
                <div className="flex flex-col gap-3 w-full">
                  <div className="text-black text-xl font-HelveticaNeueCyr leading-normal"> Related articles
                  </div>
                </div>
                <div className="flex sm:flex-row flex-col gap-2">
                  <div className="p-4 bg-[#f4f3fd] rounded flex-col justify-start items-start gap-4 inline-flex"> <div className="flex-col justify-start items-start gap-3 flex">   <div
                    className="
    text-[rgba(0,0,0,0.80)] text-lg font-medium font-inter leading-[25.20px]"   >     Inspiring Conversations & Connections: Austin
                    Galentine's 2023 Recap
                  </div>   <div className="px-2 py-1 bg-[#5a40fe] rounded-[34px] justify-center items-center gap-2.5 inline-flex">     <div className="text-center text-white text-xs font-medium font-inter leading-[18px]">       #Updates
                  </div>   </div> </div>
                  </div>
                  <div className="p-4 bg-[#f4f3fd] rounded flex-col justify-start items-start gap-4 inline-flex"> <div className="flex-col justify-start items-start gap-3 flex">   <div
                    className="
    text-[rgba(0,0,0,0.80)] text-lg font-medium font-inter leading-[25.20px]"   >     Inspiring Conversations & Connections: Austin
                    Galentine's 2023 Recap
                  </div>   <div className="px-2 py-1 bg-[#5a40fe] rounded-[34px] justify-center items-center gap-2.5 inline-flex">     <div className="text-center text-white text-xs font-medium font-inter leading-[18px]">       #Updates
                  </div>   </div> </div>
                  </div>
                  <div className="p-4 bg-[#f4f3fd] rounded flex-col justify-start items-start gap-4 inline-flex"> <div className="flex-col justify-start items-start gap-3 flex">   <div
                    className="
    text-[rgba(0,0,0,0.80)] text-lg font-medium font-inter leading-[25.20px]"   >     Inspiring Conversations & Connections: Austin
                    Galentine's 2023 Recap
                  </div>   <div className="px-2 py-1 bg-[#5a40fe] rounded-[34px] justify-center items-center gap-2.5 inline-flex">     <div className="text-center text-white text-xs font-medium font-inter leading-[18px]">       #Updates
                  </div>   </div> </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="text-black text-xl font-HelveticaNeueCyr leading-normal"> Other categories
                  </div>
                  <div className="flex flex-wrap gap-1"> {tags.map((item, idx) => idx != 0 ? (<div
                    key={idx} className="px-2 py-1 bg-[#5a40fe] rounded-[34px] justify-center items-center gap-2.5 inline-flex"     >       <div className="text-center text-white text-xs font-medium font-inter leading-[18px]">         #{item}       </div>     </div>) : (<></>))}
                  </div>
                </div>
              </article> */}
            </div>
            {/* <article className="w-[280px] lg:flex hidden flex-col gap-8 ">
              <div className="flex flex-col gap-3 w-full">
                <div className="text-black text-xl font-HelveticaNeueCyr leading-normal">
                  Related articles
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="p-4 bg-[#f4f3fd] rounded flex-col justify-start items-start gap-4 inline-flex">
                  <div className="flex-col justify-start items-start gap-3 flex"> <div
                    className="
    text-[rgba(0,0,0,0.80)] text-lg font-medium font-inter leading-[25.20px]" >   Inspiring Conversations & Connections: Austin Galentine's
                    2023 Recap
                  </div> <div className="px-2 py-1 bg-[#5a40fe] rounded-[34px] justify-center items-center gap-2.5 inline-flex">   <div className="text-center text-white text-xs font-medium font-inter leading-[18px]">     #Updates
                  </div> </div>
                  </div>
                </div>
                <div className="p-4 bg-[#f4f3fd] rounded flex-col justify-start items-start gap-4 inline-flex">
                  <div className="flex-col justify-start items-start gap-3 flex"> <div
                    className="
    text-[rgba(0,0,0,0.80)] text-lg font-medium font-inter leading-[25.20px]" >   Inspiring Conversations & Connections: Austin Galentine's
                    2023 Recap
                  </div> <div className="px-2 py-1 bg-[#5a40fe] rounded-[34px] justify-center items-center gap-2.5 inline-flex">   <div className="text-center text-white text-xs font-medium font-inter leading-[18px]">     #Updates
                  </div> </div>
                  </div>
                </div>
                <div className="p-4 bg-[#f4f3fd] rounded flex-col justify-start items-start gap-4 inline-flex">
                  <div className="flex-col justify-start items-start gap-3 flex"> <div
                    className="
    text-[rgba(0,0,0,0.80)] text-lg font-medium font-inter leading-[25.20px]" >   Inspiring Conversations & Connections: Austin Galentine's
                    2023 Recap
                  </div> <div className="px-2 py-1 bg-[#5a40fe] rounded-[34px] justify-center items-center gap-2.5 inline-flex">   <div className="text-center text-white text-xs font-medium font-inter leading-[18px]">     #Updates
                  </div> </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-black text-xl font-HelveticaNeueCyr leading-normal">
                  Other categories
                </div>
                <div className="flex flex-wrap gap-1">
                  {tags.map((item, idx) => idx != 0 ? (<div
                    key={idx} className="px-2 py-1 bg-[#5a40fe] rounded-[34px] justify-center items-center gap-2.5 inline-flex"   >     <div className="text-center text-white text-xs font-medium font-inter leading-[18px]">       #{item}     </div>   </div>) : (<></>)
                  )}
                </div>
              </div>
            </article> */}
          </div>
        </div>
      </div>
      <div className="w-full lg:h-[75px] h-[25px]"></div>
      <Signup />
    </>
  );
}

export default BlogPage;
