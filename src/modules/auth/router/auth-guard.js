import store from "@/store";

const isAuthenticated = async (to,from,next) =>
{
    // Verificar el status del store
    const {ok} = await store.dispatch("auth/checkToken");
    if (ok) next();
    else
    {
        next({name: "login"});
    }
}

export default isAuthenticated;