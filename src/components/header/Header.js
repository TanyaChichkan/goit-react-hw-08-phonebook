import React from "react";
import Navigation from '../../navigation/Navigation';
import UserMenu from '../userMenu/UserMenu';

import Logo from '../../pic/phonebook-icon2.png';
import icon from '../../pic/symbol-defs.svg';
import iconUser from '../../pic/symbol-defs.svg';
import {globalRoutes} from '../../navigation/globalRoutes';
import {headerWrapper,pageTitle,iconWrapper,header,headerButton,profileButton} from '../header/Header.module.css';

const Header = ({onHandleClick,onClick,isAuth,email}) => {
    return(
        <header className={header}>
        <div className={headerWrapper}>
            <img src={Logo} alt="logo" width="50" height="50"/>
            <h1 className={pageTitle}>Phonebook</h1>
        </div>

        <Navigation routes={globalRoutes}/>
 
        {isAuth ? (
        // <UserMenu onClick={onClick} email={email} isAuth={isAuth} email={email}/>
        <button type="button" onClick={onHandleClick} className={profileButton}>
          Profile
          <svg className={iconWrapper}>
            <use xlinkHref={`${iconUser}#icon-user`}/>
          </svg>
        </button>
        ): (
        <button type="button" onClick={onHandleClick} className={headerButton}>
          MENU
          <svg className={iconWrapper}>
            <use xlinkHref={`${icon}#icon-menu3`}/>
          </svg>
        </button>
        )
      }
      </header>
    )
};

export default Header;

