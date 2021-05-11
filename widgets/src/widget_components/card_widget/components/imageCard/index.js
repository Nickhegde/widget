import React, { useContext } from "react";
import { CardContext } from "../../store/context";
import { redirect } from "../../common";

import "./ImageCard.scss";

export default function ImageCard() {
  const imageCard = useContext(CardContext).filter(
    (item) => item.design_type === "HC5"
  );

  return (
    <div className="image-card-container">
      {imageCard.map((cardObject, mainindex) => {
        return (
          <div
            key={mainindex}
            className="image-card-row-wrapper"
            style={{
              display: cardObject.is_scrollable ? "flex" : "block",
            }}>
            {cardObject.cards.map((card, index) => {
              const { bg_color, bg_image, name, url } = card;
              return (
                <div
                  className="image-card-wrapper"
                  key={`${mainindex}-${index}`}
                  style={{
                    backgroundColor: bg_color,
                  }}
                  onClick={() => {
                    redirect(url);
                  }}>
                  <img src={bg_image.image_url}></img>
                  <div className="image-card-info">{name}</div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
