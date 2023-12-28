import React, { useEffect, useState } from "react";
import Menu from "../ui/menu";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <div className="background__img--container">
        <Menu />
        <img
          className="background__img"
          src="https://images.squarespace-cdn.com/content/v1/600eda52bee0317870b69d97/1611586142173-VSM619CQJ13PTYFT3W0Q/key.jpg"
          alt=""
        />
        <div className="content__container">
          <h1 className="game__title">The Day Before</h1>
          <button className="game__btn">
            <Link to="/thedaybefore" className="btn__link">
              LEARN MORE
            </Link>
          </button>
        </div>
      </div>
      <div className="background__img--container-two">
        <img
          className="background__img"
          src="https://images.squarespace-cdn.com/content/v1/6329a85f62c0ad5bc365ffea/2f737526-3326-4801-bb04-5484b069dc5c/1438.png?format=2500w"
          alt=""
        />
        <div className="content__container">
          <h1 className="game__title">Propnight</h1>
          <button className="game__btn">
            <a href="#" className="btn__link not-allowed">
              LEARN MORE
            </a>
          </button>
        </div>
      </div>
      <div className="background__img--container-two">
        <img
          className="background__img"
          src="https://images.squarespace-cdn.com/content/v1/6329a85f62c0ad5bc365ffea/e9e4fa4d-d20a-4b96-9bd6-a56732a0bd17/ss_1cb7829c3ecfed1e410c18877c18380ada45709e.1920x1080.jpg?format=2500w"
          alt=""
        />
        <div className="content__container">
          <h1 className="game__title">The Wild Eight</h1>
          <button className="game__btn">
            <a href="#" className="btn__link not-allowed">
              LEARN MORE
            </a>
          </button>
        </div>
      </div>
      <div className="background__img--container-two">
        <img
          className="background__img"
          src="https://images.squarespace-cdn.com/content/v1/6329a85f62c0ad5bc365ffea/d8ce7a1c-841c-41f2-8193-3e64620232bd/ss_5f9def45306c0ed5af74545315fa981a4530cb9f.1920x1080.jpg?format=2500w"
          alt=""
        />
        <div className="content__container">
          <h1 className="game__title">Radiant One</h1>
          <button className="game__btn">
            <a href="#" className="btn__link not-allowed">
              LEARN MORE
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
