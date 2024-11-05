import React from 'react';
import styles from './css/Perfil.module.css';

import Sidebar from './components/Sidebar';
import AuthService from '../autenticacao/AuthService';

function Perfil () {

    const[nomeUsuario, setNomeUsuario] = React.useState(null);
    const[roleUsuario, setRoleUsuario] = React.useState(null);
    const[emailUsuario, setEmailUsuario] = React.useState(null);
    const[telefoneUsuario, setTelefoneUsuario] = React.useState(null);
    const[enderecoFazenda, setEnderecoFazenda] = React.useState(null);
    const[complementoFazenda, setComplementoFazenda] = React.useState(null);
    const[cidadeFazenda, setCidadeFazenda] = React.useState(null);
    const[cepFazenda, setCepFazenda] = React.useState(null);
    const[estadoFazenda, setEstadoFazenda] = React.useState(null);

    React.useEffect (() =>{
        AuthService.pegarDadosDoUsuario().then((response) => {
            setNomeUsuario(response.data['nome']); 
            setRoleUsuario(response.data['role']);
            setEmailUsuario(response.data['email'])
            setTelefoneUsuario(response.data['telefone'])
            setEnderecoFazenda(response.data['endereco'])
            setComplementoFazenda(response.data['complemento'])
            setCidadeFazenda(response.data['cidade'])
            setCepFazenda(response.data['cep'])
            setEstadoFazenda(response.data['estado'])
        })
    }, []);

    // Componente Profile
    const Profile = ({ name, role, imgSrc, stylesImg, stylesPerfilInfos, stylesNamePerfil, stylesDescPerfil }) => (
        <div id={stylesPerfilInfos} className="perfilInfos">
            <img src={imgSrc} alt="profile" className={stylesImg} />
            <h3 className="namePerfil" id={stylesNamePerfil}>{name}</h3>
            <p className="descPerfil" id={stylesDescPerfil}>{role}</p>
        </div>
    );


    // Componente DataField
    const DataField = ({ label, value }) => (
        <p className={styles.textField}>
            {label}: <div className={styles.data}>{value}</div>
        </p>
        );

    return ( 
        <div className="container">
            <Sidebar title='Perfil' />
            <div className={styles.conteudo}>
                <div className='profile'>
                <Profile 
                    name={nomeUsuario}
                    role={roleUsuario}
                    imgSrc="https://via.placeholder.com/150"
                    stylesImg={styles.imgPerfil}
                    stylesPerfilInfos={styles.perfilInfos}
                    stylesNamePerfil={styles.namePerfil}
                    stylesDescPerfil={styles.descPerfil}
                />
                </div>
                <div className='inputsData'>
                    <div className='dataProfile'>
                        <h1> Meus Dados: </h1>
                        <DataField label="Nome" value={nomeUsuario} />
                        <DataField label="Email" value={emailUsuario} />
                        <DataField label="Telefone" value={telefoneUsuario} />

                    </div>
                    <div className='dataFarm'>
                        <h1> Fazenda Cadastrada: </h1>
                        <DataField label="Endereço" value={enderecoFazenda}/>
                        <DataField label="Complemento" value={complementoFazenda}/>
                        <DataField label="Cidade" value={cidadeFazenda} />
                        <DataField label="Cep" value={cepFazenda} />
                        <DataField label="Estado" value={estadoFazenda} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Perfil;
