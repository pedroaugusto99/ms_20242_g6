import React, { useState } from 'react';
import styles from './css/cssPages/EsqueceuSenha.module.css';
import { useNavigate } from 'react-router-dom';
import logo from './images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthService from '../autenticacao/AuthService';

function EsqueceuSenha() {
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const navigate = useNavigate();

    const alternarVisibilidadeSenha = () => {
        setMostrarSenha(prevState => !prevState);
    };

    const aoEnviarFormulario = async (event) => {
        event.preventDefault();
        if (senha !== confirmarSenha) {
            setMensagem('As senhas não coincidem!');
            return;
        }
        try {
            const resposta = await AuthService.resetPassword({ password: senha });
            if (resposta.data === 'Senha redefinida com sucesso') {
                setMensagem('Senha redefinida com sucesso!');
                navigate('/login');
            } else {
                setMensagem('Erro ao redefinir a senha. Tente novamente.');
            }
        } catch (erro) {
            setMensagem('Erro ao redefinir a senha. Tente novamente.');
        }
    };

    const EntradaSenha = ({ label, valor, aoMudar }) => (
        <div className={styles.campoSenha}>
            <input
                type={mostrarSenha ? 'text' : 'password'}
                placeholder={label}
                required
                value={valor}
                onChange={aoMudar}
            />
            <button type="button" className={styles.botaoVisibilidadeSenha} onClick={alternarVisibilidadeSenha}>
                <i className={`fa-solid ${mostrarSenha ? 'fa-eye-slash' : 'fa-eye'}`}></i>
            </button>
        </div>
    );

    const FormularioRedefinicaoSenha = () => (
        <form className={styles.formulario} onSubmit={aoEnviarFormulario}>
            <p className={styles.rotuloSenha}>Senha:</p>
            <EntradaSenha label="Nova Senha" valor={senha} aoMudar={(e) => setSenha(e.target.value)} />
            <p className={styles.rotuloConfirmarSenha}>Confirmar Senha:</p>
            <EntradaSenha label="Confirmar Nova Senha" valor={confirmarSenha} aoMudar={(e) => setConfirmarSenha(e.target.value)} />
            <button className={`${styles.btn} ${styles.btnPrimario}`} type="submit">Login</button>
            {mensagem && <p className={styles.mensagem}>{mensagem}</p>}
        </form>
    );

    return (
        <div className={styles.container}>
            <div className={`${styles.conteudo} ${styles.primeiroConteudo}`}>
                <div className={styles.colunaBemVindo}>
                    <h2 className={`${styles.titulo} ${styles.tituloBemVindo}`}>Bem-Vindo(a) !</h2>
                    <p className={`${styles.descricao} ${styles.descricaoBemVindo}`}>
                        Atualize sua senha para ter acesso a sua conta!
                    </p>
                </div>

                <div className={styles.colunaFormulario}>
                    <img src={logo} alt="Logo" className={styles.logo} />
                    <h2 className={`${styles.titulo} ${styles.tituloFormulario}`}>Criar Nova Senha</h2>
                    <FormularioRedefinicaoSenha />
                </div>
            </div>
        </div>
    );
}

export default EsqueceuSenha;