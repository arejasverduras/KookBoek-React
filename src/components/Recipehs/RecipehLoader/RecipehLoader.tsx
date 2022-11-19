import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector,  } from "../../../app/hooks";
import { addToVisited, selectCurrentRecipeh, setCurrentRecipeh } from "../recipehSlice";
import { Recipeh } from "../Recipeh/Recipeh";
import { Recepeh } from "../../../database";
import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";                      


export const RecipehLoader = () => {
    const recipeh: Recepeh | null | string = useAppSelector(selectCurrentRecipeh);
    const dispatch = useAppDispatch();

    const params = useParams();
    let id = params.recipehId;
    console.log(`id = ${id}`);

    useEffect(()=>{
        if (id !== undefined) {
            dispatch(setCurrentRecipeh(id));
        }    
        },[id])

    useEffect(()=>{
        if(typeof recipeh !== 'string' && recipeh !== null){
            dispatch(addToVisited(recipeh.id));
        }
    },[recipeh]);

    if (typeof recipeh === 'string'){
        return (
            <>
                <h1>No more recipehs!</h1>
            </>
        )
    } else if (recipeh !== null){
        return (
            <>
                <Recipeh />
            </>
        )
    }

    return (
        <>
            <h1>Hit the button!</h1>
        </>
    )
};
