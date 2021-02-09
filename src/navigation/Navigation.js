import React, { Suspense} from "react";
import {useDispatch,useSelector} from 'react-redux';
import {Route,Switch} from 'react-router-dom';

import {mainRoutes} from '../navigation/routes';

import NavItem from "./navItem/NavItem";

import {linkList} from './Navigation.module.css';


const Navigation=()=>{
    
    const isAuth = useSelector((state) => state.auth.isAuth);


    return(
    <>
        <ul className={linkList}>
            {mainRoutes.map((route)=>(
                <NavItem {...route} isAuth={isAuth} key={route.path}/>
            ))}
        </ul>
      
    </>
    )
};

export default Navigation;