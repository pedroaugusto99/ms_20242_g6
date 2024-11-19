import React, { useState } from 'react';
import styles from './css/cssPages/EsqueceuSenha.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from './images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthService from '../autenticacao/AuthService';

const EntradaSenha = ({ label, valor, aoMudar, mostrarSenha, alternarVisibilidadeSenha, id }) => (
    <div className={styles.campoSenha}>
        <input
            id={id}
            type={mostrarSenha ? 'text' : 'password'}
            placeholder={label}
            required
            value={valor}
            onChange={aoMudar}
        />
        <div
            className={styles.botaoVisibilidadeSenha}
            onClick={() => {
                alternarVisibilidadeSenha();
                document.getElementById(id).focus();
            }}
        >
            <i className={`fa-solid ${mostrarSenha ? 'fa-eye-slash' : 'fa-eye'}`}></i>
        </div>
    </div>
);


function EsqueceuSenha() {
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const alternarVisibilidadeSenha = () => {
        setMostrarSenha((prevState) => !prevState);
    };

    const aoEnviarFormulario = async (event) => {
        event.preventDefault();
        if (senha !== confirmarSenha) {
            setMensagem('As senhas não coincidem!');
            return;
        }
        try {
            const resposta = await AuthService.redefinirsenha({
                email: location.state.emailUsuarioToken,
                password: senha
            });
            console.log(resposta.status);
            if (resposta.status === 200) {
                setMensagem('Senha redefinida com sucesso!');
                navigate('/login');
            } else {
                setMensagem('Erro ao redefinir a senha. Tente novamente.');
            }
        } catch (erro) {
            setMensagem('Erro ao redefinir a senha. Tente novamente.');
        }
    };

    return (
        <div className={styles.container}>
            <div className={`${styles.conteudo} ${styles.primeiroConteudo}`}>
                <div className={styles.colunaBemVindo}>
                    <h2 className={`${styles.titulo} ${styles.tituloBemVindo}`}>Bem-Vindo(a)!</h2>
                    <p className={`${styles.descricao} ${styles.descricaoBemVindo}`}>
                        Atualize sua senha para ter acesso à sua conta!
                    </p>
                </div>
                <div className={styles.colunaFormulario}>
                    <img src={logo} alt="Logo" className={styles.logo} />
                    <h2 className={`${styles.titulo} ${styles.tituloFormulario}`}>Criar Nova Senha</h2>
                    <form className={styles.formulario} onSubmit={aoEnviarFormulario}>
                        <p className={styles.rotuloSenha}>Senha:</p>
                        <EntradaSenha
                            id="novaSenha"
                            label="Nova Senha"
                            valor={senha}
                            aoMudar={(e) => setSenha(e.target.value)}
                            mostrarSenha={mostrarSenha}
                            alternarVisibilidadeSenha={alternarVisibilidadeSenha}
                        />
                        <p className={styles.rotuloConfirmarSenha}>Confirmar Senha:</p>
                        <EntradaSenha
                            id="confirmarSenha"
                            label="Confirmar Nova Senha"
                            valor={confirmarSenha}
                            aoMudar={(e) => setConfirmarSenha(e.target.value)}
                            mostrarSenha={mostrarSenha}
                            alternarVisibilidadeSenha={alternarVisibilidadeSenha}
                        />
                        <button className={`${styles.btn} ${styles.btnPrimario}`} type="submit">
                            Login
                        </button>
                        {mensagem && <p className={styles.mensagem}>{mensagem}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}


export default EsqueceuSenha;
