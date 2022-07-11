import React from "react";
import "./App.css";
import Die from "./Die";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [element, setElement] = useState(allNewDice());

  function allNewDice() {
    const newDice = [];

    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: { nanoid },
      });
    }
    return newDice;
  }

  const DieElement = element.map((item) => (
    <Die
      key={item.id}
      value={item.value}
      isHeld={item.isHeld}
      holdDice={() => holdDice(item.id)}
    />
  ));

  function rollDice() {
    setElement(allNewDice());
  }

  function holdDice(id) {
    setElement((prev) =>
      prev.map((item) => {
        return item.id === id ? { ...item, isHeld: !item.isHeld } : item;
      })
    );
  }
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
        <div className="die_container">{DieElement}</div>

        <div className="rollButton_container">
          <button className="rollButton" onClick={rollDice}>
            Roll
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
