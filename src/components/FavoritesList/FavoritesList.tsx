import React from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectFavorites, removeFavorite } from "../Recipehs/recipehSlice";
import { RecipehTile } from "../Recipehs/VisitedList/RecipehTile/RecipehTile";


export const FavoritesList = () => {
    const favorites = useAppSelector(selectFavorites);
    const dispatch = useAppDispatch();

    const favoritesInTheList = favorites.length > 0? true : false;
    
    if (favoritesInTheList){
        const removeFavoriteButtonClickHanlder = (id:number) => {
            dispatch(removeFavorite(id));
        }
        const favoritesListItems = favorites.map((favoriteId, index) => 
        <div key={index}>
                <RecipehTile title="favoritesListItem" id={favoriteId} />
                <button title="removeFavorite" onClick={()=>removeFavoriteButtonClickHanlder(favoriteId)}>Remove</button>
        </div>
        )

    return(
        <div className="FavoriteList">
            <h3>Favorites</h3>
            <ul title="favoritesList">
                {favoritesListItems}
            </ul>
        </div>  
    )} else {
        return (
            <>
            </>
        )
    }
}