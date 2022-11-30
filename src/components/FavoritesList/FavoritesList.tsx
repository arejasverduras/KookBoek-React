import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectFavorites } from "../Recipehs/recipehSlice";
import { FavoritesTile } from "./FavoritesTile/FavoritesTile";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons";


export const FavoritesList = () => {
    const favorites = useAppSelector(selectFavorites);
    const favoritesInTheList = favorites.length > 0? true : false;
    
    if (favoritesInTheList){
        const favoritesListItems = favorites.map((favoriteId, index) => 
                <FavoritesTile key={favoriteId} title="favoritesListItem" id={favoriteId} showFavorite={true}/>
        )

    return(
        <div className="favoritesListComponent" >
            <ul title="favoritesList" className="favoritesList">
                {favoritesListItems}
            </ul>
        </div>  
    )} else {
        return (
            <div className="favoriteListEmpty">
                <p>Your favorites will appear here.</p>
                <FontAwesomeIcon icon={faHeart} className="noFavoritesHeart" size='2x' />
                <p> Click the Heart on a Recipeh page to add the recipeh to your favorites!</p>
            </div>
        )
    }
};
