import React from "react";
import investmentImg from "../assets/investment-calculator-logo.png";

export default function Header(props) {
  return (
    <React.Fragment>
      <header id="header">
        <img src={investmentImg} alt="investment calculator image" />
        <h1>Investment Calculator</h1>
      </header>
    </React.Fragment>
  );
}
