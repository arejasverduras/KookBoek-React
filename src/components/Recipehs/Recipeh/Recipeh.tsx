import React from "react";

export const Recipeh = ({current}:any) => {

    return (
        <>
            <p>ID: {current.id}</p>
            <h1>{current.naam}</h1>
        </>
    )
};
