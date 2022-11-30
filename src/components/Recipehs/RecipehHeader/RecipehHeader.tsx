import React from "react";
import { Filters } from "./Filters/Filters";
import { Search } from "./Search/Search";


export const RecipehHeader = () => {
    return (
        <div className="recipehHeader">
            <div className="recipehHeaderItemsContainer">
                {/* <Filters /> */}
                <Search />
            </div>
        </div>
    )
};
