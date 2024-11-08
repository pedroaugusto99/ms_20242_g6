import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
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
import FichaAnimal from '../src/pages/FichaAnimal'
import GerarPDF from './pages/components/GerarPDF';
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
                    <Route path="/ficha_pdf" element={<handleGeneratePDF />} />

                </Routes>
            </div>
        </Router>
    );
};

export default App;
    