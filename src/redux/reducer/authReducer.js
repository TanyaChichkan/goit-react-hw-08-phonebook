import { signIn,
    signUp,
    signOut,
    setAuthLoading,
    refreshToken,
    resetAuthError,
    authIsSuccessful,
    tokenIsRefreshed,
    setAuthError} from '../actions/contactsActions';

import { createReducer } from "@reduxjs/toolkit";

const initialState={
    email:"",
    isAuth:false,
    error:"",
    isLoading:false,
    idToken:"",
    refreshToken:"",
    localId:"",
    authSuccess:false,
    tokenRefreshed:false
}

export const authReducer=createReducer(
    {...initialState},
    {
      [signUp]:(state,{type,payload})=>{
          return {...state,email:payload.email,localId: payload.localId,idToken:payload.idToken,refreshToken:payload.refreshToken,isAuth:true}
      },
      [signIn]:(state,{type,payload})=>{
        return {...state,email:payload.email,localId: payload.localId,idToken:payload.idToken,refreshToken:payload.refreshToken,isAuth:true}
      },
      [signOut]:(state,{type,payload})=>{
          return {...initialState}
      },
      [setAuthError]:(state,{type,payload})=>{
          return {...state,error:payload};
      },
      [resetAuthError]:(state)=>{
          return{...state,error:""}
      },
      [setAuthLoading]:(state)=>{
        return {...state,isLoading:!state.isLoading};
        },
        [authIsSuccessful]:(state)=>{
            return {...state,authSuccess:!state.authSuccess}
        },
        [refreshToken]:(state,{type,payload})=>{
            return {...state,idToken:payload.id_token,refreshToken:payload.refresh_token}
        },
        [tokenIsRefreshed]:(state,action)=>{
            return {...state,tokenRefreshed:!state.tokenRefreshed}
        }

    }
)

