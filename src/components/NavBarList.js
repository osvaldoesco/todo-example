import React from 'react';

const NavBarList = ({id, title}) => {
    return(
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
             <a className="nav-link" href="/">{`${title} `}</a>
            </li>
         </ul>
     </div>
    );
}

export default NavBarList;
