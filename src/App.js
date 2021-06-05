import './App.css';
import React from 'react';
import Cards from './components/Cards/Cards';
import { robots } from './robots';

const App = () => {
  return (
    <div>
      <h1>Robot Me</h1>
      <Cards
        id={robots[0].id}
        name={robots[0].name}
        email={robots[0].email}
      />
      <Cards
        id={robots[1].id}
        name={robots[1].name}
        email={robots[1].email}
      />
      <Cards
        id={robots[2].id}
        name={robots[2].name}
        email={robots[2].email}
      />
    </div>
  );
};

export default App;