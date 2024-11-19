import {useEffect} from "react";
import { Navigate, Outlet, useNavigate} from "react-router-dom";
import {jwtDecode} from "jwt-decode";

const ProtectedRouteProprietario = (props) => {
    const token = localStorage.getItem('auth_token');
    const navigate = useNavigate();
    function presentPage() {
        navigate(-1);
    }

    useEffect(()=>{
        if(token && jwtDecode(token).role!== "PROPRIETARIO"){ 
            presentPage()
        }
    },[token && jwtDecode(token).role!== "PROPRIETARIO"])

    if (!token) return <Navigate to="/login" />;

    const decodedData = jwtDecode(token);


    if (decodedData.role === "PROPRIETARIO") {
        return <Outlet {...props} />;
    }
    else if(decodedData.role!=="PROPRIETARIO"){
        presentPage()
    }
};

export default ProtectedRouteProprietario;