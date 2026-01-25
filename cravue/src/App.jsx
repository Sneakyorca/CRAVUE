import Navbar from "./Pages/components/Navbar";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Footer from "./Pages/components/Footer";
import Article from "./Pages/Article";
import About from "./Pages/About";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/components/NotFound";

function App() {
  const [navState, setNavState] = useState("");
  const location = useLocation();
  function toTop() {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    toTop();
  }, [location]);
  return (
    <>
      <Navbar navState={navState} setNavState={setNavState} />
      <Routes>
        <Route path="/" element={<Home navState={navState} />} />
        <Route path="/services" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Article />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
