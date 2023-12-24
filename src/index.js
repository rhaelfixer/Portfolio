import React from "react";
import ReactDOM from "react-dom/client";


import App from "./App";


// Context
import {DateProvider} from "./components/DateContext";
import {ScrollProvider} from "./components/ScrollContext";


// CSS
import "./index.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DateProvider>
      <ScrollProvider>
        <App />
      </ScrollProvider>
    </DateProvider>
  </React.StrictMode>
);
