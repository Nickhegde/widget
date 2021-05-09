import React from "react";
import ReactDOM from "react-dom";

export default function FeedbackContainer() {
  return <div className="contextual-card-container">Feedback Card</div>;
}

window.ReactCounter = {
  mount: () => {
    if (!document.getElementById("show-card-widget")) return null;
    ReactDOM.render(
      <FeedbackContainer />,
      document.getElementById("show-feedback-widget")
    );
  },
  unmount: () => {
    const el = document.getElementById("show-feedback-widget");
    ReactDOM.unmountComponentAtNode(el);
  },
};
