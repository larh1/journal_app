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
        //TODO: Hacer mutation
        return {ok: true}
    } catch (ex)
    {
        console.error(ex.response.data.error);
        return {ok: false,message: ex.response.data.error}
    }
}