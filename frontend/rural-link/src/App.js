import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import DashboardComponent from './pages/DashboardComponent';
import RegistrarFazenda from './pages/RegistroFazenda'
import RegistrarProprietario from './pages/RegistroProprietario'
import RegistrarTrabalhador from './pages/RegistroTrabalhador'
import ProtectedRouteProprietario from './routes/ProtectedRouteProprietario';
import UserSelection from '../src/pages/UserSelection';
import Perfil from '../src/pages/Perfil';
import Dashboard from '../src/pages/Dashboard';
import Faq from '../src/pages/Faq';
import Fichamento from '../src/pages/Fichamento';

export function App(){
    const animals = [
        { id: 1, nome: 'Zeus', sexo: 'M', especie: 'Boi', raca: 'Nelore', idade: '5 anos', lote: 'A1' },
        { id: 2, nome: 'Lola', sexo: 'F', especie: 'Vaca', raca: 'Holandesa', idade: '3 anos', lote: 'B2' },
        { id: 3, nome: 'Tico', sexo: 'M', especie: 'Boi', raca: 'Angus', idade: '4 anos', lote: 'C3' },
        { id: 4, nome: 'Bela', sexo: 'F', especie: 'Vaca', raca: 'Jersey', idade: '2 anos', lote: 'D4' },
        { id: 5, nome: 'Mimi', sexo: 'F', especie: 'Vaca', raca: 'Simmental', idade: '3 anos', lote: 'E5' },
        { id: 6, nome: 'Rufus', sexo: 'M', especie: 'Boi', raca: 'Hereford', idade: '6 anos', lote: 'F6' },
        { id: 7, nome: 'Dona Flor', sexo: 'F', especie: 'Vaca', raca: 'Pardo-Suíço', idade: '4 anos', lote: 'G7' },
        { id: 8, nome: 'Neco', sexo: 'M', especie: 'Boi', raca: 'Charolês', idade: '5 anos', lote: 'H8' },
        { id: 9, nome: 'Juju', sexo: 'F', especie: 'Vaca', raca: 'Guzerá', idade: '2 anos', lote: 'I9' },
        { id: 10, nome: 'Tobias', sexo: 'M', especie: 'Boi', raca: 'Brahman', idade: '3 anos', lote: 'J10' },
        { id: 11, nome: 'María', sexo: 'F', especie: 'Vaca', raca: 'Cruzada', idade: '3 anos', lote: 'K11' },
        { id: 12, nome: 'Chico', sexo: 'M', especie: 'Boi', raca: 'Limousin', idade: '2 anos', lote: 'L12' },
        { id: 13, nome: 'Pipa', sexo: 'F', especie: 'Vaca', raca: 'Ayrshire', idade: '4 anos', lote: 'M13' },
        { id: 14, nome: 'Ronaldo', sexo: 'M', especie: 'Boi', raca: 'Brahman', idade: '5 anos', lote: 'N14' },
        { id: 15, nome: 'Fifi', sexo: 'F', especie: 'Vaca', raca: 'Jersey', idade: '2 anos', lote: 'O15' },
    ];
    
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route element={<ProtectedRouteProprietario/>}>
                        <Route path="/registrarfazenda" element={<RegistrarFazenda />} />
                    </Route>
                    <Route path="/registrarproprietario" element={<RegistrarProprietario />} />
                    <Route path="/registrartrabalhador" element={<RegistrarTrabalhador />} />
                    <Route element={<ProtectedRouteProprietario/>}>
                    <Route path="/dashboardcomponent" element={<DashboardComponent />} />
                    </Route>
                    <Route path="/user-selection" element={<UserSelection />} />
                    <Route path="/perfil" element={<Perfil />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/faq" element={<Faq/>} />
                    <Route path="/fichamento" element={<Fichamento animals={animals} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
