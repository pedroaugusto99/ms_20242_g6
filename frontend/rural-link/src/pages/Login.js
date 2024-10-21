import React, { useState } from 'react';
import styles from './css/Login.module.css';
import {useNavigate} from 'react-router-dom';
import logo from './images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthService from '../autenticacao/AuthService';

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        try{
            const response = await AuthService.login({email, password});
            if (response.data !== 'Credenciais inválidas!' && response.data['redirectToCriarFazenda'] === true){
                navigate('/registrarfazenda');
            } else if (response.data !== 'Credencias inválidas'){
                navigate('/dashboard');
            } else {
                setMessage('Credenciais inválidas!');
            }
            if (response.data !== null){
                window.localStorage.setItem('auth_token', response.data['token']);
            } else{
            }
        } catch(error){
            setMessage('Credenciais inválidas!');
        }
    };

    const handleRegister = (event) => {
        event.preventDefault();
        navigate('/user-selection'); 
    };

    return (
        <div className={styles.container}>
            <div className={`${styles.conteudo} ${styles.primeiroConteudo}`}>
                <div className={styles.primeiraColuna}>
                    <h2 className={`${styles.titulo} ${styles.tituloPrimario}`}>Bem-Vindo(a) !</h2>
                    <p className={`${styles.descricao} ${styles.descricaoPrimaria}`}>Faça Login para ter acesso a</p>
                    <p className={`${styles.descricao} ${styles.descricaoPrimaria}`}>sua conta</p>
                </div>

                <div className={styles.segundaColuna}>
                    <img src={logo} alt="Logo" className={styles.logo} />
                    <h2 className={`${styles.titulo} ${styles.tituloSecundario}`}>Entre na sua Conta</h2>
                    <form className={styles.form} onSubmit={submitHandler}>
                        <p className={styles.otherLabel}>Email:</p>
                        <label className={styles.labelInput}>
                            <input type="email" 
                            placeholder="Email"
                            required 
                            name= "email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                        <p className={styles.otherLabel}>Senha:
                            <a href="#" className={styles.forgetpassword}>Esqueceu a senha?</a>
                        </p>
                        <label className={styles.labelInput}>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Senha"
                                required
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                id="togglePassword"
                                className={styles.toggleButton}
                                type="button"
                                onClick={togglePasswordVisibility}
                            >
                                <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                            </button>
                        </label>
                        <div className={styles.remember}>
                            <input type="checkbox" className={styles.rememberInput} />
                            <p className={styles.rememberParagraph}>Lembrar-me</p>
                        </div>

                        <button className={`${styles.btn} ${styles.btnPrimario}`} type="submit">Login</button>

                        <span className={styles.registerSpan}>
                            Não possui uma conta?
                            <a href="#" className={styles.registerLink} onClick={handleRegister}>Registre-se</a>
                        </span>          
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
