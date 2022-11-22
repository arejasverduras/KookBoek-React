import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import { store } from './app/store';
import { setupStore } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Recipehs } from './components/Recipehs/Recipehs';
import { RecipehContainer } from './components/Recipehs/Recipeh/RecipehContainer';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={setupStore()}>
      <Router>

        <Routes>
          <Route path="/" element={<App />}>

            <Route index element={<Recipehs />} />
            <Route path="recipehs" element={<Recipehs />} >
                <Route index element={<RecipehContainer />} />
                <Route path=":recipehId" element={<RecipehContainer />} />
                <Route path="*" element={<RecipehContainer />} />
            </Route>
            <Route 
                path="*"
                element={<Recipehs />}/>

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
