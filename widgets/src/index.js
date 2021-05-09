import React from "react";
import ReactDOM from "react-dom";
import { Provider, useDispatch } from "react-redux";
import store from "./widget_components/card_widget/card_store";
import { CardContainer, FeedbackContainer } from "./widget_components";

const HelloWorld = () => {
  return (
    <Provider store={store}>
      <div className="widget-container">
        <h1>Hello World</h1>
        <CardContainer />
        <FeedbackContainer />
      </div>
    </Provider>
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
