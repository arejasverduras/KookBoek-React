import React from "react";
import { deleteNotification } from "./notificationSlice";
import { useAppDispatch } from "../../app/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";


export const Notification = ({data}:any) => {
    const dispatch = useAppDispatch();

    const {category, subject, description, id} = data;

    const iconMap = new Map();
    iconMap.set('favorite', faHeart);
    iconMap.set('filter', faFilter);
    iconMap.set('favRemoved', faHeartBroken)


    const clickDelete = () => {
        console.log(id);
        dispatch(deleteNotification(id));
    }
    
    
    const filterNotification = 
    <p>
        <FontAwesomeIcon icon={iconMap.get('filter')} /> <b>Filter</b> {description} <b>{subject}</b>
    </p>;

    const favoriteNotification = 
    <p>
        <FontAwesomeIcon icon={description === 'removed from '? iconMap.get('favRemoved'): iconMap.get('favorite')} color="red" /> {subject} {description} favorites
        
    </p>

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
