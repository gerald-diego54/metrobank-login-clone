import axios from "axios";

export default class AuthService {
    public loginService(url: string, data: Object) {
        const response = axios.post(url, data, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        return response;
    }

    public signUpService(url: string, data: Object) {
        const response = axios.post(url, data, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        return response;
    }
}
