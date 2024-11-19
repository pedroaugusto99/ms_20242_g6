import React from 'react';
import Conteudo from './components/Conteudo';
import Header from './components/Header';
import styles from './css/cssPages/SelecaoUsuario.module.css';

import iconeProprietario from './images/prop-rural.png';
import iconeTrabalhador from './images/trab-rural.png';

function SelecaoUsuario() {
    return (
        <Conteudo>
            <Header title="Área de Cadastro" />
            <h2 className={styles.tituloPrincipal}>Selecione seu tipo de usuário</h2>
            <div className={styles.selecaoUsuario}>
            <CardUsuario
                descricao="Se você é proprietário de fazenda clique no ícone abaixo"
                link="/registrarproprietario"
                icone={iconeProprietario}
                titulo="Proprietário de Fazenda"
                iconeClasse="iconeProprietario"
            />
            <CardUsuario
                descricao="Se você é um trabalhador associado a uma fazenda clique no ícone abaixo"
                link="/registrartrabalhador"
                icone={iconeTrabalhador}
                titulo="Trabalhador Rural"
                iconeClasse="iconeTrabalhador"
            />

            </div>
            <span className={styles.opcaoLogin}>
                Já possui uma conta? <a href="/login" className={styles.linkLogin}>Login</a>
            </span>
        </Conteudo>
    );
}

function CardUsuario({ descricao, link, icone, titulo, iconeClasse }) {
    return (
        <div className={styles.cardUsuario}>
            <p className={styles.descricaoUsuario}>{descricao}</p>
            <a href={link} className={styles.linkUsuario}>
                <div className={styles.botaoUsuario}>
                    <img src={icone} alt={`Ícone de ${titulo}`} className={`${styles.iconeUsuario} ${styles[iconeClasse]}`} />
                    <p className={styles.tituloUsuario}>{titulo}</p>
                </div>
            </a>
        </div>
    );
}


export default SelecaoUsuario;
