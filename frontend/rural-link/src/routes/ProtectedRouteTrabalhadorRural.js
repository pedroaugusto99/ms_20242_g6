import {useEffect} from "react";
import {Navigate, Outlet, useNavigate} from "react-router-dom";
import jwtDecode from "jwt-decode";

const ProtectedRouteTrabalhadorRural = (props) => {
  const token = localStorage.getItem('auth_token');
  const navigate = useNavigate();
  function presentPage() {
    navigate(-1);
  }

  useEffect(()=>{
    if(token && jwtDecode(token).role!== "TRABALHADOR_RURAL"){ 
      presentPage()
    }
  },[])

  if (!token) return <Navigate to="/login" />;

  const decodedData = jwtDecode(token);


  if (decodedData.role === "TRABALHADOR_RURAL") {
    return <Outlet {...props} />;
  }
 else if(decodedData.role!=="PROPRIETARIO"){
   presentPage()
  }
};

export default ProtectedRouteTrabalhadorRural;