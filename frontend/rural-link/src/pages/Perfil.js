import React from 'react';
import styles from './css/Perfil.module.css';

import Sidebar from './components/Sidebar';
import AuthService from '../autenticacao/AuthService';

function Perfil () {

    const[nomeUsuario, setUsuario] = React.useState(null);

    React.useEffect (() =>{
        AuthService.pegarDadosDoUsuario().then((response) => {
            setUsuario(response.data);
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
                    name="Matheus"
                    role="Proprietário"
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
                        <DataField label="Nome" value="" />
                        <DataField label="Email" value="" />
                        <DataField label="Telefone" value="" />

                    </div>
                    <div className='dataFarm'>
                        <h1> Fazenda Cadastrada: </h1>
                        <DataField label="Endereço" value=""/>
                        <DataField label="Complemento" value=""/>
                        <DataField label="Cidade" value="" />
                        <DataField label="Cep" value="" />
                        <DataField label="Estado" value="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Perfil;
