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
        // const {idToken,refreshToken} = data; // Obtener Token
        // await authApi.post(":update",{displayName: user.name,idToken});

        delete user.pasw; // Borrar pass del obj usuario
        context.commit("loginUser",
            {user,idToken: data.idToken,refreshToken: data.refreshToken});

        return {ok: true}
    } catch (ex)
    {
        return {ok: false,message: ex.response.data.error.message}
    }
}