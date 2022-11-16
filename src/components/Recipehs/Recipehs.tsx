import React from "react";
import { RecipehLoader } from "./RecipehLoader/RecipehLoader";
import { RandomButton } from "./RandomButton/RandomButton";

export const Recipehs = () => {
    return (
        <>
            <RandomButton />
            <RecipehLoader />
        </>
    )
};
