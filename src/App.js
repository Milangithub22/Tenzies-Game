/* eslint-disable no-use-before-define */
import React from "react";
import "./App.css";
import Die from "./Die";
import { useState } from "react";

function App() {
  const [element, setElement] = useState(allNewDice());

  function allNewDice() {
    const newDice = [];

    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice;
  }

  const DieElement = element.map((item) => <Die value={item} />);

  return (
    <div className="container_main">
      <div className="game_background">
        <div className="text_container">
          <h1>Tenzies</h1>
          <p>
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </p>
        </div>
        <div className="dir_container">{DieElement}</div>
      </div>
    </div>
  );
}

export default App;
