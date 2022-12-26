import { useState } from "react";

export default function Clicker() {
  //   const countState = useState(0);
  //   const count = countState[0];
  //   const setCount = countState[1];

  const [count, setCount] = useState(0);

  const buttonClick = () => {
    setCount(count + 1);

    // setCount((value) => value + 1);
  };

  return (
    <div>
      <div>Clicks count: {count}</div>
      <button onClick={buttonClick}>Click me</button>
    </div>
  );
}
