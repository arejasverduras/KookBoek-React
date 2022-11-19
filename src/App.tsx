import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
        <Header />
        {/* Outlet Renders Recipehs component */}
        <Outlet /> 
    </div>
  );
}

export default App;
