import { useState } from "react";
import { useWindowSize } from "../hooks/useWindowSize";

const Navbar = () => {
  const { windowSize: size } = useWindowSize();
  return (
    <header className="nav">
      <nav className="nav__container">
        <h1 className="nav__logo">Saasly</h1>
        {size.width > 768 ? <DesktopNav /> : <MobileNav />}
      </nav>
    </header>
  );
};

const DesktopNav = () => {
  return (
    <div className="nav__desktop">
      <ul className="nav__desktop-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Jobs</a>
        </li>
        <li>
          <a href="#">Pages</a>
        </li>
      </ul>
      <div>
        <button className="nav__desktop-sign_in">Sign in</button>
        <button className="nav__desktop-sign_up">Sign Up</button>
      </div>
    </div>
  );
};

const MobileNav = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="nav__mobile">
      <div
        className="nav__hamburger"
        onClick={() => setIsMobileNavOpen((prev) => !prev)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul
        className={`${
          isMobileNavOpen ? "nav__mobile-links open" : "nav__mobile-links"
        }`}
      >
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Jobs</a>
        </li>
        <li>
          <a href="#">Pages</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
