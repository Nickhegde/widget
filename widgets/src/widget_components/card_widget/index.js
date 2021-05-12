import React, { useEffect, useReducer, useState } from "react";
import ReactDOM from "react-dom";

import { INITIAL_STATE } from "./store/initialState";
import cardReducer from "./store/card_reducer";
import { getCards } from "./services";
import { remindCard } from "./store/action";
import {
  BigCard,
  ImageCard,
  ScrollCard,
  SmallCardWithArrow,
  SmallCardScrollable,
  SmallCardNonScrollable,
} from "./components";
import { CardContext } from "./store/context";

export default function CardWidget() {
  const [state, dispatch] = useReducer(cardReducer, INITIAL_STATE);
  const [blackList, setBlackList] = useState(
    JSON.parse(localStorage.getItem("blackList")) || []
  );
  const { Provider } = CardContext;
  const [list, setList] = useState([]);

  useEffect(() => {
    getCards(dispatch, onSuccess);
  }, []);

  const onSuccess = () => {
    setList([...state.CARD_LIST]);
  };

  const onRemindLater = (payload) => {
    remindCard(dispatch, payload, onSuccess);
  };

  const onRemove = (payload) => {
    let blackListIds = [...blackList];
    blackListIds.push(payload);
    localStorage.setItem("blackList", JSON.stringify(blackListIds));
    setBlackList(blackListIds);
  };

  return (
    <Provider
      value={{
        list: list,
        onRemindLater: onRemindLater,
        blackList: blackList,
        onRemove: onRemove,
      }}>
      <div className="card-widget-container">
        <BigCard />
        <SmallCardWithArrow />
        <ImageCard />
        <ScrollCard />
        <SmallCardScrollable />
        <SmallCardNonScrollable />
      </div>
    </Provider>
  );
}

window.ReactCounter = {
  mount: () => {
    if (!document.getElementById("show-card-widget")) return null;
    ReactDOM.render(
      <CardWidget />,
      document.getElementById("show-card-widget")
    );
  },
  unmount: () => {
    const el = document.getElementById("show-card-widget");
    ReactDOM.unmountComponentAtNode(el);
  },
};
