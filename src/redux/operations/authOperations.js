import axios from 'axios';


import { signIn,
    signUp,
    signOut,
    setAuthLoading,
    setAuthError} from '../actions/contactsActions';

    axios.defaults.baseURL = "https://identitytoolkit.googleapis.com/v1";
    const apiKey = 'AIzaSyBMVBHlN0XgpofWJ1SEODxMSj7L5-AzPkY';
   

export const signUpOperation=(user)=>async(dispatch)=>{
    dispatch(setAuthLoading());

    try{
        const response = await axios.post(
            `/accounts:signUp?key=${apiKey}`,
            {...user,returnSecureToken:true}
        );
        console.log(response.data);
        dispatch(signUp(response.data))
    }catch(err){
        dispatch(setAuthError(err))
    }finally{
        dispatch(setAuthLoading())
    }
};

export const signInOperation=(user)=>async(dispatch)=>{
    dispatch(setAuthLoading());

    try{
        const response = await axios.post(
            `/accounts:signInWithPassword?key=${apiKey}`,
            {...user,returnSecureToken:true}
        );
        dispatch(signIn(response.data))
    }catch(err){
        dispatch(setAuthError(err))
    }finally{
        dispatch(setAuthLoading())
    }
};