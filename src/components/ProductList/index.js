import React, { useState } from "react";
import { Product } from "../Product";
import productsData from "../../data/product.json";
import style from "./productList.module.scss";
import btnNext from "../../assets/img/next=arrow.svg";
import btnBack from "../../assets/img/back-arrow.svg";

export const ProductList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % productsData.products.length;
    setCurrentIndex(newIndex);
  };

  const handlePrev = () => {
    const newIndex =
      (currentIndex - 1 + productsData.products.length) %
      productsData.products.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className={style.container}>
      <div className={style.carousel}>
        <img
          src={btnBack}
          alt="button arrow back"
          onClick={handlePrev}
          className={style.carouselButton}
        ></img>
        <div className={style.carouselContent}>
          {productsData.products
            .slice(currentIndex, currentIndex + 4)
            .map((product) => (
              <Product key={product.productName} product={product} />
            ))}
        </div>
        <img
          src={btnNext}
          alt="button arrow next"
          onClick={handleNext}
          className={style.carouselButton}
        ></img>
      </div>
    </div>
  );
};
