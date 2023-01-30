import authApi from "@/api/authAPI";

export const createUser = async (context,user) =>
{
    try
    {
        const {data} = await authApi.post(":signUp",{
            email: user.email,
            password: user.pasw,
            returnSecureToken: true
        });
        // Actualizar nombre del usuario
        const {idToken,refreshToken} = data; // Obtener Token
        await authApi.post(":update",{displayName: user.name,idToken});

        delete user.pasw; // Borrar pass del obj usuario
        context.commit("loginUser",
            {user,idToken: data.idToken,refreshToken: data.refreshToken});

        return {ok: true}
    } catch (ex)
    {
        return {ok: false,message: ex.response.data.error.message}
    }
}

export const loginUser = async (context,user) =>
{
    try
    {
        const {data} = await authApi.post(":signInWithPassword",{
            email: user.email,
            password: user.pasw,
            returnSecureToken: true
        });
        delete user.pasw;
        user.name = data.displayName;
        // Guardar token
        context.commit("loginUser",
            {user,idToken: data.idToken,refreshToken: data.refreshToken});
        return {ok: true}
    } catch (ex)
    {
        return {ok: false,message: ex.response.data.error.message}
    }
}

export const checkToken = async (context) =>
{
    const idToken = localStorage.getItem("idToken");
    if (!idToken)
    {
        context.commit("logOut");
        return {ok: false,message: "403. Not authenticated"};
    }
    try
    {
        // Comprobar token
        const {data} = await authApi.post(":lookup",{idToken});
        console.error(data);
        const user = {
            name: data.users[0].name,
            email: data.users[0].email
        };
        context.commit("loginUser",{user,idToken})
        return {ok: true}
    } catch (ex)
    {
        context.commit("logOut");
        return {ok: false,message: ex.response.data.error.message};
    }
}