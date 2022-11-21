import React from "react";
import { RandomButton } from "./RandomButton/RandomButton";
import { VisitedList } from "./VisitedList/VisitedList";
import { RecipehHeader } from "./RecipehHeader/RecipehHeader";
import { RecipehContainer } from "./Recipeh/RecipehContainer";
import { SearchResult } from "./RecipehHeader/Search/SearchResult/SearchResult";

export const Recipehs = () => {
    return (
        <>
            <RecipehHeader />
            <SearchResult />
            <RandomButton />
            <RecipehContainer />
            <VisitedList />
        </>
    )
};
