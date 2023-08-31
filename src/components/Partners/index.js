import { PartnerCard } from "./PartnerCard";
import { RelatedProductCard } from "./RelatedProductCard";
import style from "./partners.module.scss";

export const ContentCards = () => {
  return (
    <section className={style.container}>
      <div className={style.colPartner}>
        <PartnerCard
          title="Parceiros"
          description="Lorem ipsum dolor sit amet, consectetur<"
        />
        <PartnerCard
          title="Parceiros"
          description="Lorem ipsum dolor sit amet, consectetur<"
        />
      </div>

      <div className={style.title}>
        <span className={style.line} />
        <h3>Produtos relacionados</h3>
        <span className={style.line} />
      </div>
      <p className={style.showAll}>Ver Todos</p>

      <div className={style.colProduct}>
        <RelatedProductCard
          title="Produtos"
          description="Lorem ipsum dolor sit amet, consectetur<"
        />
        <RelatedProductCard
          title="Produtos"
          description="Lorem ipsum dolor sit amet, consectetur<"
        />
      </div>
    </section>
  );
};
