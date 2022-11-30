import React, {useState} from "react";

export const HeaderTab = ({subject}:any) =>{
    const [visible, setVisible] = useState(false);

    const toggleVisible = () =>{
        setVisible(!visible)
    }
    
    return (
        <div 
        onClick={visible? ()=>{}:toggleVisible} 
        className={visible? `${subject} headerTab Visible`: `${subject} headerTab Hidden`}
    >
        {visible? 
        <>  
            <div 
                onClick={toggleVisible}
                className="headerTabCross"
            >
                X
            </div>
            <div className={`${subject} headerTab Content`}>
                {/* <FavoritesList /> */}
            </div>
        </>
        :null}
        
        
    </div >
    )
};
