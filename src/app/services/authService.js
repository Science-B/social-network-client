import axios from "axios";
import configFile from "../config.json";
import localStorageService from "./localStorageService";
const httpAuth = axios.create({
    baseURL: configFile.apiEndpoint + "/auth/",
    params: {
        key: "AIzaSyBfQ2lz-2URxXmq5-xUrn4HuX3GKmJc5cI"
    }
});

const authService = {
    register: async (payload) => {
        const { data } = await httpAuth.post(`signUp`, payload);
        return data;
    },
    signIn: async ({ email, password }) => {
        const { data } = await httpAuth.post(`signInWithPassword`, {
            email,
            password,
            returnSecureToken: true
        });
        return data;
    },
    refresh: async () => {
        const { data } = await httpAuth.post(`token`, {
            grant_type: "refresh_token",
            refresh_token: localStorageService.getRefreshToken()
        });
        return data;
    }
};

export default authService;
