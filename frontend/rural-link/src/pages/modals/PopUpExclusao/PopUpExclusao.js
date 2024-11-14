import React from 'react';
import styles from './PopUpExclusao.module.css';

export default function PopUpExclusao({ toggleModal, codigo }) {
  return (
    <div className={styles.modal}>
      <div onClick={toggleModal} className={styles.overlay}></div>
      
      <div className={styles.modalContainer}>
        <div className={styles.modalContent}>
          <button onClick={toggleModal} className={styles.closeButton}><i class="fa-solid fa-x"></i></button>
          
          <div className={styles.alertHeader}>
            <i className="fa-solid fa-exclamation-triangle" style={{ color: 'red', fontSize: '48px' }}></i>
            <h2 className={styles.attentionText}>ATENÇÃO</h2>
          </div>

          <p className={styles.confirmationText}>Você tem certeza que deseja realizar a operação?</p>
          <hr /> 
          <p className={styles.animalCodeText}>Excluir Cadastro do Animal: [Código do Animal] {codigo}</p>
          <hr /> 

          <button onClick={() => console.log(`Excluindo animal ${codigo}`)} className={`${styles.btn} ${styles.btnDanger}`}>
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}
