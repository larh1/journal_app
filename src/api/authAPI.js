import axios from "axios";

const authApi = axios.create(
    {
        baseURL: "https://identitytoolkit.googleapis.com/v1/accounts",
        params:
        {
            key:"AIzaSyBRc9mRcr39jOYHbr-aG0RZjJVqqTNNaq4"
        }
    }
);

export default authApi;