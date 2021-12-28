export default function (props) {
  return (
    <>
      <button onClick={props.handleIncrease}>+</button>
      <p> {props?.currentDate || new Date().toDateString()} </p>
      <button onClick={props.handleDecrease}>-</button>
    </>
  );
}
