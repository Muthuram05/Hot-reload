import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import Hello from "./Hello";

let root = createRoot(document.getElementById("root"));

const render = () => {
    root.render(<><App /><Hello /></>);
};


render();
