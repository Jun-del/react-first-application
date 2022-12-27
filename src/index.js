import { createRoot } from "react-dom/client";
import App from "./App.js";
import "./style.css";

const root = createRoot(document.querySelector("#root"));

const word = "React";
const bool = true;

root.render(
  <div>
    {/* <App
      children={
        <>
          <h1>My First React App</h1>
          <h2>And a Fancy Subtitle</h2>
        </>
      }
    /> */}

    {/* This is same as above code */}
    <App>
      <h1>My First React App</h1>
      <h2>And a Fancy Subtitle</h2>
    </App>
  </div>
);

// root.render(
//   <>
//     {/* HTML (JSX) */}
//     <h1
//       className="title"
//       style={{ color: "coral", backgroundColor: "floralwhite" }}
//     >
//       {/* JavaScript (variable, boolean, functions, etc.) */}
//       Hello {<em>there</em>} {word} {bool ? "Yes" : "No"}
//     </h1>
//     <p className="cute-paragraph">
//       Lorem <strong>ipsum</strong> dolor sit amet consectetur adipisicing elit.
//       Mollitia voluptatibus pariatur, itaque omnis sunt distinctio cum nobis
//       earum quod quis labore blanditiis deserunt voluptatum, veniam modi
//       aliquid? Magnam, ea debitis!
//     </p>
//   </>
// );
