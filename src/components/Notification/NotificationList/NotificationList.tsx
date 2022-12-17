import React from "react";
import { useAppSelector } from "../../../app/hooks";
import { selectNotifications } from "../notificationSlice";
import { Notification } from "../Notification";


export const NotificationList  = () => {
    const notifications = useAppSelector(selectNotifications);

    const notificationList = notifications.map(notification => 
            <Notification data={notification} key={notification.id}/>
        )
    
    return (
        <div className="NotificationListContainer">
            {notificationList.length > 0?
               <ul className="NotificationList">
               {notificationList}
           </ul>: null 
        }
            
        </div>
    )
};
