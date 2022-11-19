import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import { getSearchResults, selectSearchResult, selectSearchTerm, setCurrentRecipeh } from "../../../recipehSlice";

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
                    <h3 onClick={()=>resultClickHandler(result.id)}>{result.naam}</h3>
        )
    }

    if (searchTerm !== ""){
        return (
            <div className="searchResult">
                <h2>Recipehs for {searchTerm}</h2>
                {result}
            </div>
        )
    }

    return (
        <>
        </>
    )
};
