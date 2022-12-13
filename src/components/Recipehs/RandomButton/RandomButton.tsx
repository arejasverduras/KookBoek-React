import React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { randomRecipeh, selectCurrentRecipeh } from "../recipehSlice";

export const RandomButton = () => {
    const dispatch = useAppDispatch();

    const current = useAppSelector(selectCurrentRecipeh);

    const clickHandler = () => {
        dispatch(randomRecipeh());
        if (current !== null && typeof current !== 'string'){
    }
    }

    return (
            <button id="randomButton" onClick={clickHandler} title="random" >Give me a random recipeh!</button>
    )
}