import React from "react";
import { FavoritesList } from "../FavoritesList/FavoritesList";
import { HeaderTab } from "../HeaderTab/HeaderTab";
import { Filters } from "../Recipehs/RecipehHeader/Filters/Filters";
import { Search } from "../Search/Search";
import { faHeart, faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";

export const HeaderTabsContainer = () => {
    const tabItems:string[] = ['search','favorites', 'filters']

    const contentComponents = new Map();
    contentComponents.set('favorites', <FavoritesList />)
    contentComponents.set('filters', <Filters />)
    contentComponents.set('search', <Search />)

    const iconMap = new Map();
    iconMap.set('favorites', faHeart);
    iconMap.set('filters', faFilter);
    iconMap.set('search', faSearch);
    
    const tabsToRender = tabItems.map((tabItem, index )=> 
        <HeaderTab 
            key={index} 
            subject={tabItem} 
            content={contentComponents.get(tabItem)}
            icon={iconMap.get(tabItem)}
            />
        )
    
    return (
        <div className="headerTabsContainer">
            {tabsToRender.length >0?
            tabsToRender:null    
        }
        </div>
    )

};
