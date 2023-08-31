import style from "./footerHome.module.scss";
import iconFacebook from "../../../assets/img/facebook.svg";
import iconInstagram from "../../../assets/img/instagram.svg";
import iconYoutube from "../../../assets/img/youtube.svg";
import formPayment from "../../../assets/img/form-pay.svg";
import news from "../../../assets/img/news.png";

export default function FooterHome() {
  return (
    <div className={style.footerHome}>
      <div className={style.colContacs}>
        <div>
          <h4>SOBRE NÓS</h4>
          <p>
            Conheça <br /> COMO COMPRAR <br />
            Indicação e Desconto
          </p>
        </div>
        <div className={style.iconsContact}>
          <a href="https://pt-br.facebook.com/">
            <img src={iconFacebook} alt="facebook" />
          </a>
          <a href="https://www.instagram.com/">
            <img src={iconInstagram} alt="instagram" />
          </a>
          <a href="https://www.youtube.com/">
            <img src={iconYoutube} alt="youtube" />
          </a>
        </div>
      </div>

      <div className={style.infoFooter}>
        <h4>INFORMAÇÕES ÚTEIS</h4>
        <p>FALE CONOSCO</p>
        <p>DÚVIDAS </p>
        <p>Prazos de Entrega</p>
        <p>Formas de Pagamento</p>
        <p>Política de privacidade </p>
        <p>Trocas e Devoluções</p>
      </div>

      <div className={style.formPayment}>
        <h4>FORMAS DE PAGAMENTO</h4>
        <img src={formPayment} alt="form of payments" />
      </div>

      <div className={style.signUp}>
        <img src={news} alt="signUp" />
      </div>
    </div>
  );
}
