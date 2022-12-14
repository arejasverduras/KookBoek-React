import React, {useEffect, useState} from "react";
import {capitalize} from '../../features/recipehFeatures';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HeaderTab = ({subject, content, icon, clickToClose, tabsOpen, setTabsOpen}:any) =>{
    const [visible, setVisible] = useState(false);

    const toggleVisible = () =>{
        if (visible ===  false  ){
            setVisible(true);
            
            //to know which tab is open
            setTabsOpen(subject)
        } else {
            setVisible(false);
        }
    }
    
    //This makes sure only one tab is visible at the same time
    useEffect(()=>{
        if (visible === true && tabsOpen !== subject){
            toggleVisible()
        }
    },[tabsOpen])

     

    return (
        <div 
        data-testid={`showTab ${subject}`}
        title={`${capitalize(subject)}`}
        onClick={visible?clickToClose?toggleVisible:()=>{}:toggleVisible} 
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
                {/* renders the provided component from the content prop in HeaderTabsContainer */}
                {content}
            </div>
        </div>
        :
            <FontAwesomeIcon icon={icon} size="2x" className={`headerTabIcon ${subject}`}/>
    }
    </div >
    )
};
