import React from 'react';

const SideBarList = ({id,title}) =>{
  return(
    <a
      href="/"
      className="list-group-item list-group-item-action active"
      role="tab"
    >
      {`${title} `}
    </a>
  );
}

export default SideBarList;