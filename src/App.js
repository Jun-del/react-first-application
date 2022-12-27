import { useState } from "react";
import Clicker from "./Clicker.js";

export default function App() {
  const [hasClicker, setHasClicker] = useState(true);

  const toggleClickerClick = () => {
    setHasClicker(!hasClicker);
  };

  // console.log(`hsl(${Math.random() * 360} deg , 100%, 70%)`);

  return (
    <>
      <button onClick={toggleClickerClick}>
        {hasClicker ? "Hide" : "Show"} Clicker
      </button>

      {/* {hasClicker ? <Clicker /> : null} */}

      {/* Check left AND (&&) right condition; if true, return clicker */}
      {hasClicker && (
        <>
          <Clicker
            keyName="countA"
            color={`hsl(${Math.random() * 360}deg, 100%, 70%)`}
          />
          <Clicker
            keyName="countB"
            color={`hsl(${Math.random() * 360}deg , 100%, 70%)`}
          />
          <Clicker
            keyName="countC"
            color={`hsl(${Math.random() * 360}deg , 100%, 70%)`}
          />
        </>
      )}
    </>
  );

  //   return <h1>My Application</h1>;
}
