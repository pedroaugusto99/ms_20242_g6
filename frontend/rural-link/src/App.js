import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import RegistrarFazenda from './pages/RegistroFazenda'
import RegistrarProprietario from './pages/RegistroProprietario'
import RegistrarTrabalhador from './pages/RegistroTrabalhador'
import ProtectedRouteProprietario from './routes/ProtectedRouteProprietario';
import SelecaoUsuario from '../src/pages/SelecaoUsuario';
import Perfil from '../src/pages/Perfil';
import Dashboard from '../src/pages/Dashboard';
import Faq from '../src/pages/Faq';
import Fichamento from '../src/pages/Fichamento';
import RegistrarAnimal from '../src/pages/RegistrarAnimal'
import FichaAnimal from '../src/pages/FichaAnimal'

export function App(){
    
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route element={<ProtectedRouteProprietario/>}>
                        <Route path="/registrarfazenda" element={<RegistrarFazenda />} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/registrarproprietario" element={<RegistrarProprietario />} />
                    <Route path="/registrartrabalhador" element={<RegistrarTrabalhador />} />
                    <Route path="/selecaousuario" element={<SelecaoUsuario />} />
                    <Route path="/perfil" element={<Perfil />} />
                    <Route element={<ProtectedRouteProprietario/>}>
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Route>
                    <Route path="/faq" element={<Faq/>} />
                    <Route path="/fichamento" element={<Fichamento/>} />
                    <Route path="/registraranimal" element={<RegistrarAnimal />} />
                    <Route path="/fichaanimal" element={<FichaAnimal/>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
    