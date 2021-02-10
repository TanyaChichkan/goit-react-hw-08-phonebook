const getToken = (state) => state.auth.idToken;
const getIsAuth = (state) => state.auth.isAuth;
const getLocalId = (state) => state.auth.localId;
const getRefreshToken=(state) => state.auth.refreshToken;
const getEmail = (state) => state.auth.email;
const getAuthError = (state) => state.auth.error;
const getAuthIsSuccessful=(state)=>state.auth.authSuccess;
const getTokenRefreshed=(state)=>state.auth.tokenRefreshed;


export {
    getToken,
    getIsAuth,
    getLocalId,
    getRefreshToken,
    getEmail,
    getAuthError,
    getAuthIsSuccessful,
    getTokenRefreshed
}