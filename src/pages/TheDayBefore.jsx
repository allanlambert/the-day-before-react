import React from "react";
import "../thedaybefore.css";
import Menu from "../ui/menu";
import video from "../assets/The Day Before Official Gameplay Overview and Early Access Release Date Trailer.mp4";
import Nav from "../components/Nav";

function TheDayBefore() {
  return (
    <>
      <section id="home-page">
        <Nav />
        <Menu />
        <div className="background__img--container">
          <img
            className="background__img"
            src="https://images.squarespace-cdn.com/content/v1/600eda52bee0317870b69d97/1611586142173-VSM619CQJ13PTYFT3W0Q/key.jpg"
            alt=""
          />
        </div>
        <div className="container">
          <div className="content__wrapper">
            <img
              className="content__img"
              src="https://images.squarespace-cdn.com/content/v1/600eda52bee0317870b69d97/1611682689043-0YSESNPQZUU7GM4Z8OX8/450.png?format=1000w"
              alt=""
            />
            <span className="content__trailer--text">OFFICIAL TRAILER</span>
            <video className="content__trailer" controls>
              <source src={video} type="video/mp4" />
            </video>
            <span className="content__date">DECEMBER 7</span>
            <a
              href="https://store.steampowered.com/app/1372880/The_Day_Before/"
              target="_blank"
              className="content__button"
            >
              ADD TO WISHLIST
            </a>
            <ul className="links__wrapper">
              <li>
                <a href="https://discord.com/invite/Z6Yyba7XY7" target="_blank">
                  <i className="fab fa-discord icon"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter icon" target="_blank"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram icon" target="_blank"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f icon" target="_blank"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-youtube icon" target="_blank"></i>
                </a>
              </li>
            </ul>
            <figure className="sponsor__wrapper">
              <img
                className="nvidia__sponsor"
                src="https://images.squarespace-cdn.com/content/v1/600eda52bee0317870b69d97/b0b62dab-72b6-4183-832f-b78b7598b480/nvidia.png?format=750w"
                alt=""
              />
              <img
                className="unreal__sponsor"
                src="https://images.squarespace-cdn.com/content/v1/600eda52bee0317870b69d97/b21b22bd-1b9a-43d8-8ff1-afce81fe562b/ue-logo-stacked-unreal-engine-w-677x545-fac11de0943f.png?format=750w"
                alt=""
              />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}

export default TheDayBefore;
