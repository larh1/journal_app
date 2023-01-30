import {useStore} from "vuex";
const useAuth = () =>
{
    // Composables
    const store = useStore();
    const createuser = async (user) =>
    {
        const res=store.dispatch("auth/createUser",user);
        return res;
    }
    // Props
    return {
        createuser
    }
}

export default useAuth;