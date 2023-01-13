import axios from "axios";

const journalApi = axios.create(
    {
        baseURL: "https://vue-vuex-15ac0-default-rtdb.firebaseio.com"
    }
);

export default journalApi;