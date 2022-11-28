import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { RecepehBook, Recepeh, userRecipehBook, initialBook } from '../../database';
import { randomIndex } from '../../features/recipehFeatures';

export interface RecipehHash {
    [id: number] : number
}

export interface RecipehsState {
    allRecipehs: RecepehBook,
    filteredRecipehs: RecepehBook | [],
    currentRecipeh: Recepeh | null | string,
    visitedRecipehs: number[];
    filter: string // or string[] | []
    searchTerm: string,
    searchResult: Recepeh[],
    favorites: number[],
    recipehHash: RecipehHash
}

export const initialState: RecipehsState = {
    allRecipehs: userRecipehBook, // userRecipehBook //initialBook // turn this into a (fake) api call later
    filteredRecipehs: userRecipehBook,
    currentRecipeh: null,
    visitedRecipehs: [],
    filter: "alles",
    searchTerm: "",
    searchResult: [],
    favorites: [],
    recipehHash: {

    }
}

export const recipehSlice = createSlice({
    name: 'recipehs',
    initialState,
    reducers: {
        randomRecipeh: (state) => {
            let index = randomIndex(state.filteredRecipehs);
            while(state.filteredRecipehs.length >= 1 && state.visitedRecipehs.includes(state.filteredRecipehs[index].id)){
                state.filteredRecipehs.splice(index, 1);
                index = randomIndex(state.filteredRecipehs); 
            };

            
            if (state.filteredRecipehs.length < 1){
                state.currentRecipeh = 'No more Recipehs!'
            } else {
                let current = state.filteredRecipehs.splice(index, 1);
                state.currentRecipeh = current[0];
            }
        }, 
        addToRecipehHash: (state, action) => {
            let id = Number(action.payload)
            if (!state.recipehHash[id]){
                state.recipehHash[id] = state.allRecipehs.findIndex((recipeh) => recipeh.id === id)
            }
        },
        addToVisited: (state, action) => {
            let id = action.payload;
            if (!state.visitedRecipehs.includes(action.payload)){
                state.visitedRecipehs.push(action.payload);
            }

            recipehSlice.caseReducers.addToRecipehHash(state, {payload: id, type: "addToHash"})
        },
        setCurrentRecipeh: (state, action) => {
            let id = Number(action.payload);
            if(state.recipehHash[id]){
                state.currentRecipeh = state.allRecipehs[state.recipehHash[id]]
                console.log('rendered with Hash')
            } else {

                let foundIndex:number = state.allRecipehs.findIndex(recipeh => 
                    recipeh.id === id
                )
                if (foundIndex >= 0)
                    {state.currentRecipeh = state.allRecipehs[foundIndex]}
                    console.log('rendered with findIndex')
                }
        },
        setFilter: (state, action) => {
            let voorkeur:string = action.payload;
            state.filter = voorkeur;
            if (state.filter === "alles"){
                state.filteredRecipehs = state.allRecipehs.filter(recipeh => recipeh.voorkeur);
            } else {
                state.filteredRecipehs = state.allRecipehs.filter(recipeh => recipeh.voorkeur === state.filter);
            }

        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        getSearchResults: (state, action) => {
            let searchTerm = action.payload.toLowerCase();
            let result = state.allRecipehs.filter(recipeh => 
                    recipeh.naam.toLowerCase().includes(searchTerm) 
                    || recipeh.ingredienten.some(ing => ing.toLowerCase().includes(searchTerm))
                    || recipeh.voorkeur.toLowerCase().includes(searchTerm)
                    || recipeh.categorie.toLowerCase().includes(searchTerm)
                    //search instructions array as well
                    || recipeh.instructie.some(ins => ins.toLowerCase().includes(searchTerm))
                );
                //also apply category filters later
            state.searchResult = result;
        },
        resetAll: (state) => {
            state.currentRecipeh = null;
            state.visitedRecipehs = [];
            state.filteredRecipehs = userRecipehBook;
            state.filter = "alles"
        },
        addFavorite: (state,action) => {
            if (!state.favorites.includes(action.payload)){
            state.favorites.push(action.payload)
        }
        },
        removeFavorite: (state, action) => {
            let foundIndex = state.favorites.indexOf(action.payload);
            if (foundIndex >= 0)
                state.favorites.splice(foundIndex, 1)
        }
    },  
    extraReducers: {}
});

//export recucer actions
export const { randomRecipeh, addToRecipehHash, addToVisited, setCurrentRecipeh, setFilter, setSearchTerm, getSearchResults, resetAll, addFavorite, removeFavorite} = recipehSlice.actions;

//create and export selectors 
export const selectCurrentRecipeh = (state: RootState) => state.recipehs.currentRecipeh;
export const selectVisitedRecipehs = (state: RootState) => state.recipehs.visitedRecipehs;
export const selectAllRecipehs = (state: RootState) => state.recipehs.allRecipehs;
export const selectFilter = (state: RootState) => state.recipehs.filter;
export const selectSearchTerm = (state: RootState) => state.recipehs.searchTerm;
export const selectSearchResult = (state: RootState) => state.recipehs.searchResult;
export const selectFavorites = (state: RootState) => state.recipehs.favorites;
export const selectRecipehHash = (state: RootState) => state.recipehs.recipehHash;


export default recipehSlice.reducer;
