import React from "react";
import { Link } from "react-router-dom";

export const Header = ()=> {
    
    
    return (
        <div className="Header">
            <Link to="/"><h1 id="headerTitle">Koekboek!</h1></Link>
            
            <p>Personal Random Recipehs</p>
        </div>
    )
}