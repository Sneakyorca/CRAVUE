import { Link } from "react-router-dom";
import logo from "./../../assets/logo.svg";
const Footer = () => {
  return (
    <footer>
      <div className="info">
        <h2>
          <img src={logo} alt="" width="43px" />
          <span> CRAVUE</span>
        </h2>
        <p>CRAVUE - Precision, Creativity, Value.</p>
        <a className="cravuelink" href="mailto:cravue@gmail.com">
          cravue@gmail.com
        </a>
      </div>
      <div className="links">
        <div className="social">
          <h3>Social</h3>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/cravuehq?igsh=ejl1ejh5YTEwZHVw"
                target="_blank"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/cravue-hq/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/@cravuehq?si=jH_RwJ25m6q4km9F"
                target="_blank"
              >
                Youtube
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/share/1GQzkU3bFX/"
                target="_blank"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
        <div className="pages">
          <h3>Pages</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <a href="https://tally.so/r/w77g9A" target="_blank">
                Lead capture forms
              </a>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
