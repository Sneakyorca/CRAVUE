import { Link, useLocation } from "react-router-dom";
import logo from "./../../assets/logo.png";
import arrowup from "./../../assets/formkit_arrowup.svg";
const Navbar = ({ navState, setNavState }) => {
  function openNav() {
    navState === "open" ? setNavState("") : setNavState("open");
  }
  const location = useLocation();
  return (
    <nav className={`nav ${navState}`}>
      <div className="container">
        {" "}
        <ul className="menu">
          <img src={logo} alt="Logo" width="43px" />
          <button className="menu-icon" onClick={openNav}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </ul>
        <div className="nav-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Service</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          {location.pathname === "/" ? (
            <a
              href="https://tally.so/r/w77g9A"
              target="_blank"
              className="contact-button"
            >
              <span>Sign Up</span>
              <img src={arrowup} alt="Arrow Up" />
            </a>
          ) : (
            <Link to="/contact" className="contact-button">
              <span>Get In Touch</span>
              <img src={arrowup} alt="Arrow Up" />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
