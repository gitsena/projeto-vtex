import React from "react";
import style from "./hero.module.scss";
import imgBanner from "../../../assets/img/rectangle-250.png";
import { Button } from "../../Button";

export const HeroHeader = () => {
  return (
    <div className={style.container}>
      <div className={style.imgBanner}>
        <img src={imgBanner} alt="bench with promotion" />
      </div>
      <article>
        <div>
          <h1>Venha conhecer nossas promoções</h1>
          <h2>50% Off nos produtos </h2>
        </div>
        <Button title={"Ver produto"} />
      </article>
    </div>
  );
};
