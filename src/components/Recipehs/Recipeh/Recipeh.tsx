import React from "react";


export const Recipeh =({current}:any) => {
    const ingredientsList = current.ingredienten.map((ingredient:string, index:number) => <li key={index}>{ingredient}</li>);
    const instructionList = current.instructie.map((instructie:string, index:number)=> <li key={index}>{instructie}</li>);

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
            {current.instructie.length > 0 ? 
            <>
                <h2>Instructies</h2>
                <ul className="recipehInstructionList">
                    {instructionList}
                </ul>
            </>
            : null}
        </div>
   
    )
}