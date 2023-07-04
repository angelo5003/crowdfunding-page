import "./NavMenuStyle.css";
import { Link } from "react-router-dom";
const NavMenu = () => {
  return (
    <nav className="nav-menu-outer-container">
      <ul className="nav-menu-links">
        <Link to="about" className="menu-link">
          About
        </Link>
        <hr className="menu-underline" />
        <li className="menu-link">Discover</li>
        <hr className="menu-underline" />
        <li className="menu-link">Get Started</li>
      </ul>
    </nav>
  );
};

export default NavMenu;
