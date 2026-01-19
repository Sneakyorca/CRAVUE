import Navbar from "./Pages/components/Navbar";
import Home from "./Pages/Home";
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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
