import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a
            href="http://johannamagdalena.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Johanna Magdalena
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/johannamag/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github{" "}
          </a>
          and{" "}
          <a
            href="https://gracious-dubinsky-a075c2.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
