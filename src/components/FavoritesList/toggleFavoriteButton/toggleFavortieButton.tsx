import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { addFavorite, removeFavorite, selectFavorites } from '../../Recipehs/recipehSlice';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHeart} from '@fortawesome/free-solid-svg-icons';

export const ToggleFavoriteButton = ({id}:any)=> {
    const dispatch = useAppDispatch();
    const favorites = useAppSelector(selectFavorites);
    
    const isFavorite = favorites.find(favoriteId => favoriteId === id);

    //logic to remove from favorites
    const handleClickRemove = () => {
        dispatch(removeFavorite(id));
    }
    
    //logic to add to favorites
    const handleClickAdd = () => {
        dispatch(addFavorite(id));
    }

    if (!isFavorite) {
        return (
            <>
            <button 
                className='FavoritesButton Plus'
                onClick={handleClickAdd}
                title="addFavorite"
                >
                <FontAwesomeIcon 
                    icon={faHeart} 
                    size="2x"
                    className='faHeartPlus'
                    />
        </button>

        </>
        )
    } else {

    return (
            <button 
                className='FavoritesButton Minus'
                onClick={handleClickRemove} 
                title="removeFavorite">
                  <FontAwesomeIcon 
                    icon={faHeart}
                    size="2x"
                    className="faHeartMinus"
                    />
    </button>
    )
    }


}
