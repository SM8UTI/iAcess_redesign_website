import React, { useState } from "react";
import { Link } from "react-router-dom";

const LogoName = "iAcess Database";

const MenuLinks = [
  {
    text: "D-U-N-S Registered Seal",
    link: "#",
  },
  {
    text: "Company Search",
    link: "/search",
  },
  {
    text: "Prospects",
    link: "#",
  },
];

const Header = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="header">
      <div className="container max">
        <Link to={"/"} className="logo">
          <span>{LogoName}</span>
        </Link>
        <nav className={active ? "active" : " "}>
          <ul>
            {MenuLinks.map((elem, index) => (
              <li>
                <Link to={elem.link}>{elem.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="btn-groups">
          <button className="btn-s">Login</button>
          <button className="tools-ham">
            <div
              className={active ? `hamBurger hamBurger-active` : `hamBurger`}
              onClick={() => setActive(!active)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className="text">Tools</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
