import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectFavorites } from "../Recipehs/recipehSlice";
import { RecipehTile } from "../Recipehs/VisitedList/RecipehTile/RecipehTile";
import { FavoritesTile } from "./FavoritesTile/FavoritesTile";
import { ToggleFavoriteButton } from "./toggleFavoriteButton/toggleFavortieButton";


export const FavoritesList = () => {
    const favorites = useAppSelector(selectFavorites);

    const favoritesInTheList = favorites.length > 0? true : false;
    
    if (favoritesInTheList){
        // const removeFavoriteButtonClickHanlder = (id:number) => {
        //     dispatch(removeFavorite(id));
        // }
        const favoritesListItems = favorites.map((favoriteId, index) => 
                // <RecipehTile title="favoritesListItem" id={favoriteId} showFavorite={true}/>
                <FavoritesTile title="favoritesListItem" id={favoriteId} showFavorite={true}/>
        )

    return(
        <div className="favoritesListComponent">
            <h3>Favorites</h3>
            <ul title="favoritesList" className="favoritesList">
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