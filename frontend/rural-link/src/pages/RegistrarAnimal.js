import { useState } from 'react'; 
import styles from './css/RegistroAnimal.module.css';
import Sidebar from './components/Sidebar';
import 'react-datepicker/dist/react-datepicker.css';

import iconBovino from './images/iconBovino.png';
import iconOvina from './images/iconOvina.png';
import iconCaprino from './images/iconCaprino.png';
import iconSuino from './images/iconSuino.png';

function RegistrarAnimal() {
    const [especie, setEspecie] = useState('');
    const [raca, setRaca] = useState('');
    const [sexo, setSexo] = useState('');
    const [iconeAnimal, setIconeAnimal] = useState('');
    const [dataNascimento, setDataNascimento] = useState(null);
    const [codigoAnimal, setCodigoAnimal] = useState('');
    const [nomeAnimal, setNomeAnimal] = useState('');
    const [dataAquisicao, setDataAquisicao] = useState('');
    const [status, setStatus] = useState('');
    const [lote, setLote] = useState('');
    const [paiCodigo, setPaiCodigo] = useState('');
    const [maeCodigo, setMaeCodigo] = useState('');

    const racasPorEspecie = {
        BOVINOS: ["Angus", "Nelore", "Brahman", "Brangus", "Senepol", "Hereford", "Outra"],
        CAPRINOS: ["Saanen", "Toggenburg", "Murciana", "Parda Alpina", "Boer", "Savanna", "Canindé", "Moxotó", "Repartida", "Outra"],
        OVINOS: ["Santa Inês", "Morada Nova", "Suffolk", "Bergamácia", "Hampshire Down", "Outra"],
        SUINOS: ["Landrace", "Large White", "Duroc", "Piétrain", "Hampshire", "Outra"]
    };
    
    /*
    
    Função para converter o objeto das especies
        
    function objParaBack(obj) {
        const converterObjBack = {};
        Object.keys(obj).forEach(key => {
            converterObjBack[key] = obj[key].map(value =>
                value
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "") // Aqui tira os acentos
                    .toUpperCase()
                    .replace(/\s/g, "_") // Essa troca o espaço pelo "_"
            );
    });
    return converterObjBack;
    }
    
    const racasParaBackend = objParaBack(racasPorEspecie);
    */


    const handleEspecieChange = (e) => {
        const selectedEspecie = e.target.value;
        setEspecie(selectedEspecie);
        setRaca(''); 
        setSexo(''); 
        setIconeAnimal(getIcone(selectedEspecie)); 
    };

    const getIcone = (especie) => {
        switch (especie) {
            case 'BOVINOS':
                return iconBovino;
            case 'OVINOS':
                return iconOvina;
            case 'CAPRINOS':
                return iconCaprino;
            case 'SUINOS':
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
                    <img src={iconeAnimal} className={styles.icon} />
                </div>
                <div className={styles.header1}> 
                    <p>Dados Essenciais</p>
                </div>
                
                <div className={styles.inputRow}>
                    <div className={styles.inputGroup}>
                        <p className={`${styles.otherLabel} ${styles.labelShifted}`}>
                            Código do Animal <span className={styles.required} title="Campo obrigatório">*</span>
                        </p>
                        <label className={styles.labelShortInput}>
                            <input
                                type="number"
                                placeholder="Digite o Código do Animal:"
                                required
                                name="codigoAnimal"
                                value={codigoAnimal}
                                onChange={(e) => setCodigoAnimal(e.target.value)}
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
                                value={nomeAnimal}
                                onChange={(e) => setNomeAnimal(e.target.value)}
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
                                onChange={(e) => handleEspecieChange(e)}
                                className={styles.select}
                            >
                                <option value="" className={styles.selectHidden} disabled hidden>Selecione:</option>
                                <option value="BOVINOS">Bovinos</option>
                                <option value="CAPRINOS">Caprinos</option>
                                <option value="OVINOS">Ovinos</option>
                                <option value="SUINOS">Suínos</option>
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
                                onChange={(e) => setRaca(e.target.value)}
                                className={styles.select}
                                disabled={!especie}
                            >
                                <option value="" className={styles.selectHidden} disabled hidden>Selecione:</option>
                                {especie && racasPorEspecie[especie].map((racaOption) => (
                                    <option key={racaOption} value={racaOption}>{racaOption}</option>
                                ))}
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
                                <option value="Macho">Macho</option>
                                <option value="Fêmea">Fêmea</option>
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
                                value={dataNascimento}
                                onChange={(e) => setDataNascimento(e.target.value)}
                            />
                        </label>
                    </div>

                    <div className={styles.inputGroup}>
                        <p className={`${styles.otherLabel} ${styles.labelShifted}`}>
                            OQUE COLOCAR AQUI? SUBSTITUIR IDADE
                        </p>
                        <label className={styles.labelShortInput}>
                            <input
                                type="text"
                                placeholder="Digite algo aqui:"
                                name="campoExtra"
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
                                value={dataAquisicao}
                                onChange={(e) => setDataAquisicao(e.target.value)}
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
                                <option value="Ativo">Ativo</option>
                                <option value="Vendido">Vendido</option>
                                <option value="Faleceu">Faleceu</option>
                                <option value="Desaparecido">Desaparecido</option>
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
                                value={paiCodigo}
                                onChange={(e) => setPaiCodigo(e.target.value)}
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
                                value={maeCodigo}
                                onChange={(e) => setMaeCodigo(e.target.value)}
                            />
                        </label>
                    </div>
                </div>

                <div className={styles.Rowbtn}> 
                    <button className={`${styles.btn} ${styles.btnPrimario}`} type="button">Voltar</button>
                    <button className={`${styles.btn} ${styles.btnPrimario}`} type="submit">Cadastrar Animal</button>
                </div>
            </div>
        </div>
    );
}

export default RegistrarAnimal;
