import "./NavMenuStyle.css";
const NavMenu = () => {
  return (
    <nav className="nav-menu-outer-container">
      <ul className="nav-menu-links">
        <li className="menu-link">About</li>
        <hr className="menu-underline" />
        <li className="menu-link">Discover</li>
        <hr className="menu-underline" />
        <li className="menu-link">Get Started</li>
      </ul>
    </nav>
  );
};

export default NavMenu;
