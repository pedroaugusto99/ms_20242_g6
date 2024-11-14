import React from 'react';
import styles from './PopUpCrias.module.css';
import CriasComponente from './CriasComponente';

export default function PopUpCrias({ toggleModal }) {
    const criasData = [
      { codigo: '1234', nascimento: '2023-05-01', pai: '5678', idade: '1 ano' },
      { codigo: '1234', nascimento: '2023-05-01', pai: '5678', idade: '1 ano' },
      { codigo: '1234', nascimento: '2023-05-01', pai: '5678', idade: '1 ano' },
  ];


  return (
    <div className={styles.modal}>
      <div onClick={toggleModal} className={styles.overlay}></div>
      <div className={styles.modalContent}>
        <h1 className={styles.titleCrias}>CRIAS</h1>
        <CriasComponente data={criasData} columns={['Código da Cria', 'Data de Nascimento', 'Pai (Código)', 'Idade']} />
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