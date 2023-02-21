import { Link } from "react-router-dom";

import React from "react";
import Logo from "../../Assets/logo/logo.svg";
import User from "../../Assets/logo/user.svg";
import headerStyle from "../../Styles/HeaderStyle/headerStyle.module.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={headerStyle.header__father}>
          <div className={headerStyle.logo__father}>
            <img src={Logo} width={110} alt="" />
          </div>
          <nav className={headerStyle.navbar}>
            <ul className={headerStyle.nav__list}>
              <li>
                <Link to={"/home"} className={headerStyle.nav__link}>
                  Home
                </Link>
              </li>
              <li>
                <Link className={headerStyle.nav__link}>Serials</Link>
              </li>
              <li>
                <Link className={headerStyle.nav__link}>Popular movies</Link>
              </li>
              <li>
                <Link
                  to={"/action-movies-categories"}
                  className={headerStyle.nav__link}
                >
                  Action movies
                </Link>
              </li>
              <li>
                <Link
                  to={"/cartoons-categories"}
                  className={headerStyle.nav__link}
                >
                  Cartoons
                </Link>
              </li>
            </ul>
          </nav>
          <div className={headerStyle.search__father}>
            <Link to={"#"}>
              <i class="fa-solid fa-magnifying-glass"></i>
            </Link>
            <Link to={"#"}>
              <i class="fa-regular fa-heart"></i>
            </Link>
            <Link to={"#"}>
              <i class="fa-solid fa-gift"></i>
            </Link>
            <Link to={"#"}>
              <img
                className={headerStyle.user__img}
                src={User}
                alt="user.png"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
