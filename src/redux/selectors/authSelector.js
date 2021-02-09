const getToken = (state) => state.auth.idToken;
const getIsAuth = (state) => state.auth.isAuth;
const getLocalId = (state) => state.auth.localId;
const getRefreshToken=(state) => state.auth.refreshToken;

export {
    getToken,
    getIsAuth,
    getLocalId,
    getRefreshToken
}