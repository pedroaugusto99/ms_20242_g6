import React, { useState } from 'react';
import styles from './css/cssPages/EsqueceuSenhaEmailToken.module.css';
import { useNavigate } from 'react-router-dom';
import logo from './images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthService from '../autenticacao/AuthService';

function EsqueceuSenha() {
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const navigate = useNavigate();

    const aoEnviarFormulario = async (event) => {
        event.preventDefault();
        try {
            const resposta = await AuthService.validaremail({ email: email });
            if (resposta.statusText === 'OK') {
                setMensagem('Email enviado com sucesso!');
                navigate('/esqueceusenhatoken' , {state:{emailUsuario: email}});
            } else {
                setMensagem('Erro ao enviar email. Tente novamente.');
            }
        } catch (erro) {
            setMensagem('Erro ao enviar email. Tente novamente.');
        }
    };

    const EntradaEmail = ({ label, valor, aoMudar }) => (
        <div className={styles.campoSenha}>
            <input
                type={setEmail ? 'text' : 'email'}
                placeholder={label}
                required
                value={valor}
                onChange={aoMudar}
            />
        </div>
    );

    const FormularioRedefinicaoSenha = () => (
        <form className={styles.formulario} onSubmit={aoEnviarFormulario}>
            <p className={styles.rotuloSenha}>Email:</p>
            <EntradaEmail label="Digite seu email" valor={email} aoMudar={(e) => setEmail(e.target.value)} />
            {mensagem && <p className={styles.mensagem}>{mensagem}</p>}
        </form>
    );

    const handleClickVoltar = () => {
        navigate('/login');
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
                    <p className={styles.textoEmail1}>Digite o email vinculado à sua conta na plataforma</p>
                    <p className={styles.textoEmail2}>para receber o token de validação</p>

                    <FormularioRedefinicaoSenha />

                    <button className={`${styles.btnVoltar} ${styles.btnPrimario}`}  onClick={handleClickVoltar}><i className="fa-solid fa-chevron-left"></i>Voltar</button>
                    <button className={`${styles.btn} ${styles.btnPrimario}`} type="submit">Confirmar</button>

                    
                </div>
            </div>
        </div>
    );
}

export default EsqueceuSenha;