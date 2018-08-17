import ReactDOM from "react-dom";
import "./styles.css";
import React from "react";
import Card from "./card.js";
const Main = () => (
  <div>
    <Card
      CompanyName="CREDIT CARD"
      SerialNumberCard="1234 1234 1234 1234"
      NumberCard="1241"
      ValideDateCard="12/50"
      CardHolder="AYECH SALIM"
    />
  </div>
);
const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
