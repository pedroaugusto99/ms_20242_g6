import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/screens/Login';
import RegistrarFazenda from './pages/screens/RegistroFazenda';
import RegistrarProprietario from './pages/screens/RegistroProprietario';
import RegistrarTrabalhador from './pages/screens/RegistroTrabalhador';
import ProtectedRouteProprietario from './routes/ProtectedRouteProprietario';
import UserSelection from './pages/screens/UserSelection';
import Perfil from './pages/screens/Perfil';
import Dashboard from './pages/screens/Dashboard';
import Faq from './pages/screens/Faq';
import Fichamento from './pages/screens/Fichamento';
import RegistrarAnimal from './pages/screens/RegistrarAnimal';
import FichaAnimal from './pages/screens/FichaAnimal';

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
                    <Route path="/user-selection" element={<UserSelection />} />
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
    