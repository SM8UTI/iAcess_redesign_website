import React from "react";
import { Link } from "react-router-dom";

const LogoName = "iAcess";

const MenuLinks = [
  {
    text: "D-U-N-S Registered Seal",
    link: "#",
  },
  {
    text: "Company Search",
    link: "#",
  },
  {
    text: "Prospects",
    link: "#",
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <span>{LogoName}</span>
        </div>
        <nav>
          <ul>
            {MenuLinks.map((elem, index) => (
              <li>
                <Link to={elem.link}>{elem.text}</Link>
              </li>
            ))}
          </ul>
          <button>Login</button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
