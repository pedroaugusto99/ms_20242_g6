import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PopUpConfirmacao.module.css';

export default function PopUpConfirmacao({ toggleModal }) {
  const navigate = useNavigate(); // Hook para navegação

  const handleConfirm = () => {
    navigate('/fichamento');
    toggleModal(); // Fecha o modal após a confirmação
  };

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
            <button onClick={toggleModal} className={`${styles.btn} ${styles.btnPrimario}`} type="button">
              <i className="fa-solid fa-chevron-left"></i> Voltar
            </button>
            <button 
              onClick={handleConfirm}
              className={`${styles.btn} ${styles.btnPrimario}`} 
              type="button"
            >
              Confirmar
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
