import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { RecepehBook, Recepeh, userRecipehBook, initialBook } from '../../database';
import { randomIndex } from './recipehFeatures';

export interface RecipehsState {
    allRecipehs: RecepehBook,
    filteredRecipehs: RecepehBook ,
    currentRecipeh: Recepeh | null | string,
    visitedRecipehs: number[];
}

const initialState: RecipehsState = {
    allRecipehs: userRecipehBook, // userRecipehBook //initalBook // turn this into a (fake) api call later
    filteredRecipehs: userRecipehBook,
    currentRecipeh: null,
    visitedRecipehs: []
}

export const recipehSlice = createSlice({
    name: 'recipehs',
    initialState,
    reducers: {
        randomRecipeh: (state) => {
            let index = randomIndex(state.filteredRecipehs);
            while(state.visitedRecipehs.includes(state.filteredRecipehs[index].id)){
                index = randomIndex(state.filteredRecipehs);
                if (state.filteredRecipehs.length === state.visitedRecipehs.length){
                    state.currentRecipeh = 'No more Recipehs!'
                    return;
                }   
            };

            if (state.filteredRecipehs.length === state.visitedRecipehs.length){
                state.currentRecipeh = 'No more Recipehs!'
            } else {
                state.currentRecipeh = state.filteredRecipehs[index];
            }
        }, 
        addToVisited: (state, action) => {
            if (!state.visitedRecipehs.includes(action.payload)){
            state.visitedRecipehs.push(action.payload);
            }
        },
        // loadRecipehTile: (state, action) => {
            
            
            // const recipehById: Recepeh | undefined = state.filteredRecipehs.find(recipeh => recipeh.id === action.payload);
        //     return {
        //         naam: recipehById.naam,
        //         picture: recipehById.picture
        //     }
        // }
    },
    extraReducers: {}
});

//export recucer actions
export const { randomRecipeh, addToVisited} = recipehSlice.actions;

//create and export selectors 
export const selectCurrentRecipeh = (state: RootState) => state.recipehs.currentRecipeh;
export const selectVisitedRecipehs = (state: RootState) => state.recipehs.visitedRecipehs;
export const selectAllRecipehs = (state: RootState) => state.recipehs.allRecipehs;

export default recipehSlice.reducer;
