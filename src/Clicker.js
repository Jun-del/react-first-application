import { useRef, useEffect, useState } from "react";

export default function Clicker({ keyName, color, increment }) {
  //   const countState = useState(0);
  //   const count = countState[0];
  //   const setCount = countState[1];

  const [count, setCount] = useState(
    parseInt(localStorage.getItem(keyName) ?? 0)
  );

  const buttonRef = useRef();

  // To call the function only on the first render, use empty array []
  //   useEffect(() => {}, []);

  useEffect(() => {
    buttonRef.current.style.backgroundColor = "lightgrey";
    buttonRef.current.style.color = "black";

    // The logical AND (&&) (logical conjunction) operator for a set of boolean operands will be
    // true if and only if all the operands are true. Otherwise it will be false.
    // const savedCount = parseInt(localStorage.getItem("count") ?? 0);

    // Save the count to the state (retain the value between page reloads)
    // setCount(savedCount);

    // Remove the count from the local storage when the component is unmounted
    return () => {
      localStorage.removeItem(keyName);
    };
  }, []);

  // Trigger the function only when the count changes
  useEffect(() => {
    localStorage.setItem(keyName, count);
  }, [count]);

  const buttonClick = () => {
    setCount(count + 1);

    increment();

    // setCount((value) => value + 1);
  };

  return (
    <div>
      <div style={{ color: color }}>Clicks count: {count}</div>
      <button ref={buttonRef} onClick={buttonClick}>
        Click me
      </button>
    </div>
  );
}
