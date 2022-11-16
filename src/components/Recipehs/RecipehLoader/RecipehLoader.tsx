import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector,  } from "../../../app/hooks";
import { addToVisited, selectCurrentRecipeh } from "../recipehSlice";
import { Recipeh } from "../Recipeh/Recipeh";
import { Recepeh } from "../../../database";


export const RecipehLoader = () => {
    const recipeh: Recepeh | null | string = useAppSelector(selectCurrentRecipeh);
    const dispatch = useAppDispatch();

    // const [finishedList, setFinishedList] = useState();

    useEffect(()=>{
        if(typeof recipeh !== 'string' && recipeh !== null){
            dispatch(addToVisited(recipeh.id));
        }
    },[recipeh])

    if (typeof recipeh === 'string'){
        return (
            <>
                <h1>No more recipehs!</h1>
            </>
        )
    } else if (recipeh !== null){
        return (
            <>
                <Recipeh current={recipeh}/>
            </>
        )
    }

    return (
        <>
            <h1>Hit the button!</h1>
        </>
    )
};
