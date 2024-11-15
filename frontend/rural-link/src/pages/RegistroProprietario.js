import React, { useState } from 'react';
import styles from './css/cssPages/RegistroUser.module.css';
import iconemail from './images/Icon/iconemail.png';
import iconperfil from './images/Icon/iconperfil.png';
import icontelefone from './images/Icon/icontelefone.png';
import iconsenha from './images/Icon/iconsenha.png';
import AuthService from '../autenticacao/AuthService';
import { useNavigate } from 'react-router-dom';


function RegistrarProprietario() {
    const [nomeCompleto, setNomeProprietario] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        try{
            const response = await AuthService.registrarProprietario({nomeCompleto, email, password, telefone});
            if (response.data !== 'Credenciais inválidas!'){
                navigate('/login');
            } else{
                setMessage('Credenciais inválidas!');
            }
        } catch(error){
            setMessage('Credenciais inválidas!');
        }
    };

    const handleClick = () => {
        navigate('/user-selection');
      };

    return (
        <div className={styles.container}>
            <div className={styles.conteudo}>

                <div className={styles.header}>
                    <h2 className={styles.tituloPrimario}>
                        Área de Cadastro
                    </h2>
                </div>

                <h3 className={styles.tituloSecundario}>Proprietário de Fazenda</h3>
                <form className={styles.form} onSubmit={submitHandler}>
                    <div className={styles.iconGroup}>
                                <p className={styles.otherLabel}>Nome Completo <span className={styles.required} title="Campo obrigatório">*</span></p>
                                <label className={styles.labelInput}>
                                    <img src={iconperfil} className={styles.nomecompleto} alt="Ícone Perfil" />
                                    <input
                                        type="text"
                                        placeholder="Digite Seu Nome Completo:"
                                        required
                                        name="nomedoProprietario"
                                        value={nomeCompleto}
                                        onChange={(e) => setNomeProprietario(e.target.value)}
                                    />
                                </label>
                            </div>

                    <div className={styles.containerInput}>
                        <div className={styles.inputRow}>
                            <div className={styles.inputGroup}>
                                <p className={`${styles.otherLabel} ${styles.labelShifted}`}>Email <span className={styles.required} title="Campo obrigatório">*</span></p>
                                <label className={styles.labelShortInput}>
                                    <img src={iconemail} className={styles.email} alt="Icon Email" />
                                    <input
                                        type="email"
                                        placeholder="Digite seu Email:"
                                        required
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </label>
                            </div>

                            <div className={styles.inputGroup}>
                                <p className={`${styles.otherLabel} ${styles.labelShifted}`}>Telefone <span className={styles.required} title="Campo obrigatório">*</span></p>
                                <label className={styles.labelShortInput}>
                                    <img src={icontelefone} className={styles.telefone} alt="Icon Telefone" />
                                    <input
                                        type="tel"
                                        placeholder="Digite seu Número:"
                                        required
                                        name="telefoneProprietario"
                                        value={telefone}
                                        onChange={(e) => setTelefone(e.target.value)}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className={styles.iconGroup}>
                        <p className={styles.otherLabel}>Senha <span className={styles.required} title="Campo obrigatório">*</span></p>
                        <label className={styles.labelInput}>
                            <img src={iconsenha} className={styles.senha} alt="Ícone Senha" />
                            <input
                                type={showPassword ? 'text' : 'password'} // Mude o tipo com base no estado
                                placeholder="Senha:"
                                required
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                className={styles.toggleButton}
                                type="button"
                                onClick={togglePasswordVisibility}
                            >
                                <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                            </button>
                        </label>
                    </div>

                    <div className={styles.iconGroup}>
                        <p className={styles.otherLabel}>Confirmar Senha <span className={styles.required} title="Campo obrigatório">*</span></p>
                        <label className={styles.labelInput}>
                            <img src={iconsenha} className={styles.senha} alt="Ícone Senha" />
                            <input
                                type={showPassword ? 'text' : 'password'} // Mude o tipo com base no estado
                                placeholder="Confirmar Senha:"
                                required
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <button
                                className={styles.toggleButton}
                                type="button"
                                onClick={togglePasswordVisibility}
                            >
                                <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                            </button>
                        </label>
                    </div>

                    <button className={`${styles.btnVoltar} ${styles.btnPrimario}`}  onClick={handleClick}><i className="fa-solid fa-chevron-left"></i>Voltar</button>
                    <button className={`${styles.btnProp} ${styles.btnPrimario}`} type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    );
    
};

export default RegistrarProprietario;