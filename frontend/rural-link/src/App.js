import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import DashboardComponent from './pages/Dashboard';
import Registrar from './pages/Registro'
import ProtectedRouteProprietario from './routes/ProtectedRouteProprietario';

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
                </Routes>
            </div>
        </Router>
    );
};

export default App;