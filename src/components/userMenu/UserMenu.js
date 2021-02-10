import React,{Suspense,useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Switch} from 'react-router-dom';
import Navigation from '../../navigation/Navigation';
import { authRoutes } from '../../navigation/authRoutes';
import iconUser from '../../pic/symbol-defs.svg';
import iconClose from '../../pic/symbol-defs.svg';
import {iconWrapper} from '../header/Header.module.css';
import {listItem,itemText,iconCloseWrapper,list,closeButton,hr} from './UserMenu.module.css';
import PublicRoute from '../routes/PublicRoutes';
import PrivateRoute from '../routes/PrivateRoutes';


const UserMenu = ({email,isAuth,onClick,onClose,count,refreshToken,errorAuth,authIsSuccessful,tokenRefreshed}) => {

    const closeByIcon=(e)=>{
        console.log(e.target.nodeName);
        if(e.target.nodeName ==="BUTTON" || e.target.nodeName==="use" || e.target.nodeName==="svg")  onClose();
    }

    return(
        <div>
            <button type="button" onClick={closeByIcon} className={closeButton}>
                <svg className={iconCloseWrapper}>
                    <use xlinkHref={`${iconClose}#icon-cross`}/>
                </svg>    
            </button>
    
        {isAuth ? (
            <>
            <ul className={list}>
                <li className={listItem}>
                    <svg className={iconWrapper}>
                    <use xlinkHref={`${iconUser}#icon-user`}/>
                </svg>
                <p className={itemText}>{email}</p>
                </li>
                <hr className={hr}/>

                <li className={listItem}>
                    <span>Contacts in the list:<span style={{visibility:"hidden"}}>_____________</span></span>
                    <span>{count}</span>
                </li>
                <hr className={hr}/>
                {isAuth && <li className={listItem}>
                    <a onClick={onClick}>Sign Out</a>
                </li>}

                {isAuth && <li className={listItem}>
                    <a onClick={refreshToken}>Refresh Token</a>
                </li>}
            </ul>
            {tokenRefreshed && 
                <div style={{backgroundColor:"lightGreen", marginTop:"20px", padding:"10px"}}>
                    <span style={{fontSize:"50px"}}>&#9997;</span>
                    <h2>Your token was successfully refreshed</h2>
                </div>}
            </>
            ) : (
            <>
                <Navigation routes={authRoutes}/>

                <Suspense fallback={<h2>...loading</h2>}>
                <Switch>
                {authRoutes.map((route) => (
                    route.isPrivate ? (
                    <PrivateRoute {...route} isAuth={isAuth} key={route.path} />
                    ) : (
                    <PublicRoute {...route} isAuth={isAuth} key={route.path} />
                    )
                ))}
                </Switch>
                </Suspense>

                {errorAuth && 
                    <div style={{backgroundColor:"lightYellow", marginTop:"20px"}}>
                        <span style={{fontSize:"50px"}}>&#9940;</span>
                        <h2>Request failed</h2>
                        <p>This email is already registered or <br/>you entered invalid email/password</p>
                        <p>Please, try to log in with<br/> <span style={{textDecoration:"underline", fontSize:"20px"}}>Sign In</span> link </p>
                        <p>or enter a valid email/password</p>
                    </div>}
                
                {authIsSuccessful && 
                 <div style={{backgroundColor:"lightGreen", marginTop:"20px", padding:"10px"}}>
                    <span style={{fontSize:"50px"}}>&#9997;</span>
                    <h2>Authorization is successful</h2>
                    <p>You may use the APP now!!!</p>
                </div>}

                
            </>

        )}

    

    </div>  

    )
}

export default UserMenu;

