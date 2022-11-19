import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Recipehs } from './components/Recipehs/Recipehs';
import { Recipeh } from './components/Recipehs/Recipeh/Recipeh';
import { RecipehLoader } from './components/Recipehs/RecipehLoader/RecipehLoader';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>

        <Routes>
          <Route path="/" element={<App />}>

            <Route index element={<Recipehs />} />
            <Route path="recipehs" element={<Recipehs />} >
                <Route index element={<RecipehLoader />} />
                <Route path=":recipehId" element={<Recipeh />} />
                <Route path="*" element={<RecipehLoader />} />
            </Route>
            <Route 
                path="*"
                element={
                  <main style={{padding: "1rem"}}>
                  <p>There's nothing here!</p>
                  </main>
            }/>

          </Route>
        </Routes>

      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
