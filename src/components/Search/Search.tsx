import React from "react";
import { SearchBar } from "./SearchBar/SearchBar";
import { SearchResult } from "./SearchResult/SearchResult";


export const Search = () => {

    return (
        <div className="search">
            <SearchBar />
            <SearchResult />
        </div>
    )
};
