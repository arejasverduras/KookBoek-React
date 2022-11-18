import React from "react";

export const Recipeh = ({current}:any) => {

    return (
        <div style = {{
            maxWidth: '90%',
            border: '1px solid black',
            borderRadius: 15,
            boxShadow: 'black 5px 5px',
            margin: '0 auto',
            paddingBottom: 50
            }}>
            {/* <p>ID: {current.id}</p> */}
            <h1>{current.naam}</h1>
            <img style={{height: 200}}className="" src={current.picture === null? "/images/bord-geen-fotores.png": current.picture} alt="" />
            <p>{current.voorkeur}</p>
        </div>
    )
};
