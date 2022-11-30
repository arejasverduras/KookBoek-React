import React, {useState} from "react";

export const SidePanel = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () =>{
        setVisible(!visible)
    }

    return (
        <div className={visible? "sidePanel Visible": "sidePanel Hidden"}>
            <button onClick={toggleVisible}>{visible?"Hide":"Show"}</button>
        </div >
    )
}