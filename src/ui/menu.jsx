import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function menu() {

    
  function openMenu() {
    document.body.classList.add("menu--open");
    window.scrollTo(0, 0)
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <>
      <nav className="nav__container">
        <div className="icon__container">
          <FontAwesomeIcon icon={faBars} onClick={openMenu} />
        </div>
        <img
          className="nav__logo--img"
          src="//images.squarespace-cdn.com/content/v1/6329a85f62c0ad5bc365ffea/9e014b31-629a-4555-a701-2213cb6204c7/fnblacklogo.png?format=1500w"
          alt="Fntastic"
        ></img>
      </nav>
      <div className="menu__backdrop">
        <button className="btn__menu btn__menu--close" onClick={closeMenu}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <ul className="menu__links">
          <li className="menu__list">
            <Link to="/" className="menu__link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="menu__list">
            <a to="/" className="menu__link not-allowed">
              About
            </a>
          </li>
          <li className="menu__list">
            <Link to="/thedaybefore" className="menu__link" onClick={closeMenu}>
              The Day Before
            </Link>
          </li>
          <li className="menu__list">
            <Link to="/" className="menu__link not-allowed">
              Propnight
            </Link>
          </li>
          <li className="menu__list">
            <Link to="/" className="menu__link not-allowed">
              The Wild Eight
            </Link>
          </li>
          <li className="menu__list">
            <Link to="/" className="menu__link not-allowed">
              Radiant One
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default menu;
