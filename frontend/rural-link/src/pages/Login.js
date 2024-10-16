import React, { useState } from 'react';
import styles from './css/Login.module.css';
import logo from './images/logo.png';

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
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
                    <form className={styles.form}>
                        <p className={styles.otherLabel}>Email:</p>
                        <label className={styles.labelInput}>
                            <input type="email" placeholder="Email" required />
                        </label>
                        <p className={styles.otherLabel}>Senha:
                            <a href="#" className={styles.forgetpassword}>Esqueceu a senha?</a>
                        </p>
                        <label className={styles.labelInput}>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Senha"
                                required
                                id="isenha"
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
                            <p>Lembrar-me</p>
                        </div>

                        <button className={`${styles.btn} ${styles.btnPrimario}`} type="submit">Login</button>
                        <span className={styles.registerSpan}>Não possui uma conta?<a href="#" className={styles.registerLink}>Registre-se</a></span>        
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
