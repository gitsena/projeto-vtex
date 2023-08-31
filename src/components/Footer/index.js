import style from "./footer.module.scss";
import imgFooter from "../../assets/img/group-831.svg";
export default function Footer() {
  return (
    <div className={style.footer}>
      <p>
        Copyright © 2023. Todos os direitos reservados. Todas as marcas e suas
        imagens são de propriedade de seus respectivos donos.
        <br /> É vedada a reprodução, total ou parcial, de qualquer conteúdo sem
        expressa autorização.
      </p>

      <img src={imgFooter} alt="logo marks" />
    </div>
  );
}
