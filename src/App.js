import React from "react";
import "./App.css";
import { Display } from "./Components/Display";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Display />
        <span className="API-credit">
          Powered by <a href="https://openweathermap.org/api">OpenWeatherMap</a>
        </span>
      </header>
      <footer>
        <img src='./GitHub-Mark-Light-120px-plus.png' />
      </footer>
    </div>
  );
}

export default App;
