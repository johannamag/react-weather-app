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
          <a href="http://johannamagdalena.com/" target="_blank">
            Johanna Magdalena
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/johannamag/react-weather-app"
            target="_blank"
          >
            open-sourced on Github
          </a>
          !
        </footer>
      </div>
    </div>
  );
}
