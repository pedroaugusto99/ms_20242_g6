import Sidebar from './components/Sidebar';
import ImageProfile from './components/ImageProfile';
import Campo from './components/Campo';
import ManejoTable from './components/ManejoTable';
import styles from './css/cssPages/FichaAnimal.module.css';
import AuthService from '../autenticacao/AuthService';
import React from 'react';
import { setsEqual } from 'chart.js/helpers';
import PopUpPesagem from './modals/PopUpPesagem/PopUpPesagem';
import PopUpVacinacao from './modals/PopUpVacinacao/PopUpVacinacao';
import PopUpCrias from './modals/PopUpCrias/PopUpCrias';
import PopUpExclusao from './modals/PopUpExclusao/PopUpExclusao';
import PopUpConfirmacao from './modals/PopUpConfirmacao/PopUpConfirmacao';


function FichaAnimal() {
    // Dados
    const pesagemData = [
        { peso: '100kg', data: '2024-01-01', saldo: '5kg' },
    ];
    const vacinacaoData = [
        { nome: 'Vacina A', dataAplicacao: '2024-02-01', doses: 2, proximaAplicacao: '2024-06-01' },
    ];
    const criasData = [
        { codigo: '1234', nascimento: '2023-05-01', pai: '5678', idade: '1 ano' },
    ];

    // Estados para os modais
    const [modalPesagem, setModalPesagem] = React.useState(false);
    const [modalVacinacao, setModalVacinacao] = React.useState(false);
    const [modalCrias, setModalCrias] = React.useState(false);
    const [modalExclusao, setModalExclusao] = React.useState(false);
    const [modalConfirmacao, setModalConfirmacao] = React.useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    // Fun√ß√µes de controle dos modais
    const togglePesagemModal = () => {
        setModalPesagem(!modalPesagem);
    };

    const toggleVacinacaoModal = () => {
        setModalVacinacao(!modalVacinacao);
    };

    const toggleCriasModal = () => {
        setModalCrias(!modalCrias);
    };

    const toggleExclusaoModal = () => {
        setModalExclusao(!modalExclusao);
    };

    const toggleConfirmacaoModal = () => {
        setModalConfirmacao(!modalConfirmacao);
    };

    // Estado para os dados do animal
    const [nomeAnimal, setNomeAnimal] = React.useState(''); 
    const [codigoAnimal, setCodigoAnimal] = React.useState('');
    const [especieAnimal, setEspecieAnimal] = React.useState('');
    const [racaAnimal, setRacaAnimal] = React.useState('');
    const [sexoAnimal, setSexoAnimal] = React.useState('');
    const [dataDeNascimentoAnimal, setDataDeNascimentoAnimal] = React.useState('');
    const [idadeAnimal, setIdadeAnimal] = React.useState('');
    const [dataDeAquisicaoAnimal, setDataDeAquisicaoAnimal] = React.useState('');
    const [statusAnimal, setStatusAnimal] = React.useState('');
    const [loteAnimal, setLoteAnimal] = React.useState('');
    const [codigoDoPaiDoAnimal, setCodigoDoPaiDoAnimal] = React.useState('');
    const [codigoDaMaeDoAnimal, setCodigoDaMaeDoAnimal] = React.useState('');
    const [pesoAtualDoAnimal, setPesoAtualDoAnimal] = React.useState(null);
    const [numeroDeCriasDoAnimal, setNumeroDeCriasDoAnimal] = React.useState(null);
    const [qrCodeAnimal, setQrCodeAnimal] = React.useState('');

    React.useEffect(() => {
        AuthService.pegarDadosDoAnimal(location.state.identificador).then((response) => {
            setNomeAnimal(response.data['nome'])
            setCodigoAnimal(response.data['codigo'])
            setEspecieAnimal(response.data['especie'])
            setRacaAnimal(response.data['raca'])
            setSexoAnimal(response.data['sexo'])
            setDataDeNascimentoAnimal(response.data['dataDeNascimento'])
            setIdadeAnimal(response.data['idade'])
            setDataDeAquisicaoAnimal(response.data['dataDeAquisicao'])
            setStatusAnimal(response.data['status'])
            setLoteAnimal(response.data['lote'])
            setCodigoDoPaiDoAnimal(response.data['codigoDoPai'])
            setCodigoDaMaeDoAnimal(response.data['codigoDaMae'])
            setPesoAtualDoAnimal(response.data['pesoAtual'])
            setNumeroDeCriasDoAnimal(response.data['numeroDeCrias'])
        })
    }, []);

    React.useEffect(() => {
        AuthService.pegarQrCode(location.state.identificador).then((response) => {
            setQrCodeAnimal(response.data['qrCode'])
        })
    }, []);

    const handleAcessVoltar =() => {
        navigate('/fichamento')

    };

    return (
        <div className={styles.body}>
            <Sidebar title="Ficha Animal" />
            <div className={styles.content}>
                <ImageProfile />

                {/* Dados Essenciais e Dados Adicionais */}
                <div className={styles.dadosEssenciais}>
                    <h1 className={styles.titleFicha}>Dados Essenciais</h1>
                    <div className={styles.camposCima}>
                        <Campo label="CÛdigo do Animal" value={codigoAnimal} />
                        <Campo label="Nome" value={nomeAnimal} />
                        <Campo label="EspÈcie" value={especieAnimal} />
                        <Campo label="RaÁa" value={racaAnimal} />
                    </div>
                    <div className={styles.camposBaixo}>
                        <Campo label="Sexo" value={sexoAnimal} />
                        <Campo label="Data de Nascimento" value={dataDeNascimentoAnimal} />
                        <Campo label="Idade" value={idadeAnimal} />
                        <Campo label="Data de AquisiÁ„o" value={dataDeAquisicaoAnimal} />
                    </div>
                </div>

                {/* Dados Adicionais */}
                <div className={styles.dadosAdicionais}>
                    <h1 className={styles.titleFicha}>Dados Adicionais</h1>
                    <div className={styles.camposCima}>
                        <Campo label="Status" value={statusAnimal} />
                        <Campo label="Lote" value={loteAnimal} />
                        <Campo label="Pai (CÛdigo)" value={codigoDoPaiDoAnimal} />
                        <Campo label="M„e (CÛdigo)" value={codigoDaMaeDoAnimal} />
                    </div>
                    <div className={styles.camposBaixo}>
                        <Campo label="Peso Atual" value={pesoAtualDoAnimal} editable />
                        <Campo label="N˙mero de crias" value={numeroDeCriasDoAnimal} editable />
                    </div>
                </div>

                {/* Manejo */}
                <div className={styles.manejo}>
                    <h1 className={styles.titleManejo}>Manejos</h1>
                    <ManejoTable
                        title="Pesagem"
                        data={pesagemData}
                        columns={['Peso', 'Data da Pesagem', 'Saldo de Peso']}
                        toggleModal={togglePesagemModal}
                    />
                    <ManejoTable 
                        title="Vacina√ß√£o" 
                        data={vacinacaoData} 
                        columns={['Nome da Vacina', 'Data da Aplica√ß√£o', 'N√∫mero de Doses', 'Pr√≥xima Aplica√ß√£o']}
                        toggleModal={toggleVacinacaoModal}
                    />
                    <ManejoTable 
                        title="Crias" 
                        data={criasData} 
                        columns={['C√≥digo da Cria', 'Data de Nascimento', 'Pai (C√≥digo)', 'Idade']} 
                        toggleModal={toggleCriasModal}
                    />

                    <button className={`${styles.btn} ${styles.btnPrimario}`} type="button" onClick={handleAcessVoltar}>Voltar</button>
                    <button className={`${styles.btn} ${styles.btnPrimario}`} type="button" onClick={toggleExclusaoModal}>
                    <i className="fa-solid fa-trash-can"></i> Excluir Cadastro
                    </button>
                    <button className={`${styles.btn} ${styles.btnPrimario}`} type="submit" onClick={toggleConfirmacaoModal}>Confirmar Edi√ß√£o</button>

                </div>
            </div>

            {/* Popups */}
            {modalPesagem && <PopUpPesagem toggleModal={togglePesagemModal} />}
            {modalVacinacao && <PopUpVacinacao toggleModal={toggleVacinacaoModal} />}
            {modalCrias && <PopUpCrias toggleModal={toggleCriasModal} />}
            {modalExclusao && <PopUpExclusao toggleModal={toggleExclusaoModal} />}
            {modalConfirmacao && <PopUpConfirmacao toggleModal={toggleConfirmacaoModal} />}
        </div>
    );
}

export default FichaAnimal;

