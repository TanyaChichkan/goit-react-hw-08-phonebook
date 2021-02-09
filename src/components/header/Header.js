import React from "react";
import Navigation from '../../navigation/Navigation';

import Logo from '../../pic/phonebook-icon2.png';
import icon from '../../pic/symbol-defs.svg';
import {headerWrapper,pageTitle,iconWrapper,header,headerButton} from '../header/Header.module.css';

const Header = ({onHandleClick,onClick,isAuth}) => {
    return(
        <header className={header}>
        <div className={headerWrapper}>
            <img src={Logo} alt="logo" width="50" height="50"/>
            <h1 className={pageTitle}>Phonebook</h1>
        </div>

        <Navigation />
        {isAuth && (
        <button type="button" onClick={onClick}>Sign Out</button>
        )}
        
        {/* <button type="button" onClick={onHandleClick} className={headerButton}>
            <svg className={iconWrapper}>
              <use xlinkHref={`${icon}#icon-menu3`}/>
            </svg>
          </button> */}
      </header>
    )
};

export default Header;

