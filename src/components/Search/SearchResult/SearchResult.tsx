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
                    // <h3 key={result.id} onClick={()=>resultClickHandler(result.id)}>{result.naam}</h3>
                    <RecipehTile id={result.id} key={result.id} resetHandler={true} />
        )
    }

    if (searchTerm !== ""){
        return (
            <div className="searchResult">
                {/* <h2>Recipehs for {searchTerm}</h2> */}
                <ul className="resultList">
                    {result}
                </ul>
                
            </div>
        )
    }

    return (
        <>
        </>
    )
};
