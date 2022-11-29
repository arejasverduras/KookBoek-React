import React from "react";
import { capitalize } from "../../../features/recipehFeatures";
import { ToggleFavoriteButton } from "../../FavoritesList/toggleFavoriteButton/toggleFavortieButton";


export const Recipeh =({current}:any) => {
    const ingredientsList = current.ingredienten.map((ingredient:string, index:number) => <li key={index}>{capitalize(ingredient)}</li>);
    const instructionList = current.instructie.map((instructie:string, index:number)=> <li key={index}>{instructie}</li>);

    return (
        <div className="recipeh" title="recipeh">
            <div className="recipehTopSection"
                    style={{backgroundImage: `url(${current.picture === null? "/images/bord-geen-fotores.png": current.picture})`
                    }}>
                <ToggleFavoriteButton className="CurrentRecipehFavoriteButton" id={current.id} />
                <h1 id="recipehTitle" title="realRecipehTitle">{current.naam}</h1>
                
                {/* <img src={current.picture === null? "/images/bord-geen-fotores.png": current.picture} alt="" /> */}
                <div className="recipehMetaList">
                    <div >{current.voorkeur}</div>
                    <div >{current.kooktijd}</div>
                    <div>{current.categorie}</div>
                </div>
            </div>
            
            <div className="recipehTextContainer">
                <div className="recipehIngredientenSection">
                    <h2>Ingredienten</h2>
                    <ul className="recipehIngredientsList">
                        {ingredientsList}
                    </ul>
                </div>
                {current.instructie.length > 0 ? 
                <div className="recipehInstructionSection">
                    <h2>Instructies</h2>
                    <ol className="recipehInstructionList">
                        {instructionList}
                    </ol>
                </div>
                : null}
            </div>
        </div>
   
    )
}