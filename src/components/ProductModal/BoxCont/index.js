import React, { useState } from "react";
import style from "./boxCont.module.scss";

export const BoxContModal = () => {
  const [value, setValue] = useState(1);

  const incrementValue = () => {
    setValue(value + 1);
  };

  const decrementValue = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  return (
    <div className={style.boxCont}>
      <button className={style.btnMine} onClick={decrementValue}>
        -
      </button>
      <span className={style.boxValue}>{value}</span>
      <button className={style.btnMine} onClick={incrementValue}>
        +
      </button>
    </div>
  );
};
