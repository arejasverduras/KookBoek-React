import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { selectAllRecipehs, setCurrentRecipeh, setSearchTerm } from "../../recipehSlice";

export const RecipehTile = ({title, id, resetHandler}:any)=>{
    const dispatch = useAppDispatch();
    const allRecipehs = useAppSelector(selectAllRecipehs);

    
    const recipehById = allRecipehs.find(recipeh => recipeh.id === id);
    
    const clickHandler = () => {
        dispatch(setCurrentRecipeh(id));
        if (resetHandler){
            dispatch(setSearchTerm(""))
        }
    } 
    
    if (recipehById !== undefined){
        return (
            <li className="recipehTile"  onClick={clickHandler}>
                <h3 title={title? title: ""}>{recipehById.naam}</h3>
                <img style={{width: 100}}className="" src={recipehById.picture === null? "/images/bord-geen-fotores.png": recipehById.picture} alt="" />
            </li>
        )
    } else {
        return (
            <>
            
            </>
        )
    }


}