import React from 'react';
import { Counter } from './features/counter/Counter';
import { Bracket } from './features/bracket/Bracket'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tourney Tracker</h1>
        <Bracket />
      </header>
    </div>
  );
}

export default App;
