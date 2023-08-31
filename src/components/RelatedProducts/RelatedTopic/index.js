import React from "react";
import style from "./relatedTopics.module.scss";
import { RelatedTopicItems } from "./RelatedTopicItems";

export const RelatedTopicProduct = () => {
  return (
    <section className={style.container}>
      {RelatedTopicItems.map((item) => {
        return (
          <span className={style.grid}>
            <p>{item.topicName}</p>
          </span>
        );
      })}
    </section>
  );
};
