import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { setFilter, selectFilter } from "../../recipehSlice";

export const Filters = () => {
    const dispatch = useAppDispatch();
    const filter = useAppSelector(selectFilter);

    const toggleFilter = ({target}:any) => {
        dispatch(setFilter(target.value))
    }

    //later: create a filters object
    //move all available filters to a filtersSlice in the store
    //then generate available options here

    const voorkeurOptions = ["Alles", "Vega", "Vegan", "Vlees", "Vis"];

    const voorkeurButtons = voorkeurOptions.map(voorkeur => 
        <button className={voorkeur === filter? "voorkeur active": "voorkeur"} 
                onClick={toggleFilter} 
                value={voorkeur}>{voorkeur}
        </button>
        )
    
    return (
        <div className="Filters">
            {voorkeurButtons}
        </div>
    )
};
