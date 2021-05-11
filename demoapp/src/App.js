import React, { useEffect, useState } from "react";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) {
      window.ReactCounter.mount();
      setIsMounted(false);
    } else return;
  }, [isMounted]);

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">fampay</h1>
        <img src={logo} className="app-logo" alt="logo" />
      </header>
      <div id="show-card-widget"></div>
    </div>
  );
}

export default App;
