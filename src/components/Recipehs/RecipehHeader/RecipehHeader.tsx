import React from "react";
import { HeaderTabsContainer } from "./HeaderTabsContainer/HeaderTabsContainer";
import { Filters } from "./Filters/Filters";
import { Search } from "./Search/Search";


export const RecipehHeader = () => {
    return (
        <div className="recipehHeader">
            <div className="recipehHeaderItemsContainer">
                <HeaderTabsContainer />
                {/* <Filters /> */}
                <Search />
            </div>
        </div>
    )
};
