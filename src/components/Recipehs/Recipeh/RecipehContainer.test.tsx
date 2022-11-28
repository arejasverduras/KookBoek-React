import React from 'react';
import {  screen } from '@testing-library/react';
import { renderWithProviders } from '../../../utils-test';
import { RandomButton } from '../RandomButton/RandomButton';
import { RecipehContainer } from './RecipehContainer';
import { userRecipehBook } from '../../../database';
import type { RecepehBook } from '../../../database';
import { Filters } from '../RecipehHeader/Filters/Filters';
import { act } from 'react-dom/test-utils';
import { initialState } from '../recipehSlice';

const filledHash = 
    {
        1:0,
        2:1,
        3:2,
        4:3,
        5:4
    };


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

test("Renders a Recipeh FASTER using the recipehHash when clicking the random button", ()=>{
    renderWithProviders(
        <>  
            <RandomButton />
            <RecipehContainer /> 
        </>,
                {
                    //set the initialstate to filteredRecipehs = [];
                    preloadedState: {
                        recipehs: {
                            ...initialState,
                            recipehHash: filledHash
                        }
                }, route: "/"
            }
        
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
    const filteredRecipehs:RecepehBook | [] = [];  
    const currentRecipeh = userRecipehBook[4];

renderWithProviders(
        <>  
            <RandomButton />
            <RecipehContainer /> 
        </>
        , {
            //set the initialstate to filteredRecipehs = [];
            preloadedState: {
                    recipehs: {
                        ...initialState,
                        filteredRecipehs: filteredRecipehs, 
                        currentRecipeh: currentRecipeh,
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
                    ...initialState,
                    filteredRecipehs: filteredRecipehs, 
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

test("Clicking reload button should navigate to the root", ()=>{
    const filteredRecipehs:[] = [];  
    const currentRecipeh = userRecipehBook[4]
    renderWithProviders(
        <>  
            <RandomButton />
            <RecipehContainer /> 
        </>
        , {
            //set the initialstate to filteredRecipehs = [];
            preloadedState: {
                recipehs: {
                    ...initialState,
                    filteredRecipehs: filteredRecipehs, 
                    currentRecipeh: currentRecipeh,
                }
        }, route: "/recipehs/5"
    } 
    )

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

   expect(document.location.pathname === "/").toBeTruthy();
});

test("Clicking reload button should allow you to start over", ()=>{
    const filteredRecipehs:[] = [];  
    const currentRecipeh =   userRecipehBook[4];
    renderWithProviders(
        <>  
            <RandomButton />
            <RecipehContainer /> 
        </>
        , {
            //set the initialstate to filteredRecipehs = [];
            preloadedState: {
                recipehs: {
                    ...initialState,
                    filteredRecipehs: filteredRecipehs, 
                    currentRecipeh: currentRecipeh,
                }
        }, route: "/recipehs/5"
    } 
    )

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

   screen.getByText("Hit the button!")
});


test("Renders a different Recipeh if the random button is clicked Twice", ()=>{

   renderWithProviders(
        <>  
            <RandomButton />
            <RecipehContainer /> 
        </>
        , {
            //set the initialstate to filteredRecipehs = [];
            preloadedState: {
                recipehs: {
                    ...initialState,
                    recipehHash: filledHash
                }
        }, route: "/"
    } 
    )
    
    //get the random button
    const randomButton = screen.getByRole('button', {name: /feed/i});
      //click the random button
      act(()=>{
        randomButton.click();
    })

    const firstRoute = document.location.pathname;
    // const recipeh1Title = screen.queryByRole('heading', {name: /zalm/i});
    const title1 = screen.getByTitle("realRecipehTitle");
    const title1Value = title1.innerHTML;

    //click the random button again
    act(()=>{
        randomButton.click();
    })

    const secondRoute = document.location.pathname;
    expect(secondRoute).not.toBe(firstRoute);

    const title2 = screen.getByTitle("realRecipehTitle");
    const title2Value = title2.innerHTML
    // console.log(title1Value);
    // console.log(title2Value);
    expect(title1Value).not.toEqual(title2Value); 
});

test("Visiting an  url with recipehId should navigate to that Recipeh", ()=>{
    const currentRecipeh = userRecipehBook[4]
    renderWithProviders(
        <>  
            <RandomButton />
            <Filters />
            <RecipehContainer /> 
        </>
        , {
            //set the initialstate to filteredRecipehs = [];
            preloadedState: {
                    recipehs: {
                        ...initialState,
                        currentRecipeh: currentRecipeh,
                    }
        }, route: "/recipehs/5"
    } 
    )
    //start with the root
    //change the url 
    //check if the correct recipeh is showing

    expect(document.location.pathname === "/recipehs/5").toBeTruthy();

    const filterButton = screen.getByRole("button", {name: "Vega"});

    act(()=>{
        filterButton.click();
    })
    
    const id = screen.getByTitle("recipehId");

    expect(document.location.pathname === `/recipehs/${id.innerHTML}`).toBeTruthy();
});