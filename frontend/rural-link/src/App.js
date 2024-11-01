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
import RegistrarAnimal from '../src/pages/RegistrarAnimal'

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
                    <Route element={<ProtectedRouteProprietario/>}>
                        <Route path="/dashboardcomponent" element={<DashboardComponent />} />
                    </Route>
                    <Route path="/user-selection" element={<UserSelection />} />
                    <Route path="/perfil" element={<Perfil />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/faq" element={<Faq/>} />
                    <Route path="/fichamento" element={<Fichamento/>} />
                    <Route path="/registraranimal" element={<RegistrarAnimal />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
    