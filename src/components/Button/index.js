import style from "./button.module.scss";

export const Button = ({ className, title }) => {
  return <button className={`${style.btn} ${className}`}>{title}</button>;
};
