import React from "react";

export default function Die(props) {
  return (
    <div className="die_face">
      <h2 className="die_num">{props.value}</h2>
    </div>
  );
}
