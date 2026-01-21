import { Link } from "react-router-dom";
import logo from "./../../assets/logo.png";
const Footer = () => {
  return (
    <footer>
      <h2>
        <img src={logo} alt="" width="43px" />
        <span> CRAVUE</span>
      </h2>
      <p>CRAVUE - Precision, Creativity, Value.</p>
      <p>cravue@gmail.com</p>
      <div className="links">
        <div className="social">
          <h3>Social</h3>
          <ul>
            <li>
              <a href="">Instagram</a>
            </li>
            <li>
              <a href="">LinkedIn</a>
            </li>
            <li>
              <a href="">Twitter</a>
            </li>
            <li>
              <a href="">Facebook</a>
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
