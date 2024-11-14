import React from 'react';
import styles from './PopUpVacinacao.module.css';
import VacinacaoParaPopUp from './VacinacaoParaPopUp';

export default function PopUpVacinacao({ toggleModal }) {
    const vacinacaoData = [
      { nome: 'Vacina A', dataAplicacao: '2024-02-01', doses: 2, proximaAplicacao: '2024-06-01' },
      { nome: 'Vacina A', dataAplicacao: '2024-02-01', doses: 2, proximaAplicacao: '2024-06-01' },
      { nome: 'Vacina A', dataAplicacao: '2024-02-01', doses: 2, proximaAplicacao: '2024-06-01' },
  ];


  return (
    <div className={styles.modal}>
      <div onClick={toggleModal} className={styles.overlay}></div>
      <div className={styles.modalContent}>
        <h1 className={styles.titleVacinacao}>VACINAÇÃO</h1>
        <VacinacaoParaPopUp data={vacinacaoData} columns={['Nome da Vacina', 'Data da Aplicação', 'Número de Doses', 'Data da Próxima Aplicação']} />
        <div className={styles.rowbtn}>
            <button onClick={toggleModal} className={`${styles.btn} ${styles.btnPrimario}`} type="button">Voltar</button>
            <button className={`${styles.btn} ${styles.btnPrimario}`} type="submit">Adicionar Fila</button>
            <button className={`${styles.btn} ${styles.btnPrimario}`} type="button"><i className="fa-solid fa-trash-can"></i> Remover Fila</button>
            <button className={`${styles.btn} ${styles.btnPrimario}`} type="submit">Confirmar Edição</button>
        </div>
      </div>
    </div>
  );
}