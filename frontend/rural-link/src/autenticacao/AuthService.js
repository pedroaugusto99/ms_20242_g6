import axios from "axios";

const API_BASE_URL = "http://localhost:8080";
const token = localStorage.getItem('auth_token');

class AuthService{
    login(credentials){
        return axios.post(`${API_BASE_URL}/autenticacao/login`, credentials);
    }
    registrarProprietario(credentials){
        return axios.post(`${API_BASE_URL}/autenticacao/registro/proprietario`, credentials);
    }
    registrarTrabalhador(credentials){
        return axios.post(`${API_BASE_URL}/autenticacao/registro/trabalhador`, credentials);
    }
    registrarFazenda(credentials){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return axios.post(`${API_BASE_URL}/fazenda/cadastro`, credentials);
    }
    pegarQrCode(id){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return axios.get(`${API_BASE_URL}/animal/qr-code/${id}`);
    }
    listarAnimais(){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return axios.get(`${API_BASE_URL}/animal`)
    }
    registrarAnimal(credentials){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return axios.post(`${API_BASE_URL}/animal/cadastro`, credentials);
    }
    pegarDadosDoUsuario(){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return axios.get(`${API_BASE_URL}/perfil/busca-dados`);
    }
    listarTrabalhadores(){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return axios.get(`${API_BASE_URL}/fazenda/trabalhadores`);
    }
    pegarDadosParaGraficos(){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return axios.get(`${API_BASE_URL}/graficos/dados-dashboard`);
    }
    pegarDadosDoAnimal(id){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return axios.get(`${API_BASE_URL}/animal/${id}`)
    }
    listarAnimaisPorNome(nome){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return axios.get(`${API_BASE_URL}/animal/busca?nome=${nome}`);
    }
}

export default new AuthService();