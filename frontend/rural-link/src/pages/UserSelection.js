import React from 'react';
import Conteudo from './components/Conteudo';
import Header from './components/Header';
import './css/cssPages/UserSelection.css';

import prop_rural from './images/prop-rural.png';
import trab_rural from './images/trab-rural.png';

function UserSelection() {
    return (
        <Conteudo>
            <Header/>
            <h2>Área de Cadastro</h2>
            <h3>Selecione que tipo de usuário você é</h3>
            <div className="user-selection">
                <div className="button-container">
                    <p className="desc_user">Se você é proprietário de fazenda clique no ícone abaixo</p>
                    <a href="/registrarproprietario">
                        <div className="btn-user">
                            <img src={prop_rural} alt="Botao" className="prop_rural"/>
                            <p className="title_user">Proprietário Rural</p>
                        </div>
                    </a>
                </div>
                <div className="button-container">
                    <p className="desc_user">Se você é trabalhador associado a uma fazenda clique no ícone abaixo</p>
                    <a href="/registrartrabalhador">
                        <div className="btn-user">
                            <img src={trab_rural} alt="Botao" className="trab_rural"/>
                            <p className="title_user">Trabalhador Rural</p>
                        </div>
                    </a>
                </div>
            </div>
            <span className='spanLogin'>Já possui uma conta?<a href="/login" className='linkLogin'>Login</a></span>
        </Conteudo>
    );
}

export default UserSelection;
