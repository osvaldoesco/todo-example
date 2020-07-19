import React from 'react';

import SideBarList from '../SideBarList';
import { menuList } from '../../consts/menuOptions';
import './SideBar.css';

const SideBar = () =>{
  const optionList = menuList;
  
  return(
    <div className="sideBarDiv">
      <ul className="list-group">
        {
          optionList.map(({id, title}) => (
            <SideBarList 
              id={id}
              key={id}
              title={title}
            />
          ))
        }
      </ul>
    </div>
  );
}

export default SideBar;