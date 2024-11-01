// import React from 'react'
import { Link } from "react-router-dom";
import { Blogs } from "../../interfaces";

function BlogCard({ blog, to }: { blog: Blogs, to?: string }) {

  return (
    <Link to={to ? to : `/blog/${blog._id}`}>
      <div className="flex h-full p-3 gap-5 flex-col items-start w-[100%] rounded-[12px] bg-[rgba(7,7,7,0.03)] relative">
        <div className="w-full">
          <img src={blog.thumbnail || ''} className="w-full h-[200px]" alt="" />
        </div>
        <div className="flex flex-col items-start gap-4 w-full  overflow-hidden">
          <div className="flex flex-col items-start gap-2 ">
            <p className="text-[20px] font-HelveticaNeueCyr font-[550] leading-[120%] tracking-[-0.5px] text-[#070707]"            >
              {blog.title}
            </p>
            <p dangerouslySetInnerHTML={{ __html: blog.content }} className="max-w-full font-inter leading-6 tracking-[-0.08px] text-[rgba(7,7,7,0.56)] text-ellipsis overflow-hidden line-clamp-1">
            </p>

          </div>
          <div className="flex justify-between w-full items-center">
            <div className="px-2 py-1 bg-[#5a40fe rounded-[34px] justify-center items-center gap-2.5 flex">
              <div className="text-white text-xs font-medium font-inter leading-[18px]">
                {/* #{blog.category}   */}
              </div>
            </div>
            <div className="text-right text-[#070707] text-sm font-normal font-inter leading-tight">
              {blog.createdAt?.split("T")[0]}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
