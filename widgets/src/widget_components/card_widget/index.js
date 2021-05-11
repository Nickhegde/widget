import React, { useEffect, useReducer, useState } from "react";
import ReactDOM from "react-dom";

import { INITIAL_STATE } from "./store/initialState";
import cardReducer from "./store/card_reducer";
import { getCards } from "./services";
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
  const { Provider } = CardContext;
  const [list, setList] = useState([]);

  useEffect(() => {
    getCards(dispatch, onSuccess);
  }, []);

  const onSuccess = () => {
    setList(state.CARD_LIST);
  };

  return (
    <Provider value={list}>
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
