import React from "react";
import style from "./searchBar.module.scss";
import magnifyingGlass from "../../../../assets/img/magnifying-glass.svg";

export const SearchBarHeader = () => {
  return (
    <div className={style.searchBar}>
      <input type="text" placeholder="O que você está buscando?" />
      <img src={magnifyingGlass} alt="icon magnifying glass" />
    </div>
  );
};
