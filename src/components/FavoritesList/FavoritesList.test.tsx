import React from "react";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils-test";
import { act } from 'react-dom/test-utils';
import { FavoritesList } from "./FavoritesList";
import { Recipehs} from "../Recipehs/Recipehs";
import { initialState } from "../Recipehs/recipehSlice";
import { userRecipehBook } from "../../database";


const filledHash = 
    {
        1:0,
        2:1,
        3:2,
        4:3,
        5:4
    };

test("Should render a FavoritesList if there are favorites in the list", () => {

    renderWithProviders(
        <FavoritesList />,
        {
            preloadedState: {
                    recipehs: {
                        ...initialState,
                        favorites: [1,3,4],
                        recipehHash: filledHash
                    }
        }, route: '/'
    }
    )
    
    screen.getByRole("list", {name: /favoritesList/})
})

test("Should NOT render a FavoritesList if there are NO favorites in the list", () => {

    renderWithProviders(
        <FavoritesList />,
        {
            preloadedState: {
                    recipehs: {
                        ...initialState,
                        favorites: []
                    }
        }, route: '/'
    }
    )
    
    expect(screen.queryByRole("list", {name: /favoritesList/})).not.toBeInTheDocument();
})

test("Should render a list of the favorites Titles", () => {

    renderWithProviders(
        <FavoritesList />,
        {
            preloadedState: {
                    recipehs: {
                        ...initialState,
                        favorites: [1], 
                        recipehHash: filledHash
                    }
        }, route: '/'
    }
    )
    
    screen.getByRole("list", {name: /favoritesList/})
    screen.getByTitle("favoritesList");
    const listItem = screen.getByTitle("favoritesListItem")
    
   expect(listItem.innerHTML).toBe(userRecipehBook[0].naam);
    // screen.getByRole('heading', {name: /favorites/})
})

test("Clicking a favorite should render that Recipeh", () => {

    renderWithProviders(
        <Recipehs />,
        {
            preloadedState: {
                    recipehs: {
                        ...initialState,
                        favorites: [1],
                        recipehHash: filledHash
                    }
        }, route: '/'
    }
    )

    const listItem = screen.getByTitle("favoritesListItem")

    act(()=>{
        listItem.click();
    })

    const recipehTitle = screen.getByTitle("realRecipehTitle");
    expect(recipehTitle.innerHTML).toBe(userRecipehBook[0].naam);

    // screen.getByRole('heading', {name: /favorites/})
})

test("should be able to remove a favorite from the list", () => {

    renderWithProviders(
        <FavoritesList />, 
        {
            preloadedState: {
                    recipehs: {
                        ...initialState,
                        favorites: [2],
                        recipehHash: filledHash
                    }
        }, route: '/'
    }
    )

    screen.getByText(userRecipehBook[1].naam);

    const removeFavorite = screen.getByRole('button', {description: /removeFavorite/})

    act(()=>{
        removeFavorite.click()
    })
 
    expect(screen.queryByText(userRecipehBook[1].naam)).not.toBeInTheDocument()
})

test("should be able to add a favorite to the list", () => {

    renderWithProviders(
        <Recipehs />, 
        {
            preloadedState: {
                    recipehs: {
                        ...initialState,
                        currentRecipeh: userRecipehBook[0],
                        recipehHash: filledHash
                    }
        }, route: '/recepehs/1'
    }
    )

    const recipehTitle = screen.getByTitle("realRecipehTitle");
    const addFavorite = screen.getByRole('button', {name: /addFavorite/})

    act(()=>{
        addFavorite.click()
    })
 
    expect(screen.getByRole("listitem", {name: `favorite ${recipehTitle.innerHTML}` })).toBeInTheDocument()
})

