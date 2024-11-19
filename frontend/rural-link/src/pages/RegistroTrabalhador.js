import React, { useState } from 'react';
import styles from './css/cssPages/RegistroUser.module.css';
import iconemail from './images/Icon/iconemail.png';
import iconperfil from './images/Icon/iconperfil.png';
import icontelefone from './images/Icon/icontelefone.png';
import iconsenha from './images/Icon/iconsenha.png';
import iconkey from './images/Icon/iconkey.png';
import iconinforma from './images/Icon/iconinforma.png';
import { useNavigate } from 'react-router-dom';
import AuthService from '../autenticacao/AuthService';
import Header from './components/Header';

function RegistrarTrabalhador() {
    const [nomeCompleto, setNomeProprietario] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [codigo, setCodigo] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleInfoClick = () => {
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 3000); 
    };

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        try{
            const response = await AuthService.registrarTrabalhador({nomeCompleto, email, password, telefone, codigo});
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
        navigate('/selecaousuario');
    };

    return (
        <div className={styles.container}>
            <div className={styles.conteudo}>
            <Header title="Área de Cadastro"/>
                <h3 className={styles.tituloSecundario}>Trabalhador Rural</h3>
                <form className={styles.form} onSubmit={submitHandler}>
                    <div className={styles.iconGroup}>
                        <p className={styles.otherLabel}>Nome Completo <span className={styles.required} title="Campo obrigatório">*</span></p>
                        <label className={styles.labelInputTrab}>
                            <img src={iconperfil} className={styles.nomecompleto} alt="Ícone Perfil" />
                            <input
                                className={styles.input}
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
                                <label className={styles.labelShortInputTrab}>
                                    <img src={iconemail} className={styles.email} alt="Icon Email" />
                                    <input
                                        className={styles.input}
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
                                <label className={styles.labelShortInputTrab}>
                                    <img src={icontelefone} className={styles.telefone} alt="Icon Telefone" />
                                    <input
                                        className={styles.input}
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
                        <p className={styles.otherLabel}>
                            Chave da Fazenda 
                            <button 
                                className={styles.infobtn} 
                                onClick={handleInfoClick}
                            >
                                <img src={iconinforma} className={styles.info} alt="Ícone de Informação" />
                            </button> 
                            <span className={styles.required} title="Campo obrigatório">*</span>
                        </p>
                        <label className={styles.labelInputTrab}>
                            <img src={iconkey} className={styles.key} alt="Ícone de Chave" />
                            <input
                                className={styles.input}
                                type="text"
                                placeholder="Código da Fazenda Associada:"
                                required
                                name="chaveFazenda"
                                value={codigo}  
                                onChange={(e) => setCodigo(e.target.value)}
                            />
                        </label>
                        {showMessage && <p className={styles.message}>Atenção! Digite exatamente o mesmo código fornecido pelo proprietário para validar o cadastro</p>}
                    </div>

                    <div className={styles.iconGroup}>
                        <p className={styles.otherLabel}>Senha <span className={styles.required} title="Campo obrigatório">*</span></p>
                        <label className={styles.labelInputTrab}>
                            <img src={iconsenha} className={styles.senha} alt="Ícone Senha" />
                            <input
                                className={styles.input}
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
                        <label className={styles.labelInputTrab}>
                            <img src={iconsenha} className={styles.senha} alt="Ícone Senha" />
                            <input
                                className={styles.input}
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
                    <button className={`${styles.btnTrab} ${styles.btnPrimario}`} type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    );
}

export default RegistrarTrabalhador;
