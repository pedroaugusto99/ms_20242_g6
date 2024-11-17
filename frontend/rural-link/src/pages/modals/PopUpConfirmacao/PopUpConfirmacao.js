import React from 'react';
import styles from './PopUpConfirmacao.module.css';

export default function PopUpConfirmacao({ toggleModal}) {
  return (
    <div className={styles.modal}>
      <div onClick={toggleModal} className={styles.overlay}></div>
      
      <div className={styles.modalContainer}>
        <div className={styles.modalContent}>
          
          <div className={styles.alertHeader}>
            <i className="fa-solid fa-exclamation-triangle" style={{ color: 'red', fontSize: '48px' }}></i>
            <h2 className={styles.attentionText}>ATENÇÃO</h2>
          </div>

          <p className={styles.confirmationText}>Todos os dados atualizados estão corretos?</p>

          <div className={styles.rowbtn}>
            <button onClick={toggleModal} className={`${styles.btn} ${styles.btnPrimario}`} type="button"><i class="fa-solid fa-chevron-left"></i>  Voltar</button>
            <button className={`${styles.btn} ${styles.btnPrimario}`} type="submit">Sim</button>
        </div>

        </div>
      </div>
    </div>
  );
}
