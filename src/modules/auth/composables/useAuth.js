import {computed} from "vue";
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
        const res = store.dispatch("auth/loginUser",user);
        return res;
    }

    const checkToken = async () =>
    {
        const res = await store.dispatch("auth/checkToken");
        return res;
    }
    // Props
    return {
        createuser,
        loginUser,
        checkToken,
        authStatus: computed(() => store.getters["getStatus"])
    }
}

export default useAuth;