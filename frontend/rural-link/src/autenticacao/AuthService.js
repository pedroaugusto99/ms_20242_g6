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
    validaremail(credentials){
        return axios.post(`${API_BASE_URL}/esqueceu-senha/email`, credentials);
    }
    validartoken(credentials){
        return axios.post(`${API_BASE_URL}/esqueceu-senha/token`, credentials);
    }
    redefinirsenha(credentials){
        return axios.put(`${API_BASE_URL}/esqueceu-senha`, credentials);
    }
    listarPesos(animalId){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return axios.get(`${API_BASE_URL}/peso/${animalId}`);
    }
    listarVacinas(animalId){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return axios.get(`${API_BASE_URL}/vacinacao/${animalId}`); 
    }
    listarCrias(animalId){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return axios.get(`${API_BASE_URL}/animal/crias/${animalId}`); 
    }
    registrarPesoAnimal(credentials){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return axios.post(`${API_BASE_URL}/peso`, credentials); 
    }
    registrarVacinaAnimal(credentials){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return axios.post(`${API_BASE_URL}/vacinacao`, credentials); 
    }
    removerPesoAnimal(animalId){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return axios.delete(`${API_BASE_URL}/peso/${animalId}`); 
    }
    removerVacinaAnimal(animalId){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return axios.delete(`${API_BASE_URL}/vacinacao/${animalId}`); 
    }
    removerAnimal(animalId){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return axios.delete(`${API_BASE_URL}/animal/${animalId}`); 
    }
    filtrarAnimais(){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return axios.get(`${API_BASE_URL}/animal/filtro`); 
    }
}

export default new AuthService();