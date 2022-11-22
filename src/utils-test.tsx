import React, {PropsWithChildren} from "react";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import type { PreloadedState } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { AppStore, RootState, setupStore } from "./app/store";
// As a basic setup, import your same slice reducers
import recipehSlice from "./components/Recipehs/recipehSlice";
import { BrowserRouter as Router } from "react-router-dom";
import { initialState } from "./components/Recipehs/recipehSlice";
import userEvent from "@testing-library/user-event";



// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    preloadedState?: PreloadedState<RootState>
    store?: AppStore,
    route:string
  }

export function renderWithProviders(
  ui:any,
  {
    route = "/",
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {
    route: "/"
  }
) {
  window.history.pushState({}, 'Test page', route)
  
  function Wrapper({ children }:PropsWithChildren) {
    return <Router><Provider store={store}>{children}</Provider></Router>;
  }

  // Return an object with the store and all of RTL's query functions
  return { user: userEvent.setup(),
            store, 
            ...render(
                ui, { wrapper: Wrapper, ...renderOptions }
              ) };
}
