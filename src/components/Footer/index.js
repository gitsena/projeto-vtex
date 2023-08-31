import style from "./footer.module.scss";

export default function Footer() {
  return (
    <div className={style.footer}>
      <span>
        Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas
        imagens são de propriedade de seus respectivos donos. É vedada a
        reprodução, total ou parcial, de qualquer conteúdo sem expressa
        autorização.
      </span>
    </div>
  );
}
