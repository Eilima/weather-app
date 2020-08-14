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
        <a href="https://Github.com">
          <img
            className="logo-img"
            src="https://cdn.discordapp.com/attachments/734243092961689744/743647589504647248/GitHub-Mark-120px-plus.png"
            alt="link to personal github"
            width="50px"
          />
        </a>
      </footer>
    </div>
  );
}

export default App;
