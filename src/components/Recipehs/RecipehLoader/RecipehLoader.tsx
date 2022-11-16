import React from "react";
import { useAppSelector,  } from "../../../app/hooks";
import { selectCurrentRecipeh } from "../recipehSlice";
import { Recipeh } from "../Recipeh/Recipeh";
import { Recepeh } from "../../../database";


export const RecipehLoader = () => {

    const recipeh: Recepeh | null = useAppSelector(selectCurrentRecipeh);

    if (recipeh !== null){
        return (
            <Recipeh current={recipeh}/>
        )
    }

    return (
        <>
        <h1>Hit the button!</h1>
        </>
    )
};
