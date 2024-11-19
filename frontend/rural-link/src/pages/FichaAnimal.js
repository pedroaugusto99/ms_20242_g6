// Importações necessárias
import Sidebar from './components/Sidebar';
import ImageProfile from './components/ImageProfile';
import Campo from './components/Campo';
import ManejoTableVacinacao from './components/ManejoTableVacinacao';
import ManejoTablePesagem from './components/ManejoTablePesagem';
import ManejoTableCrias from './components/ManejoTableCrias';
import styles from './css/cssPages/FichaAnimal.module.css';
import AuthService from '../autenticacao/AuthService';
import React, { useState } from 'react';
import { setsEqual } from 'chart.js/helpers';
import PopUpPesagem from './modals/PopUpPesagem/PopUpPesagem';
import PopUpVacinacao from './modals/PopUpVacinacao/PopUpVacinacao';
import PopUpCrias from './modals/PopUpCrias/PopUpCrias';
import PopUpExclusao from './modals/PopUpExclusao/PopUpExclusao';
import PopUpConfirmacao from './modals/PopUpConfirmacao/PopUpConfirmacao';
import { useLocation, useNavigate } from 'react-router-dom';
import { DadosParaPopUpsDeManejo } from '../hooks/DadosParaPopUpsDeManejo';
import Cookies from 'js-cookie';

function FichaAnimal() {
    const {
        vacinacaoData, pesagemData, criasData,
      } = DadosParaPopUpsDeManejo();

    // Estados para os modais
    const [modalPesagem, setModalPesagem] = React.useState(false);
    const [modalVacinacao, setModalVacinacao] = React.useState(false);
    const [modalCrias, setModalCrias] = React.useState(false);
    const [modalExclusao, setModalExclusao] = React.useState(false);
    const [modalConfirmacao, setModalConfirmacao] = React.useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const handleGoToPdf = () => {
        navigate('/pdf')
    };

    // Funções de controle dos modais
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
    const [dadosPesos, setDadosPesos] = useState('');
    const [dadosVacinas, setDadosVacinas] = useState('');
    const [dadosCrias, setDadosCrias] = useState('');
    const [qrCodeAnimal, setQrCodeAnimal] = React.useState('');

    React.useEffect(() => {
        AuthService.pegarDadosDoAnimal(location.state.identificador, Cookies.get('authToken')).then((response) => {
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
        AuthService.listarPesos(location.state.identificador, Cookies.get('authToken')).then((response) => {
            setDadosPesos(response.data);
        })
    }, []);

    React.useEffect(() => {
        AuthService.listarVacinas(location.state.identificador, Cookies.get('authToken')).then((response) => {
            setDadosVacinas(response.data);
        })
    }, []);

    React.useEffect(() => {
        AuthService.listarCrias(location.state.identificador, Cookies.get('authToken')).then((response) => {
            setDadosCrias(response.data);
        })
    }, []);

    React.useEffect(() => {
        AuthService.pegarQrCode(location.state.identificador, Cookies.get('authToken')).then((response) => {
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
                        <Campo label="Código do Animal" value={codigoAnimal} />
                        <Campo label="Nome" value={nomeAnimal}/>
                        <Campo label="Espécie" value={especieAnimal}/>
                        <Campo label="Raça" value={racaAnimal}/>
                    </div>
                    <div className={styles.camposBaixo}>
                        <Campo label="Sexo" value={sexoAnimal}/>
                        <Campo label="Data de Nascimento" value={dataDeNascimentoAnimal}/>
                        <Campo label="Idade" value={idadeAnimal}/>
                        <Campo label="Data de Aquisição" value={dataDeAquisicaoAnimal}/>
                    </div>
                </div>

                {/* Dados Adicionais */}
                <div className={styles.dadosAdicionais}>
                    <h1 className={styles.titleFicha}>Dados Adicionais</h1>
                    <div className={styles.camposCima}>
                        <Campo label="Status" value={statusAnimal}/>
                        <Campo label="Lote" value={loteAnimal}/>
                        <Campo label="Pai (Código)" value={codigoDoPaiDoAnimal}/>
                        <Campo label="Mãe (Código)" value={codigoDaMaeDoAnimal}/>
                    </div>
                    <div className={styles.camposBaixo}>
                        <Campo label="Peso Atual" editable value={pesoAtualDoAnimal}/>
                        <Campo label="Número de Crias" editable value={numeroDeCriasDoAnimal}/>
                    </div>
                </div>

                {/* Manejo */}
                <div className={styles.manejo}>
                    <h1 className={styles.titleManejo}>Manejos</h1>
                    <ManejoTablePesagem
                    title="Pesagem"
                    data={dadosPesos || []}
                    columns={['Peso', 'Data da Pesagem', 'Saldo de Peso']}
                    toggleModal={togglePesagemModal}
                    />
                   <ManejoTableVacinacao 
                        title="Vacinação" 
                        data={dadosVacinas || []}
                        columns={['Nome da Vacina', 'Data da Aplicação', 'Número de Doses', 'Próxima Aplicação']}
                        toggleModal={toggleVacinacaoModal}
                    />
                    <ManejoTableCrias 
                        title="Crias" 
                        data={dadosCrias || []}
                        columns={['Código da Cria', 'Data de Nascimento', 'Pai (Código)', 'Idade']} 
                        toggleModal={toggleCriasModal}
                    />
                </div>

                {/* Botões */}
                <div className={styles.Rowbtn}>
                    <button className={`${styles.btnVoltar} ${styles.btnPrimario}`} type="button" onClick={handleAcessVoltar}><i className="fa-solid fa-chevron-left"></i>Voltar</button>
                    <button className={`${styles.btn} ${styles.btnPrimario}`} type="button" onClick={handleGoToPdf}><i className="fa-solid fa-file-pdf"></i> Gerar PDF</button>
                    <button className={`${styles.btn} ${styles.btnPrimario}`} type="button" onClick={toggleExclusaoModal}>
                    <i className="fa-solid fa-trash-can"></i> Excluir Cadastro
                    </button>
                    <button className={`${styles.btn} ${styles.btnPrimario}`} type="submit" onClick={toggleConfirmacaoModal}>Confirmar Edição</button>
                </div>
            </div>

            {/* Popups */}
            {modalPesagem && <PopUpPesagem toggleModal={togglePesagemModal} dadosPesagem={dadosPesos} animalId={location.state.identificador}/>}
            {modalVacinacao && <PopUpVacinacao toggleModal={toggleVacinacaoModal}  dadosVacinacao={dadosVacinas} animalId={location.state.identificador}/>}
            {modalCrias && <PopUpCrias toggleModal={toggleCriasModal} dadosCrias={dadosCrias}/>}
            {modalExclusao && <PopUpExclusao toggleModal={toggleExclusaoModal} animalId={location.state.identificador}/>}
            {modalConfirmacao && <PopUpConfirmacao toggleModal={toggleConfirmacaoModal} />}
        </div>
    );
}

export default FichaAnimal;
