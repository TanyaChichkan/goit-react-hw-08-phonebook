import axios from 'axios';


import { signIn,
    signUp,
    signOut,
    setAuthLoading,
    refreshToken,
    resetAuthError,
    authIsSuccessful,
    tokenIsRefreshed,
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

        dispatch(authIsSuccessful());
        setTimeout(()=>dispatch(authIsSuccessful()),2000);
        
        setTimeout(() => {
            dispatch(signUp(response.data))
        }, 3000);
        
        }catch(err){
            dispatch(setAuthError(err));
            setTimeout(() => {
                dispatch(resetAuthError())
            }, 5000)
        }
        
        finally{
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

        dispatch(authIsSuccessful());
        setTimeout(()=>dispatch(authIsSuccessful()),2000);

        setTimeout(() => {
            dispatch(signIn(response.data))
        }, 3000);

    }catch(err){
        dispatch(setAuthError(err));
        setTimeout(() => {
            dispatch(resetAuthError())
        }, 5000)

    }finally{
        dispatch(setAuthLoading())
    }
};

export const refreshTokenOperation =()=>async(dispatch,getState) => {
    const refrToken = getState().auth.refreshToken;
    
    try{
    const response = await axios.post(
      `https://securetoken.googleapis.com/v1/token?key=AIzaSyBMVBHlN0XgpofWJ1SEODxMSj7L5-AzPkY`,
      { grant_type: "refresh_token", refresh_token: refrToken }
    );

    dispatch(tokenIsRefreshed());
    setTimeout(()=>dispatch(tokenIsRefreshed()),2000);

    setTimeout(() => {
        dispatch(refreshToken(response.data))
    }, 3000);


    }catch(err){
        dispatch(setAuthError(err))
    }finally{
        dispatch(setAuthLoading())
    }
};