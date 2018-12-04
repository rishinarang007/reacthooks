import React, { useState } from "react";
import ReactDOM from "react-dom";
import UseStateApp from "./useState";
import "./styles.css";

function App() {
  return (
    <div className="App" id="apps">
      <UseStateApp />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
