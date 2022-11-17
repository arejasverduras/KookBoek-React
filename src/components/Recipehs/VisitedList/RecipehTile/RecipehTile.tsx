import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { selectAllRecipehs, setCurrentRecipeh } from "../../recipehSlice";

export const RecipehTile = ({id}:any)=>{
    const dispatch = useAppDispatch();
    const allRecipehs = useAppSelector(selectAllRecipehs);
    const recipehById = allRecipehs.find(recipeh => recipeh.id === id);
    
    const clickHandler = () => {
        dispatch(setCurrentRecipeh(id));
    } 
    
    if (recipehById !== undefined){
        return (
            <li onClick={()=>{
                clickHandler()
            }} style={{margin: 10, border: "1px solid black", borderRadius: 15, padding: 10, boxShadow: 'black 5px 5px'}}>
                <h3>{recipehById.naam}</h3>
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