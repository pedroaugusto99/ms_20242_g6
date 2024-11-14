import React from 'react';
import Conteudo from './components/Conteudo';
import Header from './components/Header';
import './css/cssPages/UserSelection.css';

import prop_rural from './images/prop-rural.png';
import trab_rural from './images/trab-rural.png';

function UserSelection() {
    return (
        <Conteudo>
            <Header title="Área de Cadastro" />
            <h2>Selecione seu tipo de usuário</h2>
            <div className="user-selection">
                <div className="button-container">
                    <p className="desc_user">Se você é proprietário de fazenda clique no ícone abaixo</p>
                    <div className="btn-user">
                        <img src={prop_rural} alt="Botao" className="prop_rural"/>
                        <p className="title_user">Proprietário Rural</p>
                    </div>
                </div>
                <div className="button-container">
                    <p className="desc_user">Se você é um trabalhador associado a uma fazenda clique no ícone abaixo</p>
                    <div className="btn-user">
                        <img src={trab_rural} alt="Botao" className="trab_rural"/>
                        <p className="title_user">Trabalhador Rural</p>
                    </div>
                </div>
            </div>
            <span className='spanLogin'>Já possui uma conta?<a href="" className='linkLogin'>Login</a></span>
        </Conteudo>
    );
}

export default UserSelection;
