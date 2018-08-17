import React from "react";
import "./styles.css";
const Creditcart = props => (
  <div className="credit-cart">
    <h1 className="Creditname"> {props.CompanyName}</h1>
    <div className="card-puce" />
    <h1 className="card-serial-number">{props.SerialNumberCard}</h1>
    <div className="card-date">
      <p className="card-number">
        <strong> {props.NumberCard} </strong>
      </p>
      <p className="card-validate">
        <strong>{props.ValideDateCard} </strong>
      </p>
    </div>
    <p className="card-Holder">
      <strong>{props.CardHolder}</strong>
    </p>
    <div className="credit-icon">
      <img src="https://i.ebayimg.com/images/g/oLoAAOxyzHxRKY87/s-l50.jpg" />
    </div>
  </div>
);
export default Creditcart;
