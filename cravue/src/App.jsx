import Navbar from "./Pages/components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Pages/components/Footer";
import { useState } from "react";
function App() {
  const [navState, setNavState] = useState("");
  return (
    <>
      <Navbar navState={navState} setNavState={setNavState} />
      <Home navState={navState} />
      <Footer />
    </>
  );
}

export default App;
