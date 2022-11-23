import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
// import { store } from "../../app/store";
import { setupStore } from "../../app/store";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./Header";
import { renderWithProviders } from "../../utils-test";
import userEvent from "@testing-library/user-event";

test("Header should render app Title", () => {
    renderWithProviders(
        <Header />
    )

    screen.getByText("Koekboek!")
});

test("Clicking the app Tile text should return to the homepage", ()=>{
    renderWithProviders(
        <Header />
    )

    const title = screen.getByText("Koekboek!");
    expect(title).toBeDefined();

    userEvent.click(title);

    const path = document.location.pathname;
    expect(path).toEqual("/");
});

