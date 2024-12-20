import React, { useState } from 'react';
import styles from './css/cssPages/RegistroFazenda.module.css';
import iconnomefazenda from './images/Icon/iconnomefazenda.png';
import icontamanhofazenda from './images/Icon/icontamanhofazenda.png';
import iconcow from './images/Icon/iconcow.png';
import iconcomplementofazenda from './images/Icon/iconcomplementofazenda.png';
import iconenderecofazenda from './images/Icon/iconenderecofazenda.png';
import { useNavigate } from 'react-router-dom';
import AuthService from '../autenticacao/AuthService';
import Header from './components/Header';
import Cookies from 'js-cookie';

function RegistrarFazenda() {
    const [nomeDaFazenda, setNomeDaFazenda] = useState('');
    const [tamanho, setTamanhoDaFazenda] = useState('');
    const [tipoDaFazenda, setTipoDaFazenda] = useState('');
    const [endereco, setEndereco] = useState('');
    const [complemento, setComplemento] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [cep, setCEP] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const submitHandler = async (event) => {
        event.preventDefault();
        try{
            const response = await AuthService.registrarFazenda({nomeDaFazenda, endereco, complemento, cidade, cep, estado, tipoDaFazenda, tamanho}, Cookies.get('authToken'));
            if (response.data !== 'Credenciais inválidas!'){
                navigate('/dashboard');
            } else{
                setMessage('Credenciais inválidas!');
            }
        } catch(error){
            setMessage('Credenciais inválidas!');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.conteudo}>
            <Header title="Área de Cadastro"/>
                <h3 className={styles.tituloSecundario}>Fazenda</h3>
                <form className={styles.form} onSubmit={submitHandler}>
                    <div className={styles.iconGroup}>
                        <p className={styles.otherLabel}>
                            Nome da Fazenda <span className={styles.required} title="Campo obrigatório">*</span>
                        </p>
                        <label className={styles.labelInput}>
                            <img src={iconnomefazenda} className={styles.nomefazenda} alt="Ícone da Fazenda" />
                            <input
                                type="text"
                                placeholder="Digite o Nome da Fazenda:"
                                required
                                name="nomeDaFazenda"
                                value={nomeDaFazenda}
                                onChange={(e) => setNomeDaFazenda(e.target.value)}
                            />
                        </label>
                    </div>

                    <div className={styles.iconGroup}>
                        <p className={styles.otherLabel}>
                            Tamanho da Fazenda em Hectares <span className={styles.required} title="Campo obrigatório">*</span>
                        </p>
                        <label className={styles.labelInput}>
                            <img src={icontamanhofazenda} className={styles.tamanhofazenda} alt="Ícone do Tamanho da Fazenda" />
                            <input
                                type="number"
                                placeholder="Digite o Tamanho da Fazenda em Hectares:"
                                required
                                name="tamanho"
                                value={tamanho}
                                onChange={(e) => setTamanhoDaFazenda(e.target.value)}
                            />
                        </label>
                    </div>

                    <div className={styles.iconGroup}>
                        <p className={styles.otherLabel}>
                            Escolha seu tipo de Rebanho <span className={styles.required} title="Campo obrigatório">*</span>
                        </p>
                        <label className={styles.labelInput}>
                            <img src={iconcow} className={styles.tiporebanho} alt="Ícone Tipo de Rebanho" />
                            <select
                                required
                                value={tipoDaFazenda}
                                onChange={(e) => setTipoDaFazenda(e.target.value)}
                            >
                                <option value="" className={styles.selectHidden} disabled hidden>Selecione:</option>
                                <option value="LEITEIRA">Produção de Leite</option>
                                <option value="DE_CORTE">Produção de Carne</option>
                                <option value="DE_CORTE_E_LEITEIRA">Ambas Opções</option>
                            </select>
                        </label>
                    </div>

                    <div className={styles.iconGroup}>
                        <p className={styles.otherLabel}>
                            Endereço <span className={styles.required} title="Campo obrigatório">*</span>
                        </p>
                        <label className={styles.labelInput}>
                            <img src={iconenderecofazenda} className={styles.enderecofazenda} alt="Endereço da Fazenda" />
                            <input
                                type='text'
                                placeholder='Digite o Endereço da Fazenda'
                                required
                                name='enderacoFazenda'
                                value={endereco}
                                onChange={(e) => setEndereco(e.target.value)}
                            />
                        </label>
                    </div>

                    <div className={styles.containerInput}>
                        <div className={styles.inputRow}>
                            <div className={styles.inputGroup}>
                                <p className={`${styles.otherLabel} ${styles.labelShifted}`}>
                                    Estado <span className={styles.required} title="Campo obrigatório">*</span>
                                </p>
                                <label className={styles.labelShortInput}>
                                    <img src={iconcomplementofazenda} className={styles.complementofazenda} alt="Estado da Fazenda" />
                                    <input
                                        type="text"
                                        placeholder="Digite o Estado da Fazenda:"
                                        required
                                        name="estadofazenda"
                                        value={estado}
                                        onChange={(e) => setEstado(e.target.value)}
                                    />
                                </label>
                            </div>

                            <div className={styles.inputGroup}>
                                <p className={`${styles.otherLabel} ${styles.labelShifted}`}>
                                    Cidade <span className={styles.required} title="Campo obrigatório">*</span>
                                </p>
                                <label className={styles.labelShortInput}>
                                    <img src={iconcomplementofazenda} className={styles.complementofazenda} alt="Cidade da Fazenda" />
                                    <input
                                        type="text"
                                        placeholder="Cidade da Fazenda:"
                                        required
                                        name="cidadeFazenda"
                                        value={cidade}
                                        onChange={(e) => setCidade(e.target.value)}
                                    />
                                </label>
                            </div>
                        </div>

                        <div className={styles.inputRow}>
                            <div className={styles.inputGroup}>
                                <p className={`${styles.otherLabel} ${styles.labelShifted}`}>Complemento</p>
                                <label className={styles.labelShortInput}>
                                    <img src={iconcomplementofazenda} className={styles.complementofazenda} alt="Complemento da Fazenda" />
                                    <input
                                        type="text"
                                        placeholder="Digite o Complemento:"
                                        name="complementoFazenda"
                                        value={complemento}
                                        onChange={(e) => setComplemento(e.target.value)}
                                    />
                                </label>
                            </div>

                            <div className={styles.inputGroup}>
                                <p className={`${styles.otherLabel} ${styles.labelShifted}`}>CEP</p>
                                <label className={styles.labelShortInput}>
                                    <img src={iconcomplementofazenda} className={styles.complementofazenda} alt="CEP da Fazenda" />
                                    <input
                                        type="text"
                                        placeholder="CEP da Fazenda:"
                                        name="cepFazenda"
                                        maxLength={8}
                                        value={cep}
                                        onChange={(e) => setCEP(e.target.value)}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>

                    <button className={`${styles.btn} ${styles.btnPrimario}`} type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

export default RegistrarFazenda;
