import React from "react";
import { useAppSelector } from "../../../app/hooks";
import { selectVisitedRecipehs } from "../recipehSlice";
import { RecipehTile } from "./RecipehTile/RecipehTile";

export const VisitedList = () => {
    const visitedList = useAppSelector(selectVisitedRecipehs);

    const visitedListItems = visitedList.map(id => 
        <li>{<RecipehTile id={id} />}</li>)
        
    
    return (
        <>
    <ul>

    </ul>
        </>
    )
}