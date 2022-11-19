import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { Recipehs } from './components/Recipehs/Recipehs';

function App() {
  return (
    <div className="App">
        <Header />
        {/* <Recipehs /> */}
        <Outlet />
    </div>
  );
}

export default App;
