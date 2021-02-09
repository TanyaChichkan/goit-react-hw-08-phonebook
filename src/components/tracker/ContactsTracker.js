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

import {mainRoutes} from '../../navigation/routes';
import { getContactsOperations } from "../../redux/operations/contactsOperations";
import { resetError } from "../../redux/actions/contactsActions";
import {getContactsLoading,getError,getContacts} from '../../redux/selectors/contactsSelectors';
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
    history.push('/');
  }

  const closeModal =()=>{
    setShowMenu(false);
    history.push('/')
  }

  return (
    <>
     <Header onHandleClick={onHandleClick} onClick={onHandleSignOut} isAuth={isAuth}/>
   
      <Section>
      <Suspense fallback={<h2>...loading</h2>}>
          
          <Switch>
          {mainRoutes.map((route) => (
             route.isPrivate ? (
              <PrivateRoute {...route} isAuth={isAuth} key={route.path} />
            ) : (
              <PublicRoute {...route} isAuth={isAuth} key={route.path} />
            )
          ))}
          </Switch>
        </Suspense>
      
      </Section>
          {/* {showMenu && 
            <Modal onClose={closeModal}> */}
                {/* <Navigation/> */}
                
            {/* </Modal>} */}

    </>
  );
};

export default ContactsTracker;
