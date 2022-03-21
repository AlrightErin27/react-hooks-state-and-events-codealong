import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);
  function handleClick() {
    setIsOn((isOn) => !isOn);
  }
  console.log(`is on? ${isOn}`);

  const color = isOn ? "blue" : "pink";
  const textColor = isOn ? "white" : "black";
  return (
    <button
      onClick={handleClick}
      style={{
        background: color,
        color: textColor,
        fontSize: "3rem",
        width: "8rem",
      }}
    >
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
