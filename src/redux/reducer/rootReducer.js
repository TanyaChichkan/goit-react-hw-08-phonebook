import { combineReducers } from "redux";
import {contactsReducer,filterReducer} from '../reducer/contactsReducer';
import {authReducer} from '../reducer/authReducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig={
    key: "auth",
    version:1,
    storage,
    whitelist:["email","idToken","refreshToken","isAuth","localId"],
  }


export const rootReducer = combineReducers({
    auth:persistReducer(authPersistConfig,authReducer),
    contactsArr: contactsReducer,
    filterValue: filterReducer,
  });
  