const Navbar = ({ navState, setNavState }) => {
  function openNav() {
    navState === "open" ? setNavState("") : setNavState("open");
  }
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
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Service</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <button>Get In Touch</button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
