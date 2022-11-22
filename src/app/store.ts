import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import recipehReducer from '../components/Recipehs/recipehSlice';
import type { PreloadedState } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  recipehs: recipehReducer
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

// export const store = configureStore({
//   reducer: {
//     recipehs: recipehReducer
//   },
// });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
