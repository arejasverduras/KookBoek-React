import React from "react";
import { RandomButton } from "./RandomButton/RandomButton";
import { VisitedList } from "./VisitedList/VisitedList";
import { RecipehHeader } from "./RecipehHeader/RecipehHeader";
import { Recipeh } from "./Recipeh/Recipeh";
import { SearchResult } from "./RecipehHeader/Search/SearchResult/SearchResult";

export const Recipehs = () => {
    return (
        <>
            <RecipehHeader />
            <SearchResult />
            <RandomButton />
            <Recipeh />
            <VisitedList />
        </>
    )
};
