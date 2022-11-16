import React from "react";

export const Recipeh = ({current}:any) => {

    return (
        <>
            <p>ID: {current.id}</p>
            <h1>{current.naam}</h1>
            <img src={current.picture === null? "/images/bord-geen-fotores.png": current.picture} alt="" />
        </>
    )
};
