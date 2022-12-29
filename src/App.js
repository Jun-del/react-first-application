import { useMemo, useState } from "react";
import Clicker from "./Clicker.js";

export default function App({ clickersCount, children }) {
  const [hasClicker, setHasClicker] = useState(true);
  const [count, setCount] = useState(0);

  const toggleClickerClick = () => {
    setHasClicker(!hasClicker);
  };

  const increment = () => {
    setCount(count + 1);
  };

  // Make an array of length clickersCount with values
  // const tempArray = [...Array(clickersCount)]; // [undefined, undefined, undefined, undefined]

  // tempArray.map((value, index) => {
  //   console.log(value, index);
  // });

  // console.log(`hsl(${Math.random() * 360} deg , 100%, 70%)`);

  const colors = useMemo(() => {
    const colors = [];

    for (let i = 0; i < clickersCount; i++) {
      colors.push(`hsl(${Math.random() * 360}deg, 100%, 70%)`);
    }

    return colors;
  }, [clickersCount]);

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
          {[...Array(clickersCount)].map((value, index) => (
            <Clicker
              key={index}
              increment={increment}
              keyName={`count${index}`}
              color={colors[index]}
            />
          ))}

          {/* <Clicker
            increment={increment}
            keyName="countA"
            color={`hsl(${Math.random() * 360}deg, 100%, 70%)`}
          /> */}
        </>
      )}
    </>
  );

  //   return <h1>My Application</h1>;
}
