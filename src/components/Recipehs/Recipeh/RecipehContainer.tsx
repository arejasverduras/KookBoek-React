import React , {useEffect} from "react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { selectCurrentRecipeh, setCurrentRecipeh, addToVisited, resetAll } from "../recipehSlice";
import { useNavigate, useParams } from "react-router-dom";
import { Recipeh } from "./Recipeh";

export const RecipehContainer = () => {
    const dispatch = useAppDispatch();
    const params = useParams();
    const navigate = useNavigate();

    const current = useAppSelector(selectCurrentRecipeh);
 
    let id = Number(params.recipehId);

    const clickHandler = () => {
        navigate("/");
        dispatch(resetAll());
    }
    //scroll into view
    const scrollToSpot = () =>{
        if (current)
            {
            const title = document.getElementById("recipehTitle");
        if (title !== null )
            {
            title.scrollIntoView({behavior: 'smooth'});
            }
        }
        else {
            return
        }
    }

    // set pageTitle
    const setPageTitle = () => {
        if (typeof current !== 'string' && current !== null){
        document.title = `Koekboek! - ${current.naam}`}
    }

    useEffect(scrollToSpot, [current]);
    useEffect(setPageTitle, [current]);

    useEffect(()=>{
        if (current !== null && typeof current !== 'string'){
            navigate(`/recipehs/${current.id}`);
    }
    },[current])
    
    useEffect(()=>{
        if (id !== undefined) {
            dispatch(setCurrentRecipeh(id));
        }    
        },[id]);

        useEffect(()=>{
           
        },[id])

        useEffect(()=>{
            if(typeof current !== 'string' && current !== null){
                dispatch(addToVisited(current.id));
            }
        },[current]);

    if (typeof current === 'string'){
        return (
            <>
                <h1 id="recipehTitle">No more recipehs!</h1>
                <button className="secondaryButton" onClick={clickHandler}>Reload</button>
            </>
        )
    } else if (current !== null ){

    return (
        <Recipeh current={current} />
    )
        } else {
            return (
                <>
                    <h1 id="recipehTitle">Hit the button!</h1>
                </>
            )
        }
};