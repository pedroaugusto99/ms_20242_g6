import React, { useState } from 'react';
import styles from './PopUpFiltro.module.css';

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add(styles.activeModal)
  } else {
    document.body.classList.remove(styles.activeModal)
  }

  // Componente NavItem
const NavItem = ({ label }) => (
    <li className="list">
      <a href="#" className="nav-link">
        <span className="link">{label}</span>
      </a>
    </li>
  );

  return (
    <>

      {modal && (
        <div className={styles.modal}>
          <div onClick={toggleModal} className={styles.overlay}></div>
          <div className={styles.modalContent}>
            <h2>FILTROS</h2>
            <ul className="lists">
            <NavItem label="Espécie" />
            <NavItem label="Raça" />
            <NavItem label="Sexo" />
            <NavItem label="Status" />
            <NavItem label="Idade" />
            </ul>

            <button className={styles.filterButtonInside} onClick={toggleModal}>Filtrar</button>

            <button className={styles.closeModal} onClick={toggleModal}>
              Voltar
            </button>
          </div>
        </div>
      )}
    </>
  );
}