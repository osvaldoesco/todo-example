import React, { useState } from 'react';

const SideBarList = ({id,title}) =>{
    return(
        <a class="list-group-item list-group-item-action active"   role="tab">{`${title} `}</a>
    );
}

export default SideBarList;