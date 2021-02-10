import React, { useEffect,useState,Suspense } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {useHistory, useLocation} from 'react-router-dom';

import Form from "../form/Form";
import Section from "../section/Section";
import List from "../list/List";
import Filter from "../filter/Filter";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";
import Modal from '../modal/Modal';
import Navigation from '../../navigation/Navigation';
import Header from '../header/Header';
import UserMenu from '../userMenu/UserMenu';

import {globalRoutes} from '../../navigation/globalRoutes';
import { getContactsOperations } from "../../redux/operations/contactsOperations";
import {refreshTokenOperation} from '../../redux/operations/authOperations';
import { resetError } from "../../redux/actions/contactsActions";
import {getContactsLoading,getError,getContacts} from '../../redux/selectors/contactsSelectors';
import {getEmail,getAuthError,getAuthIsSuccessful,getTokenRefreshed} from '../../redux/selectors/authSelector';
import {signOut} from '../../redux/actions/contactsActions';
import PublicRoute from '../routes/PublicRoutes';
import PrivateRoute from '../routes/PrivateRoutes';

import {
  getToken,
  getIsAuth,
  getLocalId,
  getRefreshToken
} from '../../redux/selectors/authSelector';


const ContactsTracker = () => {

  const [showMenu,setShowMenu] =useState(false);
  const error = useSelector(getError);
  const loading = useSelector(getContactsLoading);
  const contactsArr = useSelector(getContacts);
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuth = useSelector(getIsAuth);
  const email=useSelector(getEmail);
  const errorAuth=useSelector(getAuthError);
  const authIsSuccessful = useSelector(getAuthIsSuccessful);
  const tokenRefreshed = useSelector(getTokenRefreshed);
  

  useEffect(() => {
    if(isAuth) {
      dispatch(getContactsOperations());
    }
  }, [isAuth]);

  const onHandleClick=e=>{
    setShowMenu(true);
  }

  const handleClick = (e) => {
    dispatch(resetError());
  };

  const onHandleSignOut = e=>{
    dispatch(signOut());
    closeModal();
    history.push('/');
  }

  const onRefreshToken=e=>{
    dispatch(refreshTokenOperation())
  }

  const closeModal =()=>{
    setShowMenu(false);
    isAuth? history.push('/contacts') : history.push('/home')
    
  }

  return (
    <>
     <Header onHandleClick={onHandleClick} onClick={onHandleSignOut} isAuth={isAuth} email={email}/>
   
      <Suspense fallback={<h2>...loading</h2>}>
        <Switch>
        {globalRoutes.map((route) => (
            route.isPrivate ? (
            <PrivateRoute {...route} isAuth={isAuth} key={route.path} />
          ) : (
            <PublicRoute {...route} isAuth={isAuth} key={route.path} />
          )
        ))}
        </Switch>
      </Suspense>
      
      {isAuth && showMenu && 
        <Modal onClose={closeModal}>
            {isAuth && <UserMenu email={email} isAuth={isAuth} onClick={onHandleSignOut} onClose={closeModal} count={contactsArr.length} tokenRefreshed={tokenRefreshed} refreshToken={onRefreshToken}/>}
        </Modal>}

      {!isAuth && showMenu && 
      <Modal onClose={closeModal}>
          {!isAuth && <UserMenu  isAuth={isAuth}  onClose={closeModal} errorAuth={errorAuth} authIsSuccessful={authIsSuccessful} />}
      </Modal>}

    </>
  );
};

export default ContactsTracker;
