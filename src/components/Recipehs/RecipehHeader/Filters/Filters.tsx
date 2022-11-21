import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { setFilter, selectFilter } from "../../recipehSlice";
import { capitalize } from "../../../../features/recipehFeatures";

export const Filters = () => {
    const dispatch = useAppDispatch();
    const filter = useAppSelector(selectFilter);

    const toggleFilter = ({target}:any) => {
        dispatch(setFilter(target.value))
    }

    //later: create a filters object
    //move all available filters to a filtersSlice in the store
    //then generate available options here

    const voorkeurOptions = ["alles", "vega", "vegan", "vlees", "vis"];

    const voorkeurButtons = voorkeurOptions.map(voorkeur => 
        <button key={voorkeur} className={voorkeur === filter? "voorkeurButton active": "voorkeurButton"} 
                onClick={toggleFilter} 
                value={voorkeur}>{capitalize(voorkeur)}
        </button>
        )
    
    return (
        <div className="Filters">
            {voorkeurButtons}
        </div>
    )
};
