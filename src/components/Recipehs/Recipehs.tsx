import React from "react";
import { RecipehLoader } from "./RecipehLoader/RecipehLoader";
import { RandomButton } from "./RandomButton/RandomButton";
import { VisitedList } from "./VisitedList/VisitedList";
import { RecipehHeader } from "./RecipehHeader/RecipehHeader";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

export const Recipehs = () => {
    return (
        <>
            <RecipehHeader />
            <RandomButton />
            <Outlet />
            {/* <RecipehLoader /> */}
            <VisitedList />
        </>
    )
};
