import React from "react";


export const Recipeh =({current}:any) => {
    const ingredientsList = current.ingredienten.map((ingredient:string) => <li>{ingredient}</li>)


    return (
        <div className="recipeh">
            <h1 id="recipehTitle">{current.naam}</h1>
            <img src={current.picture === null? "/images/bord-geen-fotores.png": current.picture} alt="" />
            <div className="recipehMetaList">
                <div >{current.voorkeur}</div>
                <div >{current.kooktijd}</div>
                <div>{current.categorie}</div>
            </div>
            <h2>Ingredienten</h2>
            <ul className="recipehIngredientsList">
                {ingredientsList}
            </ul>
        </div>
   
    )
}