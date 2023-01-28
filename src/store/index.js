import auth from "@/modules/auth/store/auth";
import journal from "@/modules/daybook/store/journal";
import {createStore} from "vuex";

const store = createStore({
    modules:
    {
        journal,
        auth,
    }
});

export default store