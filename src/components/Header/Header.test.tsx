import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./Header";

import userEvent from "@testing-library/user-event";

test("Header should render app Title", () => {
    render (
        <Provider store={store}>
            <Router>
                <Header />
            </Router>
        </Provider>
       
    )

    screen.getByText("Koekboek!")
});

test("Clicking the app Tile text should return to the homepage", ()=>{
    render (
        <Provider store={store}>
            <Router>
                <Header />
            </Router>
        </Provider>
       
    )

    const title = screen.getByText("Koekboek!");
    expect(title).toBeDefined();

    userEvent.click(title);

    const path = document.location.pathname;
    expect(path).toEqual("/");
});

