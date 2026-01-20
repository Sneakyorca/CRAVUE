import { Link, useLocation } from "react-router-dom";
const Navbar = ({ navState, setNavState }) => {
  function openNav() {
    navState === "open" ? setNavState("") : setNavState("open");
  }
  const location = useLocation();
  return (
    <nav className={`nav ${navState}`}>
      <img src="" alt="" />
      <ul className="menu">
        <button className="menu-icon" onClick={openNav}>
          <span></span>
          <span></span>
          <span></span>
        </button>
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
          <button>
            <Link to="/contact" className="contact-button">
              {location.pathname === "/" ? "Sign Up" : "Get In Touch"}{" "}
              <img src="" alt="" />
            </Link>
          </button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
