import React, { useState } from "react";
import { ProductModal } from "../ProductModal";
import style from "./product.module.scss";
import { Button } from "../Button";

export const Product = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div onClick={openModal} className={style.cardProduct}>
        <div>
          <img
            className={style.imgProduct}
            src={product.photo}
            alt={product.productName}
          />
        </div>
        <div className={style.info}>
          <h3>{product.productName}</h3>
          <div className={style.descriptionShort}>
            <h4>{product.descriptionShort}</h4>
            <h5>R$ 30,90</h5>
            <h2 className={style.price}>Preço: R${product.price}</h2>
            <p>ou 2x de R$ 49,95 sem juros</p>
            <div>
              <span>Frete grátis</span>
            </div>
          </div>
        </div>
        <div>
          <Button title={"Comprar"} className={style.btnProduct} />
        </div>
      </div>
      {isModalOpen && <ProductModal product={product} onClose={closeModal} />}
    </>
  );
};
