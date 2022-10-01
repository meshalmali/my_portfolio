import React, { useState } from "react";
import "./Navbar.css";
import { menuItems } from "./menuItems";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-scroll";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const closeMobileMenu = () => {
    setClicked(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar_container">
        <a
          href="https://in.linkedin.com/in/shalmali-bhave-601113163"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/meee.jpg" className="navbar_logo" />
        </a>
        <a
          href="https://in.linkedin.com/in/shalmali-bhave-601113163"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>Shalmali Bhave</h3>
        </a>

        <div className="navbar_icon" onClick={handleClick}>
          {clicked ? <CloseIcon /> : <MenuIcon />}
        </div>
        <ul className={clicked ? "navbar_menu active" : "navbar_menu"}>
          {menuItems.map((item, index) => {
            return (
              <li key={index} className="navbar_item">
                <Link
                  to={item.url}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="navbar_links"
                  onClick={closeMobileMenu}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
