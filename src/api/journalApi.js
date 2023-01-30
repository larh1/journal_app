import axios from "axios";

const journalApi = axios.create(
    {
        baseURL: "https://vue-vuex-15ac0-default-rtdb.firebaseio.com"
    }
);

journalApi.interceptors.request.use((config) =>
{
    // Agregar token a las request
    config.params = {
        auth: localStorage.getItem("idToken")
    }
    return config; // IMPORTANTE
});

export default journalApi;