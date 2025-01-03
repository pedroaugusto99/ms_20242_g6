import styles from './css/cssPages/RegistroAnimal.module.css';
import Sidebar from './components/Sidebar';
import 'react-datepicker/dist/react-datepicker.css';

import iconBovino from './images/iconBovino.png';
import iconOvina from './images/iconOvina.png';
import iconCaprino from './images/iconCaprino.png';
import iconSuino from './images/iconSuino.png';
import AuthService from '../autenticacao/AuthService';
import React, { useState } from 'react';
import PopUpConfirmacaoCadastroAn from './modals/PopUpConfirmacaoCadastroAn/PopUpConfirmacaoCadastroAn';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function RegistrarAnimal() {
    const [nome, setNome] = useState('');
    const [codigo, setCodigo] = useState('');
    const [especie, setEspecie] = useState('');
    const [raca, setRaca] = useState('');
    const [sexo, setSexo] = useState('');
    const [dataDeNascimento, setDataDeNascimento] = useState('');
    const [idade, setIdade] = useState(null);
    const [dataDeAquisicao, setDataDeAquisicao] = useState('');
    const [codigoDaMae, setCodigoDaMae] = useState('');
    const [codigoDoPai, setCodigoDoPai] = useState('');
    const [status, setStatus] = useState('');
    const [lote, setLote] = useState('');
    const [iconeAnimal, setIconeAnimal] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const [modalConfirmacao, setModalConfirmacao] = React.useState(false);

    const racasPorEspecie = {
        BOVINO: ["Angus", "Nelore", "Brahman", "Brangus", "Senepol", "Hereford", "Outra"],
        CAPRINO: ["Saanen", "Toggenburg", "Murciana", "Parda Alpina", "Boer", "Savanna", "Canindé", "Moxotó", "Repartida", "Outra"],
        OVINO: ["Santa Inês", "Morada Nova", "Suffolk", "Bergamácia", "Hampshire Down", "Outra"],
        SUINO: ["Landrace", "Large White", "Duroc", "Piétrain", "Hampshire", "Outra"]
    };

    const racasParaEnum = {
        BOVINO: ["ANGUS", "NELORE", "BRAHMAN", "BRANGUS", "SENEPOL", "HEREFORD", "OUTRA"],
        CAPRINO: ["SAANEN", "TOGGENBURG", "MURCIANA", "PARDA_ALPINA", "BOER", "SAVANNA", "CANINDE", "MOXOTO", "REPARTIDA", "OUTRA"],
        OVINO: ["SANTA_INES", "MORADA_NOVA", "SUFFOLK", "BERGAMACIA", "HAMPSHIRE_DOWN", "OUTRA"],
        SUINO: ["LANDRACE", "LARGE_WHITE", "DUROC", "PIETRAIN", "HAMPSHIRE", "OUTRA"]
    }

    const handleEspecieChange = (e) => {
        const selectedEspecie = e.target.value;
        setEspecie(selectedEspecie);
        setRaca(''); 
        setSexo(''); 
        setIconeAnimal(getIcone(selectedEspecie)); 
    };

    const handleAccessVoltar = () => {
        navigate('/fichamento')
    };

    const toggleConfirmacaoModal = () => {
        setModalConfirmacao(!modalConfirmacao);
    };


    const submitHandler = (event) => {
        event.preventDefault();
        try{
            const response = AuthService.registrarAnimal({nome, codigo, especie, raca, sexo, dataDeNascimento, idade, dataDeAquisicao, codigoDaMae, codigoDoPai, status, lote}, Cookies.get('authToken'));
            if (response.data !== 'Credenciais inválidas!'){
                navigate('/registraranimal');
            } else{
                setMessage('Credenciais inválidas!');
            }
        } catch(error){
            setMessage('Credenciais inválidas!');
        }
    };

    const getIcone = (especie) => {
        switch (especie) {
            case 'BOVINO':
                return iconBovino;
            case 'OVINO':
                return iconOvina;
            case 'CAPRINO':
                return iconCaprino;
            case 'SUINO':
                return iconSuino;
            default:
                return '';  
        }
    };

    return (
        <div className={styles.body}>
            <Sidebar title='Cadastro de Animais'/>
            <div className={styles.containerTable}>
                <div className={styles.iconContainer}>
                    <img src={iconeAnimal} className={styles.icon}/>
                </div>
                <div className={styles.header1}> 
                    <p>Dados Essenciais</p>
                </div>
                <form onSubmit={submitHandler}>
                    <div className={styles.inputRow}>
                        <div className={styles.inputGroup}>
                            <p className={`${styles.otherLabel} ${styles.labelShifted}`}>
                                Código do Animal <span className={styles.required} title="Campo obrigatório">*</span>
                            </p>
                            <label className={styles.labelShortInput}>
                                <input
                                    type="text"
                                    placeholder="Digite o Código do Animal:"
                                    required
                                    name="codigoAnimal"
                                    value={codigo}
                                    onChange={(e) => setCodigo(e.target.value)}
                                />
                            </label>
                        </div>

                        <div className={styles.inputGroup}>
                            <p className={`${styles.otherLabel} ${styles.labelShifted}`}>
                                Nome <span className={styles.required} title="Campo obrigatório">*</span>
                            </p>
                            <label className={styles.labelShortInput}>
                                <input
                                    type="text"
                                    placeholder="Digite o Nome do Animal:"
                                    required
                                    name="NomeAnimal"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                />
                            </label>
                        </div>

                        <div className={styles.inputGroup}>
                            <p className={`${styles.otherLabel} ${styles.labelShifted}`}>
                                Espécie <span className={styles.required} title="Campo obrigatório">*</span>
                            </p>
                            <label className={styles.labelShortInput}>
                                <select
                                    required
                                    value={especie}
                                    onChange={handleEspecieChange}
                                    className={styles.select}
                                >
                                    <option value="" className={styles.selectHidden} disabled hidden>Selecione:</option>
                                    <option value="BOVINO">Bovinos</option>
                                    <option value="CAPRINO">Caprinos</option>
                                    <option value="OVINO">Ovinos</option>
                                    <option value="SUINO">Suínos</option>
                                </select>
                            </label>
                        </div>

                        <div className={styles.inputGroup}>
                            <p className={`${styles.otherLabel} ${styles.labelShifted}`}>
                                Raça <span className={styles.required} title="Campo obrigatório">*</span>
                            </p>
                            <label className={styles.labelShortInput}>
                            <select
                                required
                                value={raca}
                                onChange={(e) => {
                                    setRaca(e.target.value);
                                }}
                                className={styles.select}
                                disabled={!especie}
                            >
                                <option value="" className={styles.selectHidden} disabled hidden>Selecione:</option>
                                {especie && racasParaEnum[especie].map((racasEnum) => {
                                    const valorUsuario = racasPorEspecie[especie][racasParaEnum[especie].indexOf(racasEnum)];
                                    return (
                                        <option value={racasEnum}>
                                            {valorUsuario}
                                        </option>
                                    );
                                })}
                            </select>



                            </label>
                        </div>
                    </div>

                    <div className={styles.inputRow}>
                        <div className={styles.inputGroup}>
                            <p className={`${styles.otherLabel} ${styles.labelShifted}`}>
                                Sexo <span className={styles.required} title="Campo obrigatório">*</span>
                            </p>
                            <label className={styles.labelShortInput}>
                                <select
                                    required
                                    value={sexo}
                                    onChange={(e) => setSexo(e.target.value)}
                                    className={styles.select}
                                >
                                    <option value="" className={styles.selectHidden} disabled hidden>Selecione:</option>
                                    <option value="MACHO">Macho</option>
                                    <option value="FEMEA">Fêmea</option>
                                </select>
                            </label>
                        </div>

                        <div className={styles.inputGroup}>
                            <p className={`${styles.otherLabel} ${styles.labelShifted}`}>
                                Data de Nascimento 
                            </p>
                            <label className={styles.labelShortInput}>
                                <input
                                    type="date" 
                                    name="dataNascimento" 
                                    className={styles.dateInput} 
                                    value={dataDeNascimento}
                                    onChange={(e) => setDataDeNascimento(e.target.value)}
                                />
                            </label>
                        </div>

                        <div className={styles.inputGroup}>
                            <p className={`${styles.otherLabel} ${styles.labelShifted}`}>
                            Idade
                            </p>
                            <label className={styles.labelShortInput}>
                                <input
                                    type="text"
                                    placeholder="Digite a idade do animal"
                                    name="campoExtra"
                                    value={idade}
                                    onChange={(e) => setIdade(e.target.value)}
                                />
                            </label>
                        </div>

                        <div className={styles.inputGroup}>
                            <p className={`${styles.otherLabel} ${styles.labelShifted}`}>
                                Data de Aquisição 
                            </p>
                            <label className={styles.labelShortInput}>
                                <input
                                    type="date" 
                                    name="dataAquisição" 
                                    className={styles.dateInput} 
                                    value={dataDeAquisicao}
                                    onChange={(e) => setDataDeAquisicao(e.target.value)}
                                />
                            </label>
                        </div>
                    </div>

                    <div className={styles.header2}> 
                        <p>Dados Adicionais</p>
                    </div>

                    <div className={styles.inputRow}>
                        <div className={styles.inputGroup}>
                            <p className={`${styles.otherLabel} ${styles.labelShifted}`}>
                                Status 
                            </p>
                            <label className={styles.labelShortInput}>
                                <select
                                    className={styles.select}
                                    name="status"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                >
                                    <option value="" className={styles.selectHidden} disabled hidden>Selecione:</option>
                                    <option value="ATIVO">Ativo</option>
                                    <option value="VENDIDO">Vendido</option>
                                    <option value="ABATIDO">Abatido</option>
                                    <option value="DESAPARECIDO">Desaparecido</option>
                                </select>
                            </label>
                        </div>

                        <div className={styles.inputGroup}>
                            <p className={`${styles.otherLabel} ${styles.labelShifted}`}>
                                Lote
                            </p>
                            <label className={styles.labelShortInput}>
                                <input
                                    type="text"
                                    placeholder="Digite o Lote:"
                                    name="lote"
                                    value={lote}
                                    onChange={(e) => setLote(e.target.value)}
                                />
                            </label>
                        </div>

                        <div className={styles.inputGroup}>
                            <p className={`${styles.otherLabel} ${styles.labelShifted}`}>
                                Pai (Código)
                            </p>
                            <label className={styles.labelShortInput}>
                                <input
                                    type="text"
                                    placeholder="Digite o Código do Pai:"
                                    name="paiCodigo"
                                    value={codigoDoPai}
                                    onChange={(e) => setCodigoDoPai(e.target.value)}
                                />
                            </label>
                        </div>

                        <div className={styles.inputGroup}>
                            <p className={`${styles.otherLabel} ${styles.labelShifted}`}>
                                Mãe (Código)
                            </p>
                            <label className={styles.labelShortInput}>
                                <input
                                    type="text"
                                    placeholder="Digite o Código da Mãe:"
                                    name="maeCodigo"
                                    value={codigoDaMae}
                                    onChange={(e) => setCodigoDaMae(e.target.value)}
                                />
                            </label>
                        </div>
                    </div>

                    <div className={styles.Rowbtn}> 
                    <button className={`${styles.btnVoltar} ${styles.btnPrimario}`}  onClick={handleAccessVoltar}><i className="fa-solid fa-chevron-left"></i>Voltar</button>
                        <button className={`${styles.btn} ${styles.btnPrimario}`} type="submit" onClick={toggleConfirmacaoModal}>Cadastrar Animal</button>
                    </div>
                </form>
            </div>
            {modalConfirmacao && <PopUpConfirmacaoCadastroAn toggleModal={toggleConfirmacaoModal} />}
        </div>
    );
}

export default RegistrarAnimal;
