import React , {useEffect} from "react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { selectCurrentRecipeh, setCurrentRecipeh, addToVisited, resetAll, fillRecipehHash } from "../recipehSlice";
import { useNavigate, useParams } from "react-router-dom";
import { RandomButton } from "../RandomButton/RandomButton";
import { Recipeh } from "./Recipeh";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRandom, faUtensils } from "@fortawesome/free-solid-svg-icons";

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
            // const title = document.getElementById("recipehTop");
            const button = document.getElementById("randomButton")
                if (button !== null )
                    {
                    setTimeout(() => {
                        button.scrollIntoView({behavior: 'smooth'});    
                    }, 200);    
                    
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
        if(typeof current !== 'string' && current !== null){
            dispatch(addToVisited(current.id));
        }
    },[current]);

    if (typeof current === 'string'){
        return (
            <div className="noMoreRecipehs">
                <h1 id="noMoreTitle">No more recipehs!</h1>
                <p>You've seen all there is to see. Checkout the visited list below or hit that Reload button to start over!</p>
                <button className="secondaryButton" onClick={clickHandler}>Reload</button>
            </div>
        )
    } else if (current !== null ){

    return (
        <Recipeh current={current} />
    )
        } else {
            return (
                <div className="hitTheButton">
                    <h1 id="hitTheButton">What's for dinner?</h1>
                    <FontAwesomeIcon icon={faUtensils} size="2x"/>
                    <p>Get a random recipeh from your private collection by hitting the Random Recipeh button. Keep clicking the button untill you are satisifed!</p>
                    <RandomButton name="firstRandomButton" iconColor="black"/>
                </div>
            )
        }
};
