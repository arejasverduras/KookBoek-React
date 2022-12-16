import React from "react";
import { capitalize } from "../../../features/recipehFeatures";
import { faUtensils, faLeaf, faSeedling, faCow, faFish, faClock, faPastafarianism, faBowlFood } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToggleFavoriteButton } from "../../FavoritesList/toggleFavoriteButton/toggleFavortieButton";


export const Recipeh =({current}:any) => {
    const ingredientsList = current.ingredienten.map((ingredient:string, index:number) => <li key={index}>{capitalize(ingredient)}</li>);
    const instructionList = current.instructie.map((instructie:string, index:number)=> <li key={index}>{instructie}</li>);

    const iconMap = new Map();
    iconMap.set('alles', faUtensils);
    iconMap.set('vega', faLeaf);
    iconMap.set('vegan', faSeedling);
    iconMap.set('vlees', faCow);
    iconMap.set('vis', faFish);
    iconMap.set('kooktijd', faClock);
    iconMap.set('categorie', faBowlFood)


    return (
        <div className="recipeh" title="recipeh" id="recipehTop">
            <h1 id="recipehTitle" title="realRecipehTitle">{current.naam}</h1>
            <div className="recipehTopSection"
                    style={{backgroundImage: `url(${current.picture === null? "/images/bord-geen-fotores.png": current.picture})`
            }}>
                
                <ToggleFavoriteButton className="CurrentRecipehFavoriteButton" id={current.id} />
            </div>
            

                {/* Extract to component?  */}
            <div className="recipehMetaList">
                    <div className="recipehMeta filter" ><FontAwesomeIcon icon={iconMap.get(current.voorkeur)} />{capitalize(current.voorkeur)}</div>
                    <div className="recipehMeta cooktime"><FontAwesomeIcon icon={iconMap.get('kooktijd')} />{current.kooktijd} min.</div>
                    <div className="recipehMeta category"><FontAwesomeIcon icon={iconMap.get('categorie')} />{capitalize(current.categorie)}</div>
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