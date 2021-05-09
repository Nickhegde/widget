import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ReactDOM from "react-dom";

import { fetchCards } from "./actions/index";

export default function CardContainer() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchCards(dispatch);
  }, []);

  return <div className="contextual-card-container">Card</div>;
}

window.ReactCounter = {
  mount: () => {
    if (!document.getElementById("show-card-widget")) return null;
    ReactDOM.render(
      <CardContainer />,
      document.getElementById("show-card-widget")
    );
  },
  unmount: () => {
    const el = document.getElementById("show-card-widget");
    ReactDOM.unmountComponentAtNode(el);
  },
};
