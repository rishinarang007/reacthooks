import React, { useState, useEffect } from "react";

const UseStateApp = () => {
  const [count, setCount] = useState(0);
  const [isOn, setOn] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(
    () => {
      document.getElementById(
        "countDiv"
      ).innerHTML = `you have clicked ${count} times`;

      window.addEventListener("mousemove", handlemouseMove);

      return () => {
        window.removeEventListener("mousemove", handlemouseMove);
      };
    },
    [count]
  );

  const handlemouseMove = event => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY
    });
  };

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const toggleLight = () => {
    setOn(xxx => !xxx);
  };

  return (
    <>
      <button onClick={increment}>Click this button {count}</button>
      <div id="countDiv" />
      <h2>Toggle Light</h2>
      <img
        src={
          isOn
            ? "https://icon.now.sh/highlight/fd0"
            : "https://icon.now.sh/highlight/aaa"
        }
        style={{
          height: "50px",
          width: "50px"
        }}
        onClick={toggleLight}
      />
      <h2>Mouse Position</h2>
      {JSON.stringify(mousePosition, null, 2)}
    </>
  );
};

export default UseStateApp;
