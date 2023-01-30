export const loginUser = (state,{user,idToken,refreshToken}) =>
{
    // Guardar IdToken en el storage
    if (idToken) localStorage.setItem("idToken",idToken);

    // Guardar IdToken en el state
    state.idToken = idToken;
    state.refreshToken = refreshToken;
    // Guardar usuario
    state.user = user;
    state.status = 1;
}