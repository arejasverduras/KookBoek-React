import React from 'react';
import { queryByTestId, render, screen } from '@testing-library/react';
import { renderWithProviders } from '../../../utils-test';
import { Routes, Route } from 'react-router-dom';
import { RandomButton } from '../RandomButton/RandomButton';
import { RecipehContainer } from './RecipehContainer';
import { act } from 'react-dom/test-utils';

test("Should display a Hit the Button if no recipeh is selected / on initial load", ()=>{
    renderWithProviders(
        <RecipehContainer /> 
    )

    screen.getByText("Hit the button!")
})

test("Should display a Recipeh if a recipeh is selected by clicking the random button", ()=>{
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