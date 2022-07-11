import React from "react";
import "./App.css";
import Die from "./Die";
import { useState } from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  const [element, setElement] = useState(allNewDice());

  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    const allHeld = element.every((die) => die.isHeld);
    const firstValue = element[0].value;
    const allSameValue = element.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
      console.log("You won!");
    }
  }, [element]);

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }
  function allNewDice() {
    const newDice = [];

    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
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
    if (!tenzies) {
      setElement((oldDice) =>
        oldDice.map((item) => {
          return item.isHeld ? item : generateNewDie();
        })
      );
    } else {
      setTenzies(false);
      setElement(allNewDice());
    }
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
      {tenzies && <Confetti />}
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
            {tenzies ? "New Game" : "Roll"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
