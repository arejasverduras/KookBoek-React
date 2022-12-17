import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { NotificationList } from './components/Notification/NotificationList/NotificationList';


function App() {
  return (
    <div className="App" aria-label="App">
        <Header />
        <Outlet /> 
        <NotificationList />
    </div>
  );
}

export default App;
