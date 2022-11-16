import React from "react";
import { RecipehLoader } from "./RecipehLoader/RecipehLoader";
import { RandomButton } from "./RandomButton/RandomButton";
import { VisitedList } from "./VisitedList/VisitedList";

export const Recipehs = () => {
    return (
        <>
            <RandomButton />
            <RecipehLoader />
            <VisitedList />
        </>
    )
};
