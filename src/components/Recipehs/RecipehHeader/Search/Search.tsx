import React from "react";
import { useAppSelector } from "../../../../app/hooks";
import { SearchBar } from "./SearchBar/SearchBar";


export const Search = () => {

    return (
        <div className="search">
            <SearchBar />
        </div>
    )
};
