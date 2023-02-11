import axios from "axios";
const config = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "text/plain",
    },
};
const instance = axios.create({
    baseURL: process.env.DEV_BACKEND_URL,
    https: config,
});
export default instance