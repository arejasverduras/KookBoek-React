import React, {useState} from "react";
import { useAppSelector } from "../../app/hooks";
import { selectFavorites } from "../Recipehs/recipehSlice";
import { FavoritesTile } from "./FavoritesTile/FavoritesTile";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons";


export const FavoritesList = () => {
    const favorites = useAppSelector(selectFavorites);
    const favoritesInTheList = favorites.length > 0? true : false;

    const [showFavorites, toggleFavorites] = useState(false);

    const toggleFavoritesHandler = () => {
        toggleFavorites(showFavorites? false: true)
    }
    
    if (favoritesInTheList){
        const favoritesListItems = favorites.map((favoriteId, index) => 
                <FavoritesTile key={favoriteId} title="favoritesListItem" id={favoriteId} showFavorite={true}/>
        )

    return(
        <div className="favoritesListComponent" >
            <div  onClick={toggleFavoritesHandler} >
              <h3 className={showFavorites? "showHideFavoritesOpen": "showHideFavoritesClosed"}>
                {showFavorites? 'Hide': 'My'} Favorites <FontAwesomeIcon 
                    icon={faHeart} 
                    className={showFavorites? "faHeartPlus":"faHeartMinus"}/>
                </h3>
            </div>
            <ul title="favoritesList" className="favoritesList">
                {showFavorites? favoritesListItems:null}
            </ul>
        </div>  
    )} else {
        return (
            <>
            </>
        )
    }
}