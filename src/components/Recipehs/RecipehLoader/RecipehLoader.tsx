import React from "react";
import { useAppSelector,  } from "../../../app/hooks";
import { selectCurrentRecipeh } from "../recipehSlice";
import { Recipeh } from "../Recipeh/Recipeh";
import { Recepeh } from "../../../database";                   


export const RecipehLoader = () => {
    const recipeh: Recepeh | null | string = useAppSelector(selectCurrentRecipeh);

    // const params = useParams();
    // let id = params.recipehId;
    // console.log(`id = ${id}`);

    // useEffect(()=>{
    //     if (id !== undefined) {
    //         dispatch(setCurrentRecipeh(id));
    //     }    
    //     },[id])

    // useEffect(()=>{
    //     if(typeof recipeh !== 'string' && recipeh !== null){
    //         dispatch(addToVisited(recipeh.id));
    //     }
    // },[recipeh]);

    if (typeof recipeh === 'string'){
        return (
            <>
                <h1>No more recipehs!</h1>
            </>
        )
    } else if (recipeh !== null){

        return (
            <>
                <Recipeh />
                
            </>
        )
    }

    return (
        <>
            <h1>Hit the button!</h1>
        </>
    )
};
