import React, { useState } from 'react';

import NavBarList from './NavBarList';
import { menuList } from '../consts/menuOptions';

const NavBar = () =>{
    const optionList = menuList;

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">El Chele Es GAY! STORE</a>
         {
          optionList.map(({id, title}) => (
           <NavBarList 
            id={id}
            title={title}
           />
          ))
         }   
        </nav>
    );
};
export default NavBar;