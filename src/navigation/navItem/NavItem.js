import React from 'react';
import {link,linkActive} from '../Navigation.module.css';
import {NavLink} from 'react-router-dom';

const NavItem = ({path,exact,name,isAuth,isPrivate,restricted}) => {
    return(
        <>
        {!isPrivate && !restricted && (
            <li key={path}>
            <NavLink
                to={path}
                exact={exact}
                className={link}
                activeClassName={linkActive}>
                {name.toUpperCase()}
            </NavLink>
            </li>
        )}

        {isAuth && isPrivate && !restricted && (
            <li key={path}>
            <NavLink
                to={path}
                exact={exact}
                className={link}
                activeClassName={linkActive}>
                {name.toUpperCase()}
            </NavLink>
            </li>
        )}

        {!isAuth && !isPrivate && restricted && (
            <li key={path}>
            <NavLink
                to={path}
                exact={exact}
                className={link}
                activeClassName={linkActive}>
                {name.toUpperCase()}
            </NavLink>
            </li>
        )}
        </>
    )
};

export default NavItem;

