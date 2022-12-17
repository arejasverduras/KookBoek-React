import React from "react";


export const Notification = ({data}:any) => {
    const {category, subject, description} = data;
    
    let notificationToReturn;

    const filterNotification = 
    <p>Filter {description} {subject}</p>;

    const favoriteNotification = 
    <p>{subject} {description} {category}</p>

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
        </div>
    )
};
