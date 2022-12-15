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
        <div className="visitedListContainer" style={visitedList.length < 1? {display:'none'}:{}}>
            <h2>{visitedListItems.length >0? "Visited Recipehs": ""}</h2>
            <ul className="visitedList" >
                {visitedListItems}
            </ul>
        </div>
    )
}