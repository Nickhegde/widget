import React, { useContext, useState } from "react";
import LongPressable from "react-longpressable";
import { CardContext } from "../../store/context";
import { redirect } from "../../common";

import Bell from "../../assets/images/bell";
import Close from "../../assets/images/close";

import "./BigCard.scss";

export default function BigCard() {
  const [longPress, setLongPress] = useState(false);
  const bigCardValue = useContext(CardContext);
  const bigCardBlackList = bigCardValue.blackList
    ? [...bigCardValue.blackList]
    : [];
  let bigCard = bigCardValue.list.filter((item) => item.design_type === "HC3");

  if (bigCardBlackList.length && bigCard.length) {
    bigCard = bigCard.filter((item) => {
      item.cards.filter((card, index) => {
        if (bigCardBlackList.indexOf(item.id + "-" + index + "-HC3") === -1)
          return card;
      });
    });
  }

  const onLongPress = (e) => {
    if (!longPress) setLongPress(true);
    e.preventDefault();
    e.stopPropagation();
    return;
  };

  const onShortPress = (url) => {
    if (longPress) {
      setLongPress(false);
      return;
    }
    redirect(url);
  };

  const onRemind = (id, index) => {
    setLongPress(false);
    const payload = {
      id: id,
      index: index,
    };
    bigCardValue.onRemindLater(payload);
  };

  const onDismiss = (id, index) => {
    setLongPress(false);
    const payload = id + "-" + index + "-HC3";
    bigCardValue.onRemove(payload);
  };

  const onContextMenuClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    return false;
  };

  if (!bigCard.length) return null;
  return (
    <div
      className="big-card-container"
      id="big-card"
      onContextMenu={onContextMenuClick}>
      {bigCard.map((cardObject, mainindex) => {
        const { id, cards } = cardObject;
        return cards.map((card, index) => {
          const { bg_color, bg_image, cta, description, title, name } = card;
          const { text, url, text_color } = cta[0];
          return (
            <LongPressable
              key={`${mainindex}-${index}`}
              Class="test"
              style={{ maxWidth: "320px", overflowX: "hidden" }}
              onShortPress={() => onShortPress(card.url)}
              onLongPress={onLongPress}
              longPressTime={700}>
              <div className={`${longPress ? "show" : ""} action-container`}>
                <div
                  className="reminder-btn"
                  onClick={() => onRemind(id, index)}>
                  <Bell></Bell>
                  <p className="btn-label">remind later</p>
                </div>
                <div className="close-btn" onClick={() => onDismiss(id, index)}>
                  <Close></Close>
                  <p className="btn-label">dismiss now</p>
                </div>
              </div>
              <div
                className={`big-card-wrapper ${longPress ? "slide-out" : ""}`}
                style={{
                  backgroundColor: bg_color,
                  backgroundImage: `url(${bg_image.image_url})`,
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
                  onClick={(e) => e.stopPropagation()}
                  href={url}
                  target="_blank"
                  style={{
                    backgroundColor: cta[0].bg_color,
                    color: text_color,
                  }}>
                  {text}
                </a>
              </div>
            </LongPressable>
          );
        });
      })}
    </div>
  );
}
