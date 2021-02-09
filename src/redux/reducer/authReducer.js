import { signIn,
    signUp,
    signOut,
    setAuthLoading,
    setAuthError} from '../actions/contactsActions';

import { createReducer } from "@reduxjs/toolkit";

const initialState={
    email:"",
    isAuth:false,
    error:"",
    isLoading:false,
    idToken:"",
    refreshToken:"",
    localId:""
}

export const authReducer=createReducer(
    {...initialState},
    {
      [signUp]:(state,{type,payload})=>{
          return {...state,email:payload.email,localId: payload.localId,idToken:payload.idToken,refreshToken:payload.idToken,isAuth:true}
      },
      [signIn]:(state,{type,payload})=>{
        return {...state,email:payload.email,localId: payload.localId,idToken:payload.idToken,refreshToken:payload.idToken,isAuth:true}
      },
      [signOut]:(state,{type,payload})=>{
          return {...initialState}
      },
      [setAuthError]:(state,{type,payload})=>{
          return {...state,error:payload};
      },
      [setAuthLoading]:(state)=>{
        return {...state,isLoading:!state.isLoading};
    },
    }
)

