import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Alert, Congratulation, Footer, Navbar } from "./components";
import { About, AddBlog, ArticlePage, Blog, BlogUpdate, Dashboard, Error404, Home, Privacy, Terms, Waitlist, WebApp, } from "./pages";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setBlogs } from './store/slices';
import { RootState } from './store/store';
import { Blogs } from "./interfaces";

function App() {

  const dispatch = useDispatch();

  const blogs: Blogs[] = useSelector((state: RootState) => state.main.blogs);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/blogs`);
      dispatch(setBlogs(res.data.blogs));
    } catch (e: any) {
      console.log(e)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchBlogs()
  }, [])

  const tags: string[] = [
    "All",
    "Tag",
    "DeFi Tutorials",
    "Insights",
    "Updates",
    "Investment Strategies",
  ];

  const [congrats, setCongrats] = useState(false);

  const alert = useSelector((state: RootState) => state.ui.alert);

  return (
    <>
      {congrats && <Congratulation setCongrats={setCongrats} />}
      
      {alert.message && <Alert />}

      <div className={`${congrats && "h-screen overflow-auto"}`}>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<><Navbar /><Home congrats={congrats} setCongrats={setCongrats} /><Footer /> </>} />
            <Route path="/about" element={<><Navbar /><About /><Footer /> </>} />
            <Route path="/blog" element={<><Navbar /><Blog blogs={blogs} tags={tags} /><Footer /> </>} />
            <Route path="/blog/:id" element={<><Navbar /><ArticlePage /><Footer /> </>} />
            <Route path="/privacy" element={<><Navbar /><Privacy /><Footer /> </>} />
            <Route path="/terms" element={<><Navbar /><Terms /><Footer /> </>} />
            <Route path="/waitlist" element={<><Navbar /><Waitlist congrats={congrats} setCongrats={setCongrats}/><Footer /> </>} />
            <Route path="/webapp" element={<><Navbar /><WebApp /><Footer /> </>} />
            <Route path="/dashboard" element={<><Dashboard /> </>} />
            <Route path="/add" element={<><AddBlog /> </>} />
            <Route path="/blogs/:id" element={<><BlogUpdate /></>} />
            <Route path="*" element={<><Navbar /><Error404 /><Footer /> </>} />
          </Routes>

        </BrowserRouter>

      </div>
    </>
  );
}

export default App;
