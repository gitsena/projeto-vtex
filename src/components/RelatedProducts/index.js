import { RelatedTopicProduct } from "./RelatedTopic";
import style from "./relatedProducts.module.scss";

export const RelatedProducts = () => {
  return (
    <section className={style.container}>
      <div className={style.title}>
        <span className={style.line} />
        <h3>Produtos relacionados</h3>
        <span className={style.line} />
      </div>
      <RelatedTopicProduct />
    </section>
  );
};
