import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

class AuthService{
    login(credentials){
        return axios.post(`${API_BASE_URL}/autenticacao/login`, credentials);
    }
}

export default new AuthService();