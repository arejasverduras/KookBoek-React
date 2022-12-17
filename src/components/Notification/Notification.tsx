import React from "react";
import { deleteNotification } from "./notificationSlice";
import { useAppDispatch } from "../../app/hooks";


export const Notification = ({data}:any) => {
    const dispatch = useAppDispatch();

    const {category, subject, description, id} = data;

    const clickDelete = () => {
        console.log(id);
        dispatch(deleteNotification(id));
    }
    
    
    const filterNotification = 
    <p><b>Filter</b> {description} <b>{subject}</b></p>;

    const favoriteNotification = 
    <p>{subject} {description} {category}</p>

    let notificationToReturn;

    switch (category) {
        case 'filter':
            notificationToReturn = filterNotification;
            break;
        case 'favorite':
            notificationToReturn = favoriteNotification;
            break;
        default:
            break;
    }

    return (
        <div className={`Notification ${category}`}>
            {notificationToReturn}
            <p onClick={clickDelete}><b>X</b></p>
        </div>
    )
};
