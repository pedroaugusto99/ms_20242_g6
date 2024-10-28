import React, { useState } from 'react';
import styles from './css/Faq.module.css';
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
            <Sidebar title="FAQ" />
            <div className={styles.faqContainer}>
                <div className={styles.faqContent}>
                    <img src={logo} alt="Logo" className={styles.logo} />
                    <ul className={styles.questions}>
                    <h1 className={styles.title}>Qual Sua Dúvida?</h1>
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
                                        maxHeight: activeIndex === index ? '200px' : '0', 
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
        question: 'Pergunta?',
        answer: 'Resposta...'
    },
    {
        question: 'Pergunta?',
        answer: 'Resposta...'
    },
    {
        question: 'Pergunta?',
        answer: 'Resposta...'
    },
    {
        question: 'Pergunta?',
        answer: 'Resposta...'
    },
    {
        question: 'Pergunta?',
        answer: 'Resposta...'
    },
    {
        question: 'Pergunta?',
        answer: 'Resposta...'
    },
    {
        question: 'Pergunta?',
        answer: 'Resposta...'
    },
];

export default Faq;
