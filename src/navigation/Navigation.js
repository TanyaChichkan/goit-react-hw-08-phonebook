import React, { Suspense} from "react";
import {useDispatch,useSelector} from 'react-redux';


import NavItem from "./navItem/NavItem";

import {linkList} from './Navigation.module.css';


const Navigation=({routes})=>{
    
    const isAuth = useSelector((state) => state.auth.isAuth);

    return(
    <>
        <ul className={linkList}>
            {routes.map((route)=>(
                <NavItem {...route} isAuth={isAuth} key={route.path}/>
            ))}
        </ul>
      
    </>
    )
};

export default Navigation;