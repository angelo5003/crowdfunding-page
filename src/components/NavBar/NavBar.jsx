import { useState } from "react";
import "./NavBarStyle.css";
import CompanyLogo from "../../assets/images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import NavMenu from "../NavMenu/NavMenu";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleShowMenu = () => {
    setOpenMenu(!openMenu);
    console.log(`you have clicked on the mobile btn`);
  };
  return (
    <header className="nav-outer-container">
      <nav className="nav-inner-container">
        <Link to="/">
          <img
            src={CompanyLogo}
            alt="company-logo"
            className="company-nav-logo"
          />
        </Link>
        {openMenu ? (
          <button onClick={handleShowMenu} className="mobile-menu-btn">
            <AiOutlineClose />
          </button>
        ) : (
          <button onClick={handleShowMenu} className="mobile-menu-btn">
            <GiHamburgerMenu />
          </button>
        )}

        {openMenu ? <NavMenu /> : null}
      </nav>
    </header>
  );
};

export default NavBar;
