import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Recipehs } from './components/Recipehs/Recipehs';

function App() {
  return (
    <div className="App">
        <Header />
        <Recipehs />
    </div>
  );
}

export default App;
