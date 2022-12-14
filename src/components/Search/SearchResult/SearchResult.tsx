import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getSearchResults, selectSearchResult, selectSearchTerm, setCurrentRecipeh } from "../../Recipehs/recipehSlice";
import { RecipehTile } from "../../Recipehs/VisitedList/RecipehTile/RecipehTile";

export const SearchResult = () => {
    const searchTerm = useAppSelector(selectSearchTerm);
    const searchResult = useAppSelector(selectSearchResult)
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(getSearchResults(searchTerm))
    },[searchTerm])

    let result;

    const resultClickHandler = (id:number) => {
        dispatch(setCurrentRecipeh(id))
    }

    if (searchResult.length > 0){
        result = searchResult.map(result => 
                    <RecipehTile id={result.id} key={result.id} resetHandler={false} />
        )
    }

    if (searchTerm !== ""){
        return (
            <div className="searchResult">
                <ul className="resultList">
                    {result}
                </ul>
                
            </div>
        )
    }

    return (
        <div className="searchResultSpaceHolder">
            <p>Find the recipeh you are craving for!</p>
        </div>
    )
};
