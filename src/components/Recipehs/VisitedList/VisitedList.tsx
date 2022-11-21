import React from "react";
import { useAppSelector } from "../../../app/hooks";
import { selectVisitedRecipehs } from "../recipehSlice";
import { RecipehTile } from "./RecipehTile/RecipehTile";

export const VisitedList = () => {
    const visitedList = useAppSelector(selectVisitedRecipehs);

    const visitedListItems = visitedList.map(id => 
        <div key={id}>
            <RecipehTile id={id} />
        </div>)
        
    return (
        <>
            <ul className="visitedList" >
                {visitedListItems}
            </ul>
        </>
    )
}