import React from "react";
import style from "./topic.module.scss";
import { TopicStoreItems } from "./TopicStoreItems";

export const TopicStore = () => {
  return (
    <section className={style.container}>
      {TopicStoreItems.map((item) => {
        return (
          <div className={style.containerCard}>
            <div className={style.smallCard} key={item.id}>
              <img className={style.iconTopic} src={item.src} alt={item.alt} />
            </div>
            <p>{item.topicName}</p>
          </div>
        );
      })}
    </section>
  );
};
