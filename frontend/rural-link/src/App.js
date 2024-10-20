import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import DashboardComponent from './pages/Dashboard';
import Registrar from './pages/Registro'
import ProtectedRouteProprietario from './routes/ProtectedRouteProprietario';
import UserSelection from '../src/pages/UserSelection';
import Perfil from '../src/pages/Perfil'; 

export function App(){
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/registrar" element={<Registrar />} />
                    <Route element={<ProtectedRouteProprietario/>}>
                        <Route path="/dashboard" element={<DashboardComponent />} />
                    </Route>
                    <Route path="/user-selection" element={<UserSelection />} />
                    <Route path="/perfil" element={<Perfil />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;