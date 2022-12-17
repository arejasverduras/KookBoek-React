import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { recipehSlice } from "../Recipehs/recipehSlice";

export interface Notification {
    category: string,
    subject: string,
    description: string,
    id?: number
};

export interface NotificationState {
    notifications: Notification[],
    nextId: number
};

export const initialState: NotificationState ={
    notifications: [],
    nextId: 1,
};

export const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        createNotification (state, action) {
            const {category, subject, description} = action.payload;
            const newNotification = {
                category: category,
                subject: subject,
                description: description,
                id: state.nextId
            }
            state.notifications.push(newNotification);
            state.nextId++;
            console.log('notificationCreated')

            setTimeout(() => {
                notificationSlice.caseReducers.deleteNotification(state, {payload: newNotification.id, type: 'deleteNotification'});
            }, 3000);

        },
        deleteNotification (state, action){
            const id = action.payload;
            console.log(id);
            const noteIndex = state.notifications.findIndex((note)=> note.id === id)
            if (noteIndex >= 0){
                state.notifications.splice(noteIndex,1);
                state.nextId--;
                console.log('notification deleted')
            } else {
                console.log(`Notification with id: ${id} not found`);
            }
            
            
        }
    }
})

//export reducer actions
export const { createNotification, deleteNotification} = notificationSlice.actions;

//export selectors
export const selectNotifications = (state: RootState) => state.notifications.notifications;

//export as default
export default notificationSlice.reducer;
