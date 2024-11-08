import Sidebar from './components/Sidebar';
import ImageProfile from './components/ImageProfile';
import Campo from './components/Campo';
import ManejoTable from './components/ManejoTable';
import styles from './css/FichaAnimal.module.css';
import AuthService from '../autenticacao/AuthService';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { handleGeneratePDF } from './components/GerarPDF';


function FichaAnimal() {
    const pesagemData = [
        { peso: '100kg', data: '2024-01-01', saldo: '5kg' },
    ];
    const vacinacaoData = [
        { nome: 'Vacina A', dataAplicacao: '2024-02-01', doses: 2, proximaAplicacao: '2024-06-01' },
    ];
    const criasData = [
        { codigo: '1234', nascimento: '2023-05-01', pai: '5678', idade: '1 ano' },
    ];

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

    const location = useLocation();
    const navigate = useNavigate();

    React.useEffect(() => {
        // Comentando a requisição para o backend
        // AuthService.pegarDadosDoAnimal(location.state.identificador)
        //     .then((response) => {
        //         setNomeAnimal(response.data['nome']);
        //         setCodigoAnimal(response.data['codigo']);
        //         setEspecieAnimal(response.data['especie']);
        //         setRacaAnimal(response.data['raca']);
        //         setSexoAnimal(response.data['sexo']);
        //         setDataDeNascimentoAnimal(response.data['dataDeNascimento']);
        //         setIdadeAnimal(response.data['idade']);
        //         setDataDeAquisicaoAnimal(response.data['dataDeAquisicao']);
        //         setStatusAnimal(response.data['status']);
        //         setLoteAnimal(response.data['lote']);
        //         setCodigoDoPaiDoAnimal(response.data['codigoDoPai']);
        //         setCodigoDaMaeDoAnimal(response.data['codigoDaMae']);
        //         setPesoAtualDoAnimal(response.data['pesoAtual']);
        //         setNumeroDeCriasDoAnimal(response.data['numeroDeCrias']);
        //     })
        //     .catch((error) => {
        //         console.error('Erro ao pegar dados do animal:', error);
        //     });

        // Dados simulados (mocked data)
        setNomeAnimal('Animal Teste');
        setCodigoAnimal('12345');
        setEspecieAnimal('Gado');
        setRacaAnimal('Bovino');
        setSexoAnimal('Macho');
        setDataDeNascimentoAnimal('2020-01-01');
        setIdadeAnimal('4 anos');
        setDataDeAquisicaoAnimal('2020-06-15');
        setStatusAnimal('Ativo');
        setLoteAnimal('Lote A');
        setCodigoDoPaiDoAnimal('1111');
        setCodigoDaMaeDoAnimal('2222');
        setPesoAtualDoAnimal('150kg');
        setNumeroDeCriasDoAnimal(2);
    }, []); 

    React.useEffect(() => {
        // Comentando a requisição para o QR Code
        // AuthService.pegarQrCode(location.state.identificador)
        //     .then((response) => {
        //         setQrCodeAnimal(response.data['qrCode']);
        //     })
        //     .catch((error) => {
        //         console.error('Erro ao pegar QR code:', error);
        //     });

        // Dados simulados para QR Code
        setQrCodeAnimal('QRCode_simulado_12345');
    }, []); 

    const handleAccessVoltar = () => {
        navigate('/fichamento');
    };

    return (
        <div className={styles.body}>
            <Sidebar title="Ficha Animal" />
            <div className={styles.content}>
                <ImageProfile />
                
                <div className={styles.dadosEssenciais}>
                    <h1 className={styles.titleFicha}>Dados Essenciais</h1>
                    <div className={styles.camposCima}>
                        <Campo label="Código do Animal" value={codigoAnimal} />
                        <Campo label="Nome" value={nomeAnimal} />
                        <Campo label="Espécie" value={especieAnimal} />
                        <Campo label="Raça" value={racaAnimal} />
                    </div>
                    <div className={styles.camposBaixo}>
                        <Campo label="Sexo" value={sexoAnimal} />
                        <Campo label="Data de Nascimento" value={dataDeNascimentoAnimal} />
                        <Campo label="Idade" value={idadeAnimal} />
                        <Campo label="Data de Aquisição" value={dataDeAquisicaoAnimal} />
                    </div>
                </div>

                <div className={styles.dadosAdicionais}>
                    <h1 className={styles.titleFicha}>Dados Adicionais</h1>
                    <div className={styles.camposCima}>
                        <Campo label="Status" value={statusAnimal} />
                        <Campo label="Lote" value={loteAnimal} />
                        <Campo label="Pai (Código)" value={codigoDoPaiDoAnimal} />
                        <Campo label="Mãe (Código)" value={codigoDaMaeDoAnimal} />
                    </div>
                    <div className={styles.camposBaixo}>
                        <Campo label="Peso Atual" value={pesoAtualDoAnimal} editable />
                        <Campo label="Número de Crias" value={numeroDeCriasDoAnimal} editable />
                    </div>
                </div>

                <div className={styles.manejo}>
                    <h1 className={styles.titleManejo}>Manejos</h1>
                    <ManejoTable title="Pesagem" data={pesagemData} columns={['Peso', 'Data da Pesagem', 'Saldo de Peso']} />
                    <ManejoTable title="Vacinação" data={vacinacaoData} columns={['Nome da Vacina', 'Data da Aplicação', 'Número de Doses', 'Próxima Aplicação']} />
                    <ManejoTable title="Crias" data={criasData} columns={['Código da Cria', 'Data de Nascimento', 'Pai (Código)', 'Idade']} />
                </div>

                <div className={styles.Rowbtn}>
                    <button className={`${styles.btn} ${styles.btnPrimario}`} type="button" onClick={handleAccessVoltar}>Voltar</button>
                    <button className={`${styles.btn} ${styles.btnPrimario}`}
  type="button"
  onClick={handleGeneratePDF}
>
  Gerar PDF</button>
                    <button className={`${styles.btn} ${styles.btnPrimario}`} type="button"><i className="fa-solid fa-trash-can"></i> Excluir Cadastro</button>
                    <button className={`${styles.btn} ${styles.btnPrimario}`} type="submit">Confirmar Edição</button>

                </div>
            </div>
        </div>
    );
}

export default FichaAnimal;
