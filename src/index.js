import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

const word = "React";
const bool = true;

root.render(
  <>
    <h1 className="title">
      {/* JavaScript (variable, boolean, functions, etc.) */}
      Hello {<em>there</em>} {word} {bool ? "Yes" : "No"}
    </h1>
    <p>
      Lorem <strong>ipsum</strong> dolor sit amet consectetur adipisicing elit.
      Mollitia voluptatibus pariatur, itaque omnis sunt distinctio cum nobis
      earum quod quis labore blanditiis deserunt voluptatum, veniam modi
      aliquid? Magnam, ea debitis!
    </p>
  </>
);
