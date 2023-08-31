import { Button } from "../../../../components/Button";
import style from "./newsNotification.module.scss";

export const NewsNotification = () => {
  return (
    <div className={style.card}>
      <div className={style.colText}>
        <h2>Cadastre-se e Receba nossas</h2>
        <h1>novidades e promoções</h1>
        <p>
          Excepteur sint occaecat cudatat non ent, sunt in
          <br /> culpa qui officia lorem ipsum
        </p>
      </div>

      <div className={style.colInput}>
        <input placeholder="Seu e-mail"></input>
        <Button title={"Ok"} className={style.btnOk} />
      </div>
    </div>
  );
};
