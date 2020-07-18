import React, { useState } from 'react';

import SideBarList from './SideBarList';
import { menuList } from '../consts/menuOptions';
import './css/SideBar.css';

const SideBar = () =>{
    const optionList = menuList;
    
    return(
        <div className="sideBarDiv">
            <ul class="list-group">
                {
                    optionList.map(({id, title}) => (
                        <SideBarList 
                            id={id}
                            title={title}
                        />
                    ))
                }
            </ul>
        </div>
    );
}

export default SideBar;