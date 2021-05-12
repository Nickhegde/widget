import React, { useContext } from "react";
import { CardContext } from "../../store/context";
import { redirect } from "../../common";

import "./ScrollCard.scss";

export default function ScrollCard() {
  const scrollCard = useContext(CardContext).list.filter(
    (item) => item.design_type === "HC9"
  );

  return (
    <div className="scroll-card-container">
      {scrollCard.map((cardObject, mainindex) => {
        let { height } = cardObject;
        return (
          <div
            className="scroll-card-row-wrapper"
            key={mainindex}
            style={
              {
                // height: `${height}px`,
              }
            }>
            {cardObject.cards.map((card, index) => {
              const { bg_image, url } = card;
              const { image_url, image_type } = bg_image;
              return (
                <div
                  className="scroll-card-wrapper"
                  key={`${mainindex}-${index}`}
                  onClick={() => {
                    redirect(url);
                  }}>
                  {image_url ? (
                    <img className="image-container" src={image_url}></img>
                  ) : (
                    <div className="image-div-container"></div>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
