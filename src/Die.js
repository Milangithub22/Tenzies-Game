import React from "react";

export default function Die(props) {
  const onClickToGreen = {
    backgroundColor: props.isHeld ? "green" : "white",
  };

  return (
    <div onClick={props.holdDice} className="die_face" style={onClickToGreen}>
      <h2 className="die_num">{props.value}</h2>
    </div>
  );
}
