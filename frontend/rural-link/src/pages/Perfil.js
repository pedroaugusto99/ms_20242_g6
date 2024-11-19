import React from 'react';
import styles from './css/cssPages/Perfil.module.css';
import Sidebar from './components/Sidebar';
import AuthService from '../autenticacao/AuthService';
import { useNavigate } from 'react-router-dom';

import trabalhadoricon from './images/trabalhadoricon.jpeg';
import fazendeiroicon from './images/fazendeiroicon.jpeg';
import Cookies from 'js-cookie'

function Perfil() {
    const [nomeUsuario, setNomeUsuario] = React.useState(null);
    const [roleUsuario, setRoleUsuario] = React.useState(null);
    const [emailUsuario, setEmailUsuario] = React.useState(null);
    const [telefoneUsuario, setTelefoneUsuario] = React.useState(null);
    
    const [nomeFazenda, setNomeFazenda] = React.useState(null);
    const [tipoFazenda, setTipoFazenda] = React.useState(null);
    const [tamanhoFazenda, setTamanhoFazenda] = React.useState(null);
    const [complementoFazenda, setComplementoFazenda] = React.useState(null);
    const [cidadeFazenda, setCidadeFazenda] = React.useState(null);
    const [cepFazenda, setCepFazenda] = React.useState(null);
    const [estadoFazenda, setEstadoFazenda] = React.useState(null);
    const [codigoFazenda, setCodigoFazenda] = React.useState("3232dwewd");

    const [buttonText, setButtonText] = React.useState('Copiar'); 

    React.useEffect(() => {
        AuthService.pegarDadosDoUsuario(Cookies.get('authToken')).then((response) => {
            setNomeUsuario(response.data['nome']);
            setRoleUsuario(response.data['role']);
            setEmailUsuario(response.data['email']);
            setTelefoneUsuario(response.data['telefone']);
            setNomeFazenda(response.data['nomeFazenda']);
            setTipoFazenda(response.data['tipoFazenda']);
            setTamanhoFazenda(response.data['tamanhoFazenda']);
            setComplementoFazenda(response.data['complemento']);
            setCidadeFazenda(response.data['cidade']);
            setCepFazenda(response.data['cep']);
            setEstadoFazenda(response.data['estado']);
            setCodigoFazenda(response.data['codigoDaFazenda']); 
            setNomeFazenda(response.data['nomeDaFazenda']);
            setTipoFazenda(response.data['tipoDaFazenda']);
            setTamanhoFazenda(response.data['tamanhoDaFazenda']);
        });
    }, []);

    const handleGerarCodigo = (event) => {
        event.preventDefault();
        AuthService.gerarNovoCodigo(Cookies.get('authToken')).then((response) => {
            setCodigoFazenda(response.data['codigo']);
            window.location.reload();
        });
    }

    const handleCopy = () => {
        if (codigoFazenda) {
            navigator.clipboard.writeText(codigoFazenda).catch(err => {
                console.error('Erro ao copiar o código: ', err);
            });

            
            setButtonText('Copiado');
            
            setTimeout(() => {
                setButtonText('Copiar');
            }, 2000); 
        }
    };

    const getProfileImage = (role) => {
        if (role === "Proprietário") {
            return fazendeiroicon;  
        } else if (role === "Trabalhador") {
            return trabalhadoricon;  
        } else {
            return "https://via.placeholder.com/150";  
        }
    };

    const Profile = ({ name, role, imgSrc, stylesImg, stylesPerfilInfos, stylesNamePerfil, stylesDescPerfil }) => (
        <div id={stylesPerfilInfos} className="perfilInfos">
            <img src={imgSrc} alt="profile" className={stylesImg} />
            <h3 className="namePerfil" id={stylesNamePerfil}>{name}</h3>
            <p className="descPerfil" id={stylesDescPerfil}>{role}</p>
        </div>
    );

    const DataField = ({ label, value, customClass, onCopyClick, buttonText }) => (
        <p className={`${styles.textField} ${customClass ? customClass : ''}`}>
            <label className={styles.label}>{label}</label>
            <div className={`${styles.data} ${customClass ? customClass : ''}`}>
                {value}
                {onCopyClick && (
                    <button 
                        className={`${styles.btnCopy} ${buttonText === 'Copiado' ? styles.btnCopied : ''}`} 
                        onClick={onCopyClick}>
                        {buttonText} {}
                    </button>
                )}
            </div>
        </p>
    );

    const navigate = useNavigate();

    const handleAccessVoltar = () => {
        navigate(-1);
    };

    return (
        <div className="container">
            <Sidebar title="Perfil" />
            <div className={styles.conteudo}>
                <div className="profile">
                    <Profile
                        name={nomeUsuario}
                        role={roleUsuario}
                        imgSrc={getProfileImage(roleUsuario)}  
                        stylesImg={styles.imgPerfil}
                        stylesPerfilInfos={styles.perfilInfos}
                        stylesNamePerfil={styles.namePerfil}
                        stylesDescPerfil={styles.descPerfil}
                    />
                    <button className={styles.btnGerar} onClick={handleGerarCodigo}>Gerar Código da Fazenda</button>
                    <DataField 
                        label="Código da Fazenda:" 
                        value={codigoFazenda} 
                        customClass={styles.codigoFazendaField} 
                        onCopyClick={handleCopy} 
                        buttonText={buttonText} 
                    />
                </div>
                <div className="inputsData">
                    <div className="dataProfile">
                        <h1> Meus Dados: </h1>
                        <DataField label="Nome" value={nomeUsuario} />
                        <DataField label="Email" value={emailUsuario} />
                        <DataField label="Telefone" value={telefoneUsuario} />
                    </div>
                    <div className="dataFarm">
                        <h1> Fazenda Cadastrada: </h1>
                        <DataField label="Nome da Fazenda" value={nomeFazenda} />
                        <DataField label="Tipo de Fazenda" value={tipoFazenda} />
                        <DataField label="Tamanho da Fazenda" value={tamanhoFazenda} />
                        <DataField label="Complemento" value={complementoFazenda} />
                        <DataField label="Cidade" value={cidadeFazenda} />
                        <DataField label="Cep" value={cepFazenda} />
                        <DataField label="Estado" value={estadoFazenda} />
                    </div>
                </div>
                <div className={styles.Rowbtn}>
                    <button className={`${styles.btnVoltar} ${styles.btnPrimario}`} onClick={handleAccessVoltar}>
                        <i className="fa-solid fa-chevron-left"></i>Voltar    
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Perfil;