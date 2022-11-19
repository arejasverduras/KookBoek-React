import React , {useEffect} from "react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { selectCurrentRecipeh, setCurrentRecipeh, addToVisited } from "../recipehSlice";
import { useParams } from "react-router-dom";

export const Recipeh = () => {
    const dispatch = useAppDispatch();
    const params = useParams();

    const current = useAppSelector(selectCurrentRecipeh);

    let id = Number(params.recipehId);

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

    if (typeof current === 'string'){
        return (
            <>
                <h1>No more recipehs!</h1>
            </>
        )
    } else if (current !== null ){

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
                    <h1>Hit the button!</h1>
                </>
            )
        }
};
