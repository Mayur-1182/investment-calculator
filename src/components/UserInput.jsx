import React, { useState } from "react";

export default function UserInput({ onChangeInput, userInput }) {
  return (
    <React.Fragment>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input
              type="number"
              required
              min="0"
              onChange={(e) =>
                onChangeInput("initialInvestment", e.target.value)
              }
              value={userInput.initialInvestment}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Annual Investment</label>
            <input
              type="number"
              required
              min="0"
              onChange={(e) =>
                onChangeInput("annualInvestment", e.target.value)
              }
              value={userInput.annualInvestment}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Expected Investment</label>
            <input
              type="number"
              required
              min="0"
              onChange={(e) => onChangeInput("expectedReturn", e.target.value)}
              value={userInput.expectedReturn}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Duration</label>
            <input
              type="number"
              required
              min="1"
              onChange={(e) => onChangeInput("duration", e.target.value)}
              value={userInput.duration}
            />
          </p>
        </div>
      </section>
    </React.Fragment>
  );
}
