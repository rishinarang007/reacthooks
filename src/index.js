import React, { useState } from "react";
import ReactDOM from "react-dom";
// import UseStateApp from "./useState";
// import LoginForm from "./LoginForm_multipleState";
import LoginForm from "./LoginForm_singleState";
import "./styles.css";

function App() {
  return (
    <div className="App" id="apps">
      <LoginForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
