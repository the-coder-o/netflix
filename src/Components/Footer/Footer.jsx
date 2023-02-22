import "./footer.css";
import React from "react";
import links from "../../Assets/logo/logoLinks.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer__father">
          <ul className="footer__list">
            <li className="footer__list-item">
              <img src={links} alt="" />
            </li>
            <li className="nav__list-item">
              <Link className="footer__link" to={"/home"}>
                Audio and Subtitles
              </Link>
            </li>
            <li className="nav__list-item">
              <Link className="footer__link" to={"/home"}>
                Media Center
              </Link>
            </li>
            <li className="nav__list-item">
              <Link className="footer__link" to={"/home"}>
                Security
              </Link>
            </li>
            <li className="nav__list-item">
              <Link className="footer__link" to={"/home"}>
                Contact us
              </Link>
            </li>
            <li className="nav__list-item">
              <Link className="link__btn" to={"/home"}>
                Service Code
              </Link>
            </li>
            <li className="footer__list-item">
              <Link className="footer__link" to={"/home"}>
                © 1997-2023 Netflix, Inc. i-062d573a0ee099242
              </Link>
            </li>
          </ul>
          <ul className="footer__list">
            <li className="nav__list-item">
              <Link className="footer__link" to={"/home"}>
                Audio and Subtitles
              </Link>
            </li>
            <li className="nav__list-item">
              <Link className="footer__link" to={"/home"}>
                Media Center
              </Link>
            </li>
            <li className="nav__list-item">
              <Link className="footer__link" to={"/home"}>
                Security
              </Link>
            </li>
            <li className="nav__list-item">
              <Link className="footer__link" to={"/home"}>
                Contact us
              </Link>
            </li>
          </ul>
          <ul className="footer__list">
            <li className="nav__list-item">
              <Link className="footer__link" to={"/home"}>
                Audio and Subtitles
              </Link>
            </li>
            <li className="nav__list-item">
              <Link className="footer__link" to={"/home"}>
                Media Center
              </Link>
            </li>
            <li className="nav__list-item">
              <Link className="footer__link" to={"/home"}>
                Security
              </Link>
            </li>
            <li className="nav__list-item">
              <Link className="footer__link" to={"/home"}>
                Contact us
              </Link>
            </li>
          </ul>
          <ul className="footer__list">
            <li className="nav__list-item">
              <Link className="footer__link" to={"/home"}>
                Audio and Subtitles
              </Link>
            </li>
            <li className="nav__list-item">
              <Link className="footer__link" to={"/home"}>
                Media Center
              </Link>
            </li>
            <li className="nav__list-item">
              <Link className="footer__link" to={"/home"}>
                Security
              </Link>
            </li>
            <li className="nav__list-item">
              <Link className="footer__link" to={"/home"}>
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
