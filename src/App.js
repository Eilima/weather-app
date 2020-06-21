import React from 'react';
import './App.css';
import {search} from './OpenWeather'
import { Display } from './Components/Display';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Display search={search} />
      </header>
    </div>
  );
}

export default App;
