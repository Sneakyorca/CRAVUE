import Navbar from "./Pages/components/Navbar";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Footer from "./Pages/components/Footer";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
function App() {
  const [navState, setNavState] = useState("");
  return (
    <>
      <Navbar navState={navState} setNavState={setNavState} />
      <Routes>
        <Route path="/" element={<Home navState={navState} />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
