import React, {useState} from "react";
import { Filters } from "../Recipehs/RecipehHeader/Filters/Filters";
import { FavoritesList } from "../FavoritesList/FavoritesList";

export const SidePanel = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () =>{
        setVisible(!visible)
    }

    return (
        <div 
            onClick={visible? ()=>{}:toggleVisible} 
            className={visible? "sidePanel Visible": "sidePanel Hidden"}
        >
            {visible? 
            <>  
                <div 
                    onClick={toggleVisible}
                    className="sidePanelCross"
                >
                    X
                </div>
                <div className="panelFilters">
                    <h2>Filters</h2>
                    <Filters />    
                </div>
                <div className="panelFavorites">
                    <FavoritesList />
                </div>
            </>
            :null}
            
            
        </div >
    )
}