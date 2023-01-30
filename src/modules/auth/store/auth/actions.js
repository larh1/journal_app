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
        console.error({data});
        // Actualizar nombre del usuario
        // const {idToken,refreshToken} = data; // Obtener Token
        // await authApi.post(":update",{displayName: user.name,idToken});
        
        //TODO: Hacer mutation
        return {ok: true}
    } catch (ex)
    {
        console.error(ex.response.data.error);
        return {ok: false,message: ex.response.data.error}
    }
}