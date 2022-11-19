import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import { selectSearchTerm, setSearchTerm } from "../../../recipehSlice";

export const SearchBar = () => {
    const dispatch = useAppDispatch();
    const searchTerm = useAppSelector(selectSearchTerm);

    const changeHandler = ({target}:any) => {
        dispatch(setSearchTerm(target.value));
    }

    return (
        <div className="searchBar">
            <input type="text" onChange={changeHandler} value={searchTerm} placeholder="Search" />
        </div>
    )
}
