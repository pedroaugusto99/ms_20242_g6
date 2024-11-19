import React, { useState } from 'react';
import styles from './PopUpExclusao.module.css';
import AuthService from '../../../autenticacao/AuthService';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function PopUpExclusao({ toggleModal, codigo, animalId }) {

  const [message, setMessage] = useState('');
  const navigate = useNavigate('');

  const handleSubmit = (e) => {
    e.preventDefault();
    try{
      const response = AuthService.removerAnimal(animalId, Cookies.get('authToken'));
      navigate('/fichamento');
      window.location.reload();
    } catch(error){
        setMessage('Credenciais inválidas!');
    }
  }

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

          <button onClick={handleSubmit} className={`${styles.btn} ${styles.btnDanger}`}>
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}
