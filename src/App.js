import "./App.css";
import Die from "./Die";

function App() {
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
        <div className="dir_container">
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
        </div>
      </div>
    </div>
  );
}

export default App;
