import {useState } from 'react';
import { DashNav, DeleteBlogPopup, BlogItem, SideNav } from '../components';

function BlogUpdate() {

  const [deletePopup, setDeletePopup] = useState(false)  

  return (
    <div className="h-[100vh] flex bg-[#f2f2f2]">
      <SideNav />
      <div className="flex h-[100vh]  w-[100%] flex-col">
        <DashNav /> 
        <BlogItem setDeletePopup={setDeletePopup} />
      </div>
      {
        deletePopup && <div className="w-[100vw] z-[100] h-[100vh] flex justify-center items-center absolute  bg-black/40 z-99">
          <DeleteBlogPopup setDeletePopup={setDeletePopup} />
        </div>
      }
    </div>
  )
}

export default BlogUpdate
