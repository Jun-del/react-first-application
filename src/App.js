import { useState } from "react";
import Clicker from "./Clicker.js";

export default function App({ children }) {
  const [hasClicker, setHasClicker] = useState(true);
  const [count, setCount] = useState(0);

  const toggleClickerClick = () => {
    setHasClicker(!hasClicker);
  };

  const increment = () => {
    setCount(count + 1);
  };

  // console.log(`hsl(${Math.random() * 360} deg , 100%, 70%)`);

  return (
    <>
      {/* Message from index.js */}
      {children}

      <div>Total count: {count} </div>

      <button onClick={toggleClickerClick}>
        {hasClicker ? "Hide" : "Show"} Clicker
      </button>

      {/* {hasClicker ? <Clicker /> : null} */}

      {/* Check left AND (&&) right condition; if true, return clicker */}
      {hasClicker && (
        <>
          <Clicker
            increment={increment}
            keyName="countA"
            color={`hsl(${Math.random() * 360}deg, 100%, 70%)`}
          />
          <Clicker
            increment={increment}
            keyName="countB"
            color={`hsl(${Math.random() * 360}deg , 100%, 70%)`}
          />
          <Clicker
            increment={increment}
            keyName="countC"
            color={`hsl(${Math.random() * 360}deg , 100%, 70%)`}
          />
        </>
      )}
    </>
  );

  //   return <h1>My Application</h1>;
}
