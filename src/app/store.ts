import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import recipehReducer from '../components/Recipehs/recipehSlice';
import notificationReducer from '../components/Notification/notificationSlice';
import type { PreloadedState } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  recipehs: recipehReducer, 
  notifications: notificationReducer
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
