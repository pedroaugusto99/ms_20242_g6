import React, { useState } from 'react';
import styles from './css/cssPages/EsqueceuSenhaEmailToken.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from './images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthService from '../autenticacao/AuthService';

function EsqueceuSenha() {
    const [token, setToken] = useState('');
    const [mensagem, setMensagem] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const aoEnviarFormulario = async (event) => {
        event.preventDefault();
        try {
            const resposta = await AuthService.validartoken({ 
                email: location.state.emailUsuario, 
                token: token 
            });
            if (resposta.data['tokenValido'] === true) {
                setMensagem('Token validado com sucesso!');
                navigate('/esqueceusenha', {
                    state: { emailUsuarioToken: location.state.emailUsuario }
                });
            } else {
                setMensagem('Erro ao validar token. Tente novamente.');
            }
        } catch (erro) {
            setMensagem('Erro ao validar token. Tente novamente.');
        }
    };

    const handleClickVoltar = () => {
        navigate('/esqueceusenhaconfemail');
    };

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
                    <h2 className={`${styles.titulo} ${styles.tituloFormulario}`}>Esqueceu sua Senha?</h2>
                    <p className={styles.textoEmail1}>Digite o token de validação enviado para o seu email</p>
                    <p className={styles.textoEmail2}>para poder alterar sua senha</p>

                    <form className={styles.formulario} onSubmit={aoEnviarFormulario}>
                        <p className={styles.rotuloSenha}>Token de Validação:</p>
                        <div className={styles.campoSenha}>
                            <input
                                type="text"
                                placeholder="Digite o código"
                                required
                                value={token}
                                onChange={(e) => setToken(e.target.value)}
                            />
                        </div>
                        {mensagem && <p className={styles.mensagem}>{mensagem}</p>}
                    </form>

                    <button 
                        type="button"
                        className={`${styles.btnVoltar} ${styles.btnPrimario}`}
                        onClick={handleClickVoltar}
                    >
                        <i className="fa-solid fa-chevron-left"></i>Voltar
                    </button>
                    <button 
                        type="submit"
                        className={`${styles.btn} ${styles.btnPrimario}`}
                        onClick={aoEnviarFormulario}
                    >
                        Confirmar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EsqueceuSenha;