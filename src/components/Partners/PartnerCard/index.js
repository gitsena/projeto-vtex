import { Button } from "../../Button";
import style from "./partnerCard.module.scss";
import imgPartner from "../../../assets/img/image-45.png";

export const PartnerCard = ({ title, description }) => {
  return (
    <section className={style.container}>
      <div className={style.card}>
        <img
          className={style.imgPartner}
          src={imgPartner}
          alt="bench with promotion"
        />
        <div className={style.contentCard}>
          <div>
            <h2>{title}</h2>
            <p className={style.description}>{description}</p>
          </div>
          <Button title={"Confira"} className={style.btnCard}></Button>
        </div>
      </div>
    </section>
  );
};
