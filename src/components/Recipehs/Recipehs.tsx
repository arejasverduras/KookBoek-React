import React from "react";
import { RandomButton } from "./RandomButton/RandomButton";
import { VisitedList } from "./VisitedList/VisitedList";
import { RecipehHeader } from "./RecipehHeader/RecipehHeader";
import { Recipeh } from "./Recipeh/Recipeh";

export const Recipehs = () => {
    return (
        <>
            <RecipehHeader />
            <RandomButton />
            <Recipeh />
            <VisitedList />
        </>
    )
};
