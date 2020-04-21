import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import { Homepage } from "./components/homepage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>


        <Homepage />


      </BrowserRouter>
    </div>
  );
}

export default App;
