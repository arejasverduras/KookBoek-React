import React from "react";
import { useAppSelector } from "../../../../../app/hooks";
import { selectSearchTerm } from "../../../recipehSlice";

export const SearchResult = () => {
    const searchTerm = useAppSelector(selectSearchTerm);

    if (searchTerm !== ""){
        return (
            <div className="searchResult">
                <h2>Recipehs for {searchTerm}</h2>
            </div>
        )
    }

    return (
        <>
        </>
    )
};
