import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from './utils-test';
import { Routes, Route } from 'react-router-dom';
import { Recipehs } from './components/Recipehs/Recipehs';
import { RecipehContainer } from './components/Recipehs/Recipeh/RecipehContainer';
import App from './App';


test('the root should return a Hit the Button button as a recipeh', () => {
    
    let urlToTest = "/";
    renderWithProviders(
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
      </Routes>,
      {route: urlToTest}
        ) 
        // const route = "/recipehs/5";
        // window.history.pushState({}, 'Test page', route)
        
        screen.getAllByText("What's for dinner?");
});



test('changin the Url to recipehs/:recipehId renders the correct Recipeh', () => {
    
    let urlToTest = "./recipehs/5";
    renderWithProviders(
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
      </Routes>,
      {route: urlToTest}
        ) 
        // const route = "/recipehs/5";
        // window.history.pushState({}, 'Test page', route)
        
        screen.getAllByText('Zalm Broccoli Pasta');
});


