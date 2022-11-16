import React from "react";
import { useAppDispatch } from "../../../app/hooks";
import { randomRecipeh } from "../recipehSlice";

export const RandomButton = () => {
    const dispatch = useAppDispatch();

    const clickHandler = () => {
        dispatch(randomRecipeh());
    }

    return (
            <button id="randomButton" onClick={clickHandler}>Click me!</button>
    )
}