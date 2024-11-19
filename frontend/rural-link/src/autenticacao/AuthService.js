import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

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
    registrarFazenda(credentials, token){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return axios.post(`${API_BASE_URL}/fazenda/cadastro`, credentials);
    }
    pegarQrCode(id, token){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return axios.get(`${API_BASE_URL}/animal/qr-code/${id}`);
    }
    listarAnimais(token){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return axios.get(`${API_BASE_URL}/animal`)
    }
    registrarAnimal(credentials, token){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return axios.post(`${API_BASE_URL}/animal/cadastro`, credentials);
    }
    pegarDadosDoUsuario(token){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return axios.get(`${API_BASE_URL}/perfil/busca-dados`);
    }
    listarTrabalhadores(token){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return axios.get(`${API_BASE_URL}/fazenda/trabalhadores`);
    }
    pegarDadosParaGraficos(token){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return axios.get(`${API_BASE_URL}/graficos/dados-dashboard`);
    }
    pegarDadosDoAnimal(id, token){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return axios.get(`${API_BASE_URL}/animal/${id}`)
    }
    listarAnimaisPorNome(nome, token){
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
    listarPesos(animalId, token){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return axios.get(`${API_BASE_URL}/peso/${animalId}`);
    }
    listarVacinas(animalId, token){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return axios.get(`${API_BASE_URL}/vacinacao/${animalId}`); 
    }
    listarCrias(animalId, token){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return axios.get(`${API_BASE_URL}/animal/crias/${animalId}`); 
    }
    registrarPesoAnimal(credentials, token){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return axios.post(`${API_BASE_URL}/peso`, credentials); 
    }
    registrarVacinaAnimal(credentials, token){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return axios.post(`${API_BASE_URL}/vacinacao`, credentials); 
    }
    removerPesoAnimal(animalId, token){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return axios.delete(`${API_BASE_URL}/peso/${animalId}`); 
    }
    removerVacinaAnimal(animalId, token){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return axios.delete(`${API_BASE_URL}/vacinacao/${animalId}`); 
    }
    removerAnimal(animalId, token){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return axios.delete(`${API_BASE_URL}/animal/${animalId}`); 
    }
    filtrarAnimais(token){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return axios.get(`${API_BASE_URL}/animal/filtro`); 
    }
}

export default new AuthService();