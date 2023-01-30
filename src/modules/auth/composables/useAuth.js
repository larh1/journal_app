import {useStore} from "vuex";
const useAuth = () =>
{
    // Composables
    const store = useStore();
    const createuser = async (user) =>
    {
        const res = store.dispatch("auth/createUser",user);
        return res;
    }

    const loginUser = (user) =>
    {
        const res=store.dispatch("auth/loginUser",user);
        return res;
    }
    // Props
    return {
        createuser,
        loginUser
    }
}

export default useAuth;