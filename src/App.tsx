import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/CardList';
import { robots } from './roborts';

function App() {
  return (
    <div className="App">
      <CardList roborts={robots} />
    </div>
  );
}


export default App;
