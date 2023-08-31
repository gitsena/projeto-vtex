import React from "react";
import style from "./promotion.module.scss";
import iconTruck from "../../../../assets/img/truck.svg";
import iconCard from "../../../../assets/img/credit-card.svg";
import iconShield from "../../../../assets/img/shield-check.svg";

export const PromotionHeader = () => {
  return (
    <section className={style.container}>
      <div>
        <img src={iconTruck} alt="icon truck" />
        <p>
          Compra<span>100% segura</span>
        </p>
      </div>
      <div>
        <img src={iconCard} alt="icon credit card" />
        <p>
          <span>Frete grátis</span> acima de R$ 200
        </p>
      </div>
      <div>
        <img src={iconShield} alt="icon shield with check" />
        <p>
          <span>Parcele</span> suas compras
        </p>
      </div>
    </section>
  );
};
