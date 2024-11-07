import React from 'react';
import styles from './PopUpPesagem.module.css';
import PesagemParaPopUp from './PesagemParaPopUp';

export default function PopUpPesagem({ toggleModal }) {

    const pesagemData = [
        { peso: '100kg', data: '2024-01-01', saldo: '4kg' },
        { peso: '100kg', data: '2024-01-01', saldo: '5kg' },
        { peso: '100kg', data: '2024-01-01', saldo: '5kg' },
    ];

  return (
    <div className={styles.modal}>
      <div onClick={toggleModal} className={styles.overlay}></div>
      <div className={styles.modalContent}>
        <h1 className={styles.titlePesagem}>PESAGEM</h1>
        <PesagemParaPopUp data={pesagemData} columns={['Peso', 'Data da Pesagem', 'Saldo de Peso']} />
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