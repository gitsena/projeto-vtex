import React from "react";
import style from "./browseBrands.module.scss";
import { MarksItems } from "./MarksItems";
import btnNext from "../../assets/img/next.svg";

export const BrowseBrands = () => {
  return (
    <section className={style.browseBrands}>
      <h1>Navegue por marcas</h1>
      <div className={style.container}>
        {MarksItems.map((item) => {
          return (
            <div className={style.CardCircle} key={item.id}>
              <img className={style.iconTopic} src={item.src} alt={item.alt} />
            </div>
          );
        })}
        <img className={style.btnNext} src={btnNext} alt="button next" />
      </div>
    </section>
  );
};
