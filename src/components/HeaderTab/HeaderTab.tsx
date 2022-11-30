import React, {useState} from "react";
import {capitalize} from '../../features/recipehFeatures';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HeaderTab = ({subject, content, icon}:any) =>{
    const [visible, setVisible] = useState(false);

    const toggleVisible = () =>{
        setVisible(!visible)
    }
     

    return (
        <div 
        data-testid={`showTab ${subject}`}
        title={`${capitalize(subject)}`}
        onClick={visible?()=>{}:toggleVisible} 
        // onMouseLeave={visible?toggleVisible:()=>{}}
        className={visible? `headerTab Visible ${subject}`: `headerTab Hidden ${subject} `}
    >
        {visible? 
        <div>  
            <div 
                onClick={toggleVisible}
                className="headerTabCross"
            >
                X
            </div>
            <div 
                className={`headerTab Content ${subject}`}
                
                >
                {content}
            </div>
        </div>
        :
            <FontAwesomeIcon icon={icon} size="2x" className={`headerTabIcon ${subject}`}/>

    }
    </div >
    )
};
