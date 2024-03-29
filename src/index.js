import App  from "./App";
// 1) Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

// 2) Get a reference to the div with ID root 
const el = document.getElementById("root");

// 3) Get a reference to the div with ID root
const root = ReactDOM.createRoot(el);

// 4) Show the component on the screen
root.render(<App />);