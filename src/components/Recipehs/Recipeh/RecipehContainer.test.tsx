import React from 'react';
import {  screen } from '@testing-library/react';
import { renderWithProviders } from '../../../utils-test';
import { RandomButton } from '../RandomButton/RandomButton';
import { RecipehContainer } from './RecipehContainer';
import type { RecepehBook } from '../../../database';
import { act } from 'react-dom/test-utils';



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
    const filteredRecipehs:RecepehBook | [] = [];  
    const currentRecipeh =     {
        id: 5,
        naam: 'Zalm Broccoli Pasta',
        ingredienten: ['zalmsnippers', 'brocolli', 'ui', 'knoflook', 'slagroom', 'italiaanse Kruiden', 'pasta'],
        voorkeur: 'vis',
        kooktijd: 15,
        categorie: 'pasta',
        picture: null,
        instructie: ['Zet water op voor de pasta',
                    'Knoflook & ui in de koekenpan', 
                    'Voeg de brocolli toe', 
                    'Snijd de zalm in zalmsnippers en voeg toe',
                    'Voeg de italiaanse kruiden toe',
                    'Als het water kookt, doe je de pasta erin',
                  'Voeg de slagroom toe',
                'Zet de saus op een laag vuur, deze is nu klaar',
                'Voeg de pasta toe aan de saus als deze klaar is. Roer door en serveer. Eet smakelijk!' ]
      }

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
                        currentRecipeh: currentRecipeh,
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

test("Clicking reload button should navigate to the root", ()=>{
    const filteredRecipehs:[] = [];  
    const currentRecipeh =     {
        id: 5,
        naam: 'Zalm Broccoli Pasta',
        ingredienten: ['zalmsnippers', 'brocolli', 'ui', 'knoflook', 'slagroom', 'italiaanse Kruiden', 'pasta'],
        voorkeur: 'vis',
        kooktijd: 15,
        categorie: 'pasta',
        picture: null,
        instructie: ['Zet water op voor de pasta',
                    'Knoflook & ui in de koekenpan', 
                    'Voeg de brocolli toe', 
                    'Snijd de zalm in zalmsnippers en voeg toe',
                    'Voeg de italiaanse kruiden toe',
                    'Als het water kookt, doe je de pasta erin',
                  'Voeg de slagroom toe',
                'Zet de saus op een laag vuur, deze is nu klaar',
                'Voeg de pasta toe aan de saus als deze klaar is. Roer door en serveer. Eet smakelijk!' ]
      }
    const { getByText } = renderWithProviders(
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
                        currentRecipeh: currentRecipeh,
                        visitedRecipehs: [],
                        filter: "Alles",
                        searchTerm: "",
                        searchResult: []
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


test("Renders a different Recipeh if the random button is clicked Again", ()=>{
    const filteredRecipehs:RecepehBook = [    {
        id: 1,
        naam: 'Paddenstoelen Pasta',
        ingredienten: ['pasta','paddenstoelen','citroen', 'creme fraiche', ],
        voorkeur: 'vega',
        kooktijd: 15,
        categorie: 'pasta',
        picture: "/images/pasta-paddenstoelen.jpg", 
        instructie: ['Maak de paddenstoelen schoon door het vuil eraf te vegen met een keukenpapiertje.', 'Snijd de paddenstoelen in stukjes', 'Kook ondertussen de pasta', 'Verhit olijfolie in de koekenpan en bak de paddenstoelen met een beetje zout']
        },];  
    const currentRecipeh =     {
        id: 5,
        naam: 'Zalm Broccoli Pasta',
        ingredienten: ['zalmsnippers', 'brocolli', 'ui', 'knoflook', 'slagroom', 'italiaanse Kruiden', 'pasta'],
        voorkeur: 'vis',
        kooktijd: 15,
        categorie: 'pasta',
        picture: null,
        instructie: ['Zet water op voor de pasta',
                    'Knoflook & ui in de koekenpan', 
                    'Voeg de brocolli toe', 
                    'Snijd de zalm in zalmsnippers en voeg toe',
                    'Voeg de italiaanse kruiden toe',
                    'Als het water kookt, doe je de pasta erin',
                  'Voeg de slagroom toe',
                'Zet de saus op een laag vuur, deze is nu klaar',
                'Voeg de pasta toe aan de saus als deze klaar is. Roer door en serveer. Eet smakelijk!' ]
      }
    const { getByText } = renderWithProviders(
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
                        currentRecipeh: currentRecipeh,
                        visitedRecipehs: [],
                        filter: "Alles",
                        searchTerm: "",
                        searchResult: []
                    }
        }, route: "/recipehs/5"
    } 
    )

    const firstRoute = document.location.pathname;
    // const recipeh1Title = screen.queryByRole('heading', {name: /zalm/i});
    const title1 = screen.getByTitle("realRecipehTitle");
    const title1Value = title1.innerHTML;

    const randomButton = screen.getByRole('button', {name: /feed/i});

    //click the random button
    act(()=>{
        randomButton.click();
    })

    const secondRoute = document.location.pathname;
    expect(secondRoute).not.toBe(firstRoute);
    // const recipeh2Title = screen.queryByRole('heading', {name: /zalm/i})
    // expect(recipeh2Title === null).toBeTruthy();

    const title2 = screen.getByTitle("realRecipehTitle");

    expect(title1Value).not.toEqual(title2.innerHTML); 



});