import React from 'react';
import {  screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils-test';
import { act } from 'react-dom/test-utils';
import { userRecipehBook } from '../../database';

import reducer, {randomRecipeh, setCurrentRecipeh, setFilter, setSearchTerm, getSearchResults, initialState} from './recipehSlice';
 
test('should return the initial state', ()=>{
       expect(reducer(undefined, {type: undefined})).toEqual(initialState) 
    }
)

test('should be able to change the current recipeh', () => {
    const previousState = initialState;
    const recipeh  = userRecipehBook[4]

    const expectedState = {
        ...previousState,
        currentRecipeh: recipeh
    }

    
    expect(reducer(previousState, setCurrentRecipeh(5))).toEqual(expectedState);
})

test('should be able to filter the available recipehs by preference', ()=>{
    const previousState = initialState;
    const expectedState = {
        ...previousState,
        filteredRecipehs: [userRecipehBook[4]],
        filter: "vis",
    }

    expect(reducer(previousState, setFilter("vis"))).toEqual(expectedState);
 }
)

test('should be able to reset the filters to include all recipehs', ()=>{
    const previousState = {
        ...initialState, 
        filteredRecipehs: [userRecipehBook[4]],
        filter: "vis",
    }
    const expectedState = {
        ...previousState,
        filteredRecipehs: userRecipehBook,
        filter: "alles",
    }

    expect(reducer(previousState, setFilter("alles"))).toEqual(expectedState);
 }
)

test('should be able to change the searchTerm', ()=>{
    const previousState = {
        ...initialState
    }
    const expectedState = {
        ...previousState,
        searchTerm: "hoekie"
    }

    expect(reducer(previousState, setSearchTerm("hoekie"))).toEqual(expectedState);
 }
)

test('should be able to search the ingredients, voorkeur, categorie and instructions', ()=>{
    const previousState = {
        ...initialState, 
        searchTerm: "paddenstoelen"
    }
    const expectedState = {
        ...previousState,
        searchResult: [userRecipehBook[0]]
    }

    expect(reducer(previousState, getSearchResults("paddenstoelen"))).toEqual(expectedState);
 }
)

test('randomFunction should generate a not-seen recipeh at all times, or quit', ()=>{
    const previousState = {
        ...initialState, 
        filteredRecipehs: [userRecipehBook[2], userRecipehBook[3], userRecipehBook[4]],
        visitedRecipehs:  [4,2,1]
    }
    const expectedState = {
        ...previousState,
        searchResult: [userRecipehBook[0]]
    }

    const newState = reducer(previousState, randomRecipeh());

    expect(newState.currentRecipeh).not.toEqual(userRecipehBook[1]);
    expect(newState.currentRecipeh).not.toEqual(userRecipehBook[3]);
    expect(newState.currentRecipeh).not.toEqual(userRecipehBook[0]);
 }
)