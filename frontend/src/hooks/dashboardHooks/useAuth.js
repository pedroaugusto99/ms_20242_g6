import { useState, useEffect } from 'react';
import AuthService from '../../autenticacao/AuthService';

const useAuth = () => {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [roleUsuario, setRoleUsuario] = useState('');

    useEffect(() => {
        AuthService.pegarDadosDoUsuario().then((response) => {
            setNomeUsuario(response.data['nome']); 
            setRoleUsuario(response.data['role']);
        })
    }, []);

    return { nomeUsuario, roleUsuario };
};

export default useAuth;
