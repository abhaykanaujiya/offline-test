import { useState } from "react";

export default function (props) {
  const [selectedButton, setSelectedButton] = useState(null);

  return (
    <>
      <button onClick={props.handleIncrease}>+</button>
      <p> {props?.currentDate || new Date().toDateString()} </p>
      <button>-</button>
    </>
  );
}
