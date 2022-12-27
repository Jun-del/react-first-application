import { useState } from "react";
import Clicker from "./Clicker.js";

export default function App() {
  const [hasClicker, setHasClicker] = useState(true);

  const toggleClickerClick = () => {
    setHasClicker(!hasClicker);
  };

  return (
    <>
      <button onClick={toggleClickerClick}>
        {hasClicker ? "Hide" : "Show"} Clicker
      </button>

      {/* {hasClicker ? <Clicker /> : null} */}

      {/* Check left and right condition; if true, return clicker */}
      {hasClicker && <Clicker />}
    </>
  );

  //   return <h1>My Application</h1>;
}
