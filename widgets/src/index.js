import React from "react";
import ReactDOM from "react-dom";
import { CardWidget, FeedbackWidget } from "./widget_components";

import "./App.scss";

const HelloWorld = () => {
  return (
    <div className="widget-container">
      <CardWidget />
      <FeedbackWidget />
    </div>
  );
};

ReactDOM.render(<HelloWorld />, document.getElementById("root"));

window.ReactCounter = {
  mount: () => {
    if (!document.getElementById("root-widget")) return null;
    ReactDOM.render(<HelloWorld />, document.getElementById("root-widget"));
  },
  unmount: () => {
    const el = document.getElementById("root-widget");
    ReactDOM.unmountComponentAtNode(el);
  },
};
