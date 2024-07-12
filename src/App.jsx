import React, { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

export default function App() {
  function handlerChange() {}

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handlerChange(inputIdentifier, newValue) {
    setUserInput((prev) => {
      return {
        ...prev,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <div>
      <Header />
      <UserInput onChangeInput={handlerChange} userInput={userInput} />
      <Results input={userInput} />
    </div>
  );
}
