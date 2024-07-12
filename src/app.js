// src/App.js
import React from 'react';
import './App.css';
import FancyText from './FancyText';
import TaskGenerator from './TaskGenerator';

const App = () => {
  return (
    <div className="App">
      <FancyText title text="Task Management and Motivation App" />
      <TaskGenerator />
      <footer>
        <FancyText text="© 2024 Your Company. All rights reserved." />
      </footer>
    </div>
  );
};

export default App;
