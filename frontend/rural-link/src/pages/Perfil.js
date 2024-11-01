import React from 'react';
import styles from './css/Perfil.module.css';

import Sidebar from './components/Sidebar';
import AuthService from '../autenticacao/AuthService';

function Perfil () {

    const[usuario, setUsuario] = React.useState(null);

    React.useEffect (() =>{
        AuthService.pegarDadosDoUsuario().then((response) => {
            setUsuario(response.data);
        })
    }, []);

    // Componente Profile
    const Profile = ({ name, role, imgSrc, stylesImg, stylesPerfilInfos, stylesNamePerfil, stylesDescPerfil }) => (
        <div id={stylesPerfilInfos} className="perfilInfos">
            <img src={imgSrc} alt="profile" className={stylesImg} />
            <h3 className="namePerfil" id={stylesNamePerfil}>{usuario.nome}</h3>
            <p className="descPerfil" id={stylesDescPerfil}>{usuario.role}</p>
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
                        <DataField label="Nome" value={usuario.nome} />
                        <DataField label="Email" value={usuario.email} />
                        <DataField label="Telefone" value={usuario.telefone} />

                    </div>
                    <div className='dataFarm'>
                        <h1> Fazenda Cadastrada: </h1>
                        <DataField label="Endereço" value={usuario.endereco} />
                        <DataField label="Complemento" value={usuario.complemento} />
                        <DataField label="Cidade" value={usuario.cidade} />
                        <DataField label="Cep" value={usuario.cep} />
                        <DataField label="Estado" value={usuario.estado} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Perfil;
