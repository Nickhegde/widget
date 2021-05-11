import React, { useContext } from "react";
import { CardContext } from "../../store/context";
import { redirect } from "../../common";
import "./BigCard.scss";

export default function BigCard() {
  const bigCard = useContext(CardContext).filter(
    (item) => item.design_type === "HC3"
  );

  return (
    <div className="big-card-container">
      {bigCard.map((cardObject, mainindex) => {
        return cardObject.cards.map((card, index) => {
          const { bg_color, bg_image, cta, description, title, name } = card;
          const { text, url, text_color } = cta[0];
          return (
            <div
              key={`${mainindex}-${index}`}
              className="big-card-wrapper"
              style={{
                backgroundColor: bg_color,
                backgroundImage: `url(${bg_image.image_url})`,
              }}
              onClick={() => {
                redirect(card.url);
              }}>
              <h3
                className="big-card-title"
                style={{
                  color: bg_color,
                }}>
                {title}
              </h3>
              <div className="big-card-name">{name}</div>
              <div className="big-card-description">{description}</div>
              <a
                className="big-card-btn"
                role="button"
                href={url}
                target="_blank"
                style={{
                  backgroundColor: cta[0].bg_color,
                  color: text_color,
                }}>
                {text}
              </a>
            </div>
          );
        });
      })}
    </div>
  );
}
