import React from "react";

import { createRoot } from "react-dom/client";
import App from "./App";
import "./app.css";

// const index = () => {
//   return <div>index</div>;
// };

function Hello() {
//   const x = 20;

  return (
    <>
      {/* <h1 style={{ backgroundColor: "red" }}>{x}</h1>
      {console.log(x)} */}
      <App />
    </>
  );
}

const root = createRoot(document.getElementById("root"));

root.render(<Hello />);
