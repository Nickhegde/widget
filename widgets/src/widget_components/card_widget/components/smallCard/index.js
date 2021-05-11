import React, { useContext } from "react";
import { CardContext } from "../../store/context";
import { Card } from "./components";
import { redirect } from "../../common";

import Arrow from "../../assets/images/arrow";

import "./SmallCard.scss";

export function SmallCardWithArrow() {
  const cardArray = useContext(CardContext).filter(
    (item) => item.design_type === "HC6"
  );

  return (
    <div className="small-card-arrow-container">
      {cardArray.map((cardObject, mainindex) => {
        return cardObject.cards.map((card, index) => {
          const { icon, title, name, url } = card;
          const { image_url } = icon;
          return (
            <div
              className="small-card-arrow-wrapper"
              key={`${mainindex}-${index}`}
              onClick={() => {
                redirect(url);
              }}>
              <Card image={image_url} title={title} name={name} />
              <Arrow></Arrow>
            </div>
          );
        });
      })}
    </div>
  );
}

export function SmallCardScrollable() {
  const cardArray = useContext(CardContext).filter(
    (item) => item.design_type === "HC1" && item.is_scrollable === false
  );

  return (
    <div className="small-card-scroll-container">
      {cardArray.map((cardObject, mainindex) => {
        return cardObject.cards.map((card, index) => {
          const { icon, title, name, url, bg_color } = card;
          const { image_url } = icon;
          return (
            <div
              className="small-card-scroll-wrapper"
              key={`${mainindex}-${index}`}
              style={{
                backgroundColor: bg_color,
              }}
              onClick={() => {
                redirect(url);
              }}>
              <Card image={image_url} title={title} name={name} />
            </div>
          );
        });
      })}
    </div>
  );
}

export function SmallCardNonScrollable() {
  const cardArray = useContext(CardContext).filter(
    (item) => item.design_type === "HC6" && item.is_scrollable === false
  );

  return (
    <div className="small-card-non-scroll-container">
      {cardArray.map((cardObject, mainindex) => {
        return cardObject.cards.map((card, index) => {
          const { icon, title, name, url, bg_color } = card;
          const { image_url } = icon;
          return (
            <div
              className="small-card-non-scroll-wrapper"
              key={`${mainindex}-${index}`}
              style={{
                backgroundColor: bg_color,
              }}
              onClick={() => {
                redirect(url);
              }}>
              <Card image={image_url} title={title} name={name} />
            </div>
          );
        });
      })}
    </div>
  );
}
