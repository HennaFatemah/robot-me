import './App.css';
import React from 'react';
import CardsList from './components/CardsList/CardsList';
import { robots } from './robots'

const App = () => {
  return (
    <div>
      <h1>Robot Me</h1>
      <CardsList
        robots={robots}
      />
    </div>
  );
};

export default App;