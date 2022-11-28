import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { selectAllRecipehs, selectRecipehHash, setCurrentRecipeh, setSearchTerm, addToRecipehHash } from "../../recipehSlice";
import { ToggleFavoriteButton } from "../../../FavoritesList/toggleFavoriteButton/toggleFavortieButton";

export const RecipehTile = ({title, id, resetHandler, showFavorite}:any)=>{
    const dispatch = useAppDispatch();
    const allRecipehs = useAppSelector(selectAllRecipehs);
    const recipehHash = useAppSelector(selectRecipehHash);

    let recipehById;
    if (allRecipehs[recipehHash[id]] !== undefined){
        recipehById = allRecipehs[recipehHash[id]];
        // console.log("tile rendered with Hash!")
    } else {
        recipehById = allRecipehs.find(recipeh => recipeh.id === id);
        dispatch(addToRecipehHash(id))
        // console.log("title NOT rendered with Hash")
    }

    const clickHandler = () => {
        dispatch(setCurrentRecipeh(id));
        if (resetHandler){
            dispatch(setSearchTerm(""))
        }
    } 
    
    if (recipehById !== undefined){
        return (
            <li className="recipehTile" title={title? `favorite ${recipehById.naam}`: ""} onClick={clickHandler}>
                <h3 title={title? title: ""}>{recipehById.naam}</h3>
                <img style={{width: 100}}className="" src={recipehById.picture === null? "/images/bord-geen-fotores.png": recipehById.picture} alt="" />
                {showFavorite? <ToggleFavoriteButton id={id} /> : null }
            </li>
        )
    } else {
        return (
            <>
            
            </>
        )
    }


}