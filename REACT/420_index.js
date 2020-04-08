import React from "react";
import "./styles.css";

const date = new Date();
const time = date.getHours();

let customStyle = {
  color: ""
};

let greeting = "";

if (time < 12) {
  customStyle.color = "red";
  greeting = "Good Morning";
} else if (time < 18) {
  customStyle.color = "green";
  greeting = "Good Afternoon";
} else {
  customStyle.color = "blue";
  greeting = "Good Evening";
}

export default function App() {
  return (
    <div className="App">
      <h1 style={customStyle}>{greeting}</h1>
    </div>
  );
}
