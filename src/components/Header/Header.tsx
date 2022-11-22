import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { resetAll } from "../Recipehs/recipehSlice";

export const Header = ()=> {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const clickHandler = () => {
        navigate("/");
        dispatch(resetAll());
    }
    
    return (
        <div  className="Header">
            <h1 onClick={clickHandler} id="headerTitle">Koekboek!</h1>

            <p>Personal Random Recipehs</p>

        </div>

    )
}