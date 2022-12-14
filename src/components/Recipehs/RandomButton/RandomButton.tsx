import React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { randomRecipeh, selectCurrentRecipeh } from "../recipehSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRandom } from "@fortawesome/free-solid-svg-icons";

export const RandomButton = ({name, iconColor}:any) => {
    const dispatch = useAppDispatch();

    const current = useAppSelector(selectCurrentRecipeh);

    const clickHandler = () => {
        dispatch(randomRecipeh());
        if (current !== null && typeof current !== 'string'){
    }
    }

    return (
            <button className={name || "randomButton"} id="randomButton" onClick={clickHandler} title="random" >
                Random recipeh! <FontAwesomeIcon icon={faRandom} color={iconColor || 'orange'} />
            </button>
    )
}