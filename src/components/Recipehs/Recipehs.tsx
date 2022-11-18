import React from "react";
import { RecipehLoader } from "./RecipehLoader/RecipehLoader";
import { RandomButton } from "./RandomButton/RandomButton";
import { VisitedList } from "./VisitedList/VisitedList";
import { RecipehHeader } from "./RecipehHeader/RecipehHeader";

export const Recipehs = () => {
    return (
        <>
            <RecipehHeader />
            <RandomButton />
            <RecipehLoader />
            <VisitedList />
        </>
    )
};
