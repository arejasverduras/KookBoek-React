import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { recipehSlice } from "../Recipehs/recipehSlice";

export interface Notification {
    category: string,
    subject: string,
    action: string,
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

    }
})

//export reducer actions

//export selectors
export const selectNotifications = (state: rootState) => state.notifications.notifications;

//export as default
export default notificationSlice.reducer;
