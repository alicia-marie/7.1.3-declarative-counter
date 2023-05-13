import React, { useState } from 'react'

import './App.css';

function App() {
  let [ counter, setCouunter ] = useState(0);
  window.setCouunter = setCouunter

  return (
    <div className="App">
      <h1>{counter}</h1>
      <h3>{counter}</h3>
    </div>
  );
}

export default App;

