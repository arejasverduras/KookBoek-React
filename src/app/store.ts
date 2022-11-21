import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import recipehReducer from '../components/Recipehs/recipehSlice';

export const store = configureStore({
  reducer: {
    recipehs: recipehReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
