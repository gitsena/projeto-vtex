import React from "react";
import style from "./productModal.module.scss";
import { Button } from "../Button";
import { BoxContModal } from "./BoxCont";

export const ProductModal = ({ product, onClose }) => {
  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  return (
    <div className={style.modalBackground} onClick={handleBackgroundClick}>
      <div className={style.modalContent}>
        <div className={style.imgProductModal}>
          <img src={product.photo} alt={product.productName} />
        </div>
        <div className={style.infoProduct}>
          <span className={style.btnClose} onClick={onClose}></span>
          <h2>{product.productName}</h2>
          <p className={style.price}>Preço: R${product.price}</p>
          <p>{product.descriptionShort}</p>
          <a href=" ">{"Veja mais detalhes do produto >"}</a>
          <BoxContModal />
          <Button title={"Comprar"} className={style.btnProduct} />
        </div>
      </div>
    </div>
  );
};
