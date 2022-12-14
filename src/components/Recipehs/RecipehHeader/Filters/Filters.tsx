import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { setFilter, selectFilter, randomRecipeh } from "../../recipehSlice";
import { capitalize } from "../../../../features/recipehFeatures";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faSeedling, faUtensils, faFish, faCow } from "@fortawesome/free-solid-svg-icons";

export const Filters = () => {
    const dispatch = useAppDispatch();
    const filter = useAppSelector(selectFilter);

    const toggleFilter = ({target}:any) => {
        dispatch(setFilter(target.value))
        dispatch(randomRecipeh());
    }

    //later: create a filters object
    //move all available filters to a filtersSlice in the store
    //then generate available options here

    const voorkeurOptions = ["alles", "vega", "vegan", "vlees", "vis"];

    const iconMap = new Map();
    iconMap.set('alles', faUtensils);
    iconMap.set('vega', faLeaf);
    iconMap.set('vegan', faSeedling);
    iconMap.set('vlees', faCow);
    iconMap.set('vis', faFish);

    const voorkeurButtons = voorkeurOptions.map(voorkeur => 
        <button key={voorkeur} className={voorkeur === filter? "voorkeurButton active": "voorkeurButton"} 
                onClick={toggleFilter} 
                value={voorkeur}>
                <FontAwesomeIcon icon={iconMap.get(voorkeur)} /><br/> {capitalize(voorkeur)}
        </button>
        )
    
    return (
        <div className="Filters">
            {voorkeurButtons}
        </div>
    )
};
