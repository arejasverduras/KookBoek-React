import React, { useEffect } from "react";
import { RandomButton } from "./RandomButton/RandomButton";
import { VisitedList } from "./VisitedList/VisitedList";
import { RecipehHeader } from "./RecipehHeader/RecipehHeader";
import { RecipehContainer } from "./Recipeh/RecipehContainer";
import { SearchResult } from "./RecipehHeader/Search/SearchResult/SearchResult";
import { FavoritesList } from "../FavoritesList/FavoritesList";
import { fillRecipehHash } from "./recipehSlice";
import { useAppDispatch } from "../../app/hooks";

export const Recipehs = () => {
    const dispatch = useAppDispatch();
    
    useEffect(()=>{
        dispatch(fillRecipehHash())
    },[])

    return (
        <>
            <RecipehHeader />
            <SearchResult />
            <FavoritesList />
            <RandomButton />
            <RecipehContainer />
            <VisitedList />
        </>
    )
};
