import React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { randomRecipeh, addToVisited, selectCurrentRecipeh } from "../recipehSlice";

export const RandomButton = () => {
    const dispatch = useAppDispatch();

    const current = useAppSelector(selectCurrentRecipeh);

    const clickHandler = () => {
        dispatch(randomRecipeh());
        if (current !== null){
        dispatch(addToVisited(current.id))
    }
    }

    return (
            <button id="randomButton" onClick={clickHandler}>Click me!</button>
    )
}