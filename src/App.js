// App.js
import React from 'react';
import Balloon from './Balloon';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const colors = ['#FFD1DC', '#C5E1A5', '#B39DDB', '#80DEEA', '#FFCC80'];
  const balloons = Array.from({ length: 15 }).map((_, index) => (
      <Balloon
          key={index}
          left={Math.random() * 100}
          delay={-Math.random() * 20}
          color={colors[Math.floor(Math.random() * colors.length)]}
      />
  ));

  return <div className="App">{balloons}</div>;
}

export default App;
