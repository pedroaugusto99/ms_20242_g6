import axios from "axios";

const API_BASE_URL = "http://localhost:8080";
const token = localStorage.getItem('auth_token');

class AuthService{
    login(credentials){
        return axios.post(`${API_BASE_URL}/autenticacao/login`, credentials);
    }
    registrarProprietario(credentials){
        return axios.post(`${API_BASE_URL}/autenticacao/registrar/proprietario`, credentials);
    }
    registrarTrabalhador(credentials){
        return axios.post(`${API_BASE_URL}/autenticacao/registrar/trabalhador`, credentials);
    }
    registrarFazenda(credentials){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return axios.post(`${API_BASE_URL}/fazenda/criar`, credentials);
    }
    pegarQrCode(id){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return axios.get(`${API_BASE_URL}/animal/qr-code/${id}`);
    }
    listarAnimais(){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return axios.get(`${API_BASE_URL}/animal/listar-todos`)
    }
    registrarAnimal(credentials){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return axios.post(`${API_BASE_URL}/animal/cadastrar`, credentials);
    }
    pegarDadosDoUsuario(){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return axios.get(`${API_BASE_URL}/perfil/pegar-dados`);
    }
    listarTrabalhadores(){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return axios.get(`${API_BASE_URL}/fazenda/listar-trabalhadores`);
    }
    pegarDadosParaGraficos(){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return axios.get(`${API_BASE_URL}/graficos/dados-dashboard`);
    }
    pegarDadosDoAnimal(id){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return axios.get(`${API_BASE_URL}/animal/listar/${id}`)
    }
}

export default new AuthService();