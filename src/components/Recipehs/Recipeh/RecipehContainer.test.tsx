import React from 'react';
import {  render, screen } from '@testing-library/react';
import { renderWithProviders } from '../../../utils-test';
import { Routes, Route } from 'react-router-dom';
import { RandomButton } from '../RandomButton/RandomButton';
import { RecipehContainer } from './RecipehContainer';
import { initialState } from '../recipehSlice';
import { act } from 'react-dom/test-utils';
import { notDeepEqual } from 'assert';


test("Renders 'Hit the Button' if no recipeh is selected / on initial load", ()=>{
    renderWithProviders(
        <RecipehContainer /> 
    )

    screen.getByText("Hit the button!")
})

test("Renders a Recipeh if a recipeh is selected by clicking the random button", ()=>{
    renderWithProviders(
        <>  
            <RandomButton />
            <RecipehContainer /> 
        </>
        
    )
    // screen.debug(screen.getByRole('button', {id: /randomButton/i}));
    const randomButton = screen.getByRole('button', {name: /feed/i});
    // const randomButton = screen.getByTitle("random");

    
    act(()=>{
        randomButton.click();
    })
    screen.getByTitle("recipeh")
    screen.getByRole("heading", {name: "Ingredienten"})
    
});

test("Stop rendering recipeh's if all filterd recipehs have been visited", ()=>{
    const filteredRecipehs:[] = [];  
renderWithProviders(
        <>  
            <RandomButton />
            <RecipehContainer /> 
        </>
        , {
            //set the initialstate to filteredRecipehs = [];
            preloadedState: {
                    recipehs: {
                        allRecipehs: [],
                        filteredRecipehs: filteredRecipehs, 
                        currentRecipeh: null,
                        visitedRecipehs: [],
                        filter: "Alles",
                        searchTerm: "",
                        searchResult: []
                    }
        }, route: "/"
    } 
    )
    

    
    const randomButton = screen.getByRole('button', {name: /feed/i});

    //click the random button
    act(()=>{
        randomButton.click();
    })

    //check if the desired text is in the screen
   const noMore =  screen.getByText("No more recipehs!");
   expect(noMore).toBeDefined();

    //check if there is no more recipeh component rendered
    expect(screen.queryByTitle("recipeh")).not.toBeInTheDocument();
});

test("Render reload button if all filterd recipehs have been visited", ()=>{
    const filteredRecipehs:[] = [];  
renderWithProviders(
        <>  
            <RandomButton />
            <RecipehContainer /> 
        </>
        , {
            //set the initialstate to filteredRecipehs = [];
            preloadedState: {
                    recipehs: {
                        allRecipehs: [],
                        filteredRecipehs: filteredRecipehs, 
                        currentRecipeh: null,
                        visitedRecipehs: [],
                        filter: "Alles",
                        searchTerm: "",
                        searchResult: []
                    }
        }, route: "/"
    } 
    )
    

    
    const randomButton = screen.getByRole('button', {name: /feed/i});

    //click the random button
    act(()=>{
        randomButton.click();
    })

    //check if the desired text is in the screen
   const noMore =  screen.getByText("No more recipehs!");
   expect(noMore).toBeDefined();

   expect(screen.getByRole('button', {name: /reload/i})).toBeInTheDocument();

});

test("Clicking reload button should navigate to the root and dispatch(resetAll)", ()=>{
    const filteredRecipehs:[] = [];  
renderWithProviders(
        <>  
            <RandomButton />
            <RecipehContainer /> 
        </>
        , {
            //set the initialstate to filteredRecipehs = [];
            preloadedState: {
                    recipehs: {
                        allRecipehs: [],
                        filteredRecipehs: filteredRecipehs, 
                        currentRecipeh: null,
                        visitedRecipehs: [],
                        filter: "Alles",
                        searchTerm: "",
                        searchResult: []
                    }
        }, route: "/recipehs/5"
    } 
    )
    console.log(document.location.pathname)
    
    const randomButton = screen.getByRole('button', {name: /feed/i});

    //click the random button
    act(()=>{
        randomButton.click();
    })

    //check if the desired text is in the scree
    const reloadButton = screen.getByRole('button', {name: /reload/i});

   act(() => {
    reloadButton.click();
   })

   console.log(document.location.pathname)
});