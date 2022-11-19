import React , {useEffect} from "react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { selectCurrentRecipeh, setCurrentRecipeh, addToVisited } from "../recipehSlice";
import { useParams } from "react-router-dom";

export const Recipeh = () => {
    const current = useAppSelector(selectCurrentRecipeh);

    const dispatch = useAppDispatch();

    const params = useParams();
    let id = Number(params.recipehId);
    console.log(`id = ${id}`);
    console.log(typeof id);

    useEffect(()=>{
        if (id !== undefined) {
            dispatch(setCurrentRecipeh(id));
        }    
        },[id])

        useEffect(()=>{
            if(typeof current !== 'string' && current !== null){
                dispatch(addToVisited(current.id));
            }
        },[current]);
    
        console.log(current);

    if (current !== null && typeof current !== 'string'){

    return (
        <div style = {{
            maxWidth: '90%',
            border: '1px solid black',
            borderRadius: 15,
            boxShadow: 'black 5px 5px',
            margin: '0 auto',
            paddingBottom: 50
            }}>
                <h1>{current.naam}</h1>
                <img style={{height: 200}}className="" src={current.picture === null? "/images/bord-geen-fotores.png": current.picture} alt="" />
                <p>{current.voorkeur}</p>
        </div>
    )
        } else {
            return (
                <>
                    <p>Recipeh not found!</p>
                </>
            )
        }
};
