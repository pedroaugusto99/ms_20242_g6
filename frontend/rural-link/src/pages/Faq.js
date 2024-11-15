import React, { useState } from 'react';
import styles from './css/cssPages/Faq.module.css';
import Sidebar from './components/Sidebar';

import vector1 from './images/Icon/Vector.png';
import vector2 from './images/Icon/Vector2.png';
import logo from './images/logo.png';

function Faq() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleQuestions = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={styles.body}>
            <Sidebar title="Perguntas Frequentes" />
            <div className={styles.faqContainer}>
                <div className={styles.faqContent}>
                    <img src={logo} alt="Logo" className={styles.logo} />
                    <ul className={styles.questions}>
                    <h1 className={styles.title}>Qual sua dúvida?</h1>
                        {faqData.map((item, index) => (
                            <li key={index}>
                                <label 
                                    htmlFor={`faq-${index}`} 
                                    onClick={() => toggleQuestions(index)} 
                                    className={styles.label}
                                >
                                    {item.question}
                                    <img 
                                        src={activeIndex === index ? vector2 : vector1} 
                                        alt="Icon" 
                                        className={styles.icon} 
                                    />
                                </label>
                                <div 
                                    className={styles.content} 
                                    style={{ 
                                        maxHeight: activeIndex === index ? '300px' : '0', 
                                        overflow: 'hidden', 
                                        transition: 'max-height 0.5s ease'
                                    }}
                                >
                                    <p className={styles.answer}>{item.answer}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

const faqData = [
    {
        question: 'Como cadastrar pela primeira vez um animal do rebanho?',
        answer: 'Para cadastrar um animal do rebanho pela primeira vez, deve-se abrir a aba lateral e selecionar "Novo Cadastro". Assim, será aberta a página para realização do cadastro de um animal do rebanho, após o preenchimento de todos os campos obrigatórios.'
    },
    {
        question: 'Como acessar a ficha de um animal cadastrado na aplicação?',
        answer: 'Para acessar a ficha de um animal cadastrado na aplicação, deve-se abrir a aba lateral e selecionar "Rebanho". Assim, será a aberta a página com a visualização da lista completa de animais do rebanho cadastrados, com a opção de filtragem por características específicas, o que irá mostrar somente os animais que se encaixam nessas caracaterísticas, além da opção de pesquisa pelo código ou nome do animal no espaço de digitação.'
    },
    {
        question: 'Sou proprietário de fazenda e tenho minha fazenda cadastrada na aplicação. Como vincular um trabalhador rural à minha fazenda?',
        answer: 'Cada fazenda cadastrada na aplicação possui um código que foi gerado com o cadastro. Após 24 horas depois da geração desse código, ele irá expirar. Então, o proprietário deve abrir seu perfil pessoal na aplicação e selecionar o botão de "Gerar Código da Fazenda" e enviar o respectivo código para o trabalhador rural utilizar em seu cadastro, no campo chamado "Chave da Fazenda".'
    },
    {
        question: 'Como o QR Code será gerado para cada cadastro?',
        answer: 'Assim que houver a conclusão do cadastro de animal na página de Novo Cadastro, a aplicação irá redirecionar automaticamente para a ficha do animal, na qual irá aparecer o QR Code gerado especificamente para aquele animal, que poderá ser lido posteriormente para abertura automática da ficha do animal respectivo.'
    },
    {
        question: 'Como posso imprimir o QR Code gerado para cada cadastro?',
        answer: 'Na ficha do animal cadastrado, há um ícone no qual está disponível um arquivo do tipo PDF com o QR Code, podendo ser usado para impressão.'
    },
    {
        question: 'Como fazer a leitura de um QR Code?',
        answer: 'Na versão da aplicação para uso da plataforma web pelo celular, clicar na aba lateral e selecionar "Ler QR Code". Será aberta a câmera do celular para a leitura do QR Code físico que, ao ser identificado corretamente, irá redirecionar para a ficha específica daquele animal associado ao QR Code.'
    },
    {
        question: 'Sendo proprietário de fazenda, como posso acessar gráficos referentes a dados registrados na aplicação?',
        answer: 'Na aba lateral, há a opção "Dashboard". Ao selecioná-la, irá abrir uma página com gráficos personalizados gerados a partir de dados registrados na aplicação. Esta função está somente disponível para proprietário de fazenda, pois o perfil do trabalhador rural não tem acesso a esse serviço em específico.'
    },
];

export default Faq;
