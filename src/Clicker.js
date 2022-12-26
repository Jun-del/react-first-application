import { useEffect, useState } from "react";

export default function Clicker() {
  //   const countState = useState(0);
  //   const count = countState[0];
  //   const setCount = countState[1];

  const [count, setCount] = useState(
    parseInt(localStorage.getItem("count") ?? 0)
  );

  // To call the function only on the first render, use empty array []
  //   useEffect(() => {}, []);

  useEffect(() => {
    // The logical AND (&&) (logical conjunction) operator for a set of boolean operands will be
    // true if and only if all the operands are true. Otherwise it will be false.
    // const savedCount = parseInt(localStorage.getItem("count") ?? 0);
    // Save the count to the state (retain the value between page reloads)
    // setCount(savedCount);
  }, []);

  // Trigger the function only when the count changes
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

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
