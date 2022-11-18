import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { RecepehBook, Recepeh, userRecipehBook, initialBook } from '../../database';
import { randomIndex } from './recipehFeatures';

export interface RecipehsState {
    allRecipehs: RecepehBook,
    filteredRecipehs: RecepehBook | [],
    currentRecipeh: Recepeh | null | string,
    visitedRecipehs: number[];
    filter: string | null, // or string[] | []
    // searchTerm: string
}

const initialState: RecipehsState = {
    allRecipehs: userRecipehBook, // userRecipehBook //initialBook // turn this into a (fake) api call later
    filteredRecipehs: userRecipehBook,
    currentRecipeh: null,
    visitedRecipehs: [],
    filter: null,
    // searchTerm: ""
}

export const recipehSlice = createSlice({
    name: 'recipehs',
    initialState,
    reducers: {
        randomRecipeh: (state) => {
            let index = randomIndex(state.filteredRecipehs);
            // console.log(state.filteredRecipehs.length);
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
        addToVisited: (state, action) => {
            if (!state.visitedRecipehs.includes(action.payload)){
            state.visitedRecipehs.push(action.payload);
            }
        },
        setCurrentRecipeh: (state, action) => {
            let foundIndex:number = state.allRecipehs.findIndex(recipeh => 
                recipeh.id === action.payload
            )
            state.currentRecipeh = state.allRecipehs[foundIndex]
        },
        setFilter: (state, action) => {
            let voorkeur:string = action.payload;
            state.filter = voorkeur;
            if (state.filter === "alles"){
                state.filteredRecipehs = state.allRecipehs
            } else {
                state.filteredRecipehs = state.allRecipehs.filter(recipeh => recipeh.voorkeur === state.filter);
            }
           
            recipehSlice.caseReducers.randomRecipeh(state);
            
        }
    },
    extraReducers: {}
});

//export recucer actions
export const { randomRecipeh, addToVisited, setCurrentRecipeh, setFilter} = recipehSlice.actions;

//create and export selectors 
export const selectCurrentRecipeh = (state: RootState) => state.recipehs.currentRecipeh;
export const selectVisitedRecipehs = (state: RootState) => state.recipehs.visitedRecipehs;
export const selectAllRecipehs = (state: RootState) => state.recipehs.allRecipehs;

export default recipehSlice.reducer;
