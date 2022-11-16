import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { RecepehBook, Recepeh, userRecipehBook } from '../../database';
import { randomIndex } from './recipehFeatures';


export interface RecipehsState {
    allRecipehs: RecepehBook,
    filteredRecipehs: RecepehBook,
    currentRecipeh: Recepeh | null,
    visitedRecipehs: number[] | null,
}

const initialState: RecipehsState = {
    allRecipehs: userRecipehBook, // turn this into a (fake) api call later
    filteredRecipehs: userRecipehBook,
    currentRecipeh: null,
    visitedRecipehs: []
}

export const recipehSlice = createSlice({
    name: 'recipehs',
    initialState,
    reducers: {
        randomRecipeh: (state) => {
            //get random index number based on inputArray length
            const index = randomIndex(state.filteredRecipehs);
                console.log(index);
            state.currentRecipeh = state.filteredRecipehs[index];
        }
    },
    extraReducers: {}
});

//export recucer actions
export const { randomRecipeh } = recipehSlice.actions;

//create and export selectors 
export const selectCurrentRecipeh = (state: RootState) => state.recipehs.currentRecipeh;

export default recipehSlice.reducer;