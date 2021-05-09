import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store";
import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    setInterval(() => {
      window.ReactCounter.mount();
    }, 0);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
        {/* <div id="show-card-widget"></div> */}
        <div id="root-widget"></div>
      </header>
    </div>
  );
}

export default App;
