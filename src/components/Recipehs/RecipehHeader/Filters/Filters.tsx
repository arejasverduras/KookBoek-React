import React from "react";
import { useAppDispatch } from "../../../../app/hooks";
import { setFilter } from "../../recipehSlice";

export const Filters = () => {
    const dispatch = useAppDispatch();

    const toggleFilter = ({target}:any) => {
        dispatch(setFilter(target.value))
    }
    
    return (
        <div className="Filters">
            <button className="voorkeur" onClick={toggleFilter} value="alles">Alles</button>
            <button className="voorkeur" onClick={toggleFilter} value="vega">Vega</button>
            <button className="voorkeur" onClick={toggleFilter} value="vegan">Vegan</button>
            <button className="voorkeur" onClick={toggleFilter} value="vlees">Vlees</button>
            <button className="voorkeur" onClick={toggleFilter} value="vis">Vis</button>
        </div>
    )
};

// value === filter? className="active voorkeur": voorkeur;
