import React from "react";
import { HeaderTabsContainer } from "../../HeaderTabsContainer/HeaderTabsContainer";

export const RecipehHeader = () => {
    return (
        <div className="recipehHeader">
            <div className="recipehHeaderItemsContainer">
                <HeaderTabsContainer />
                {/* <Filters /> */}
                {/* <Search /> */}
            </div>
        </div>
    )
};
