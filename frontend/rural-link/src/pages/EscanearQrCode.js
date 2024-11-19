import React, { useState } from 'react';
import styles from './css/cssPages/EscanearQrCode.module.css';

function EscanearQrCode() {
  const [botaoClicado, setBotaoClicado] = useState(null); // Controle do botão clicado

  const alternarEstadoBotao = (botao) => {
    // Alterna o estado do botão clicado
    setBotaoClicado((prev) => (prev === botao ? null : botao));
  };

  return (
    <div className={styles.container}>
      <header className={styles.headerEscanear}>
        <button
          className={`${styles.headerButton} ${botaoClicado === 'esquerda' ? styles.clicked : ''}`}
          onClick={() => alternarEstadoBotao('esquerda')}
        >
          <i className={`fa-solid fa-arrow-left ${styles.icon}`}></i>
        </button>
        <h1>Escanear</h1>
        <button
          className={`${styles.headerButton} ${botaoClicado === 'direita' ? styles.clicked : ''}`}
          onClick={() => alternarEstadoBotao('direita')}
        >
          <i className={`fa-solid fa-bolt ${styles.icon}`}></i>
        </button>
      </header>

      <main className={styles.mainContent}>
        <div
          className={styles.quadrado}
          onClick={() => console.log('Quadrado clicado!')}
        />
      </main>

      <footer className={styles.botoes}>
        <button onClick={() => alert('Teclado Aberto')} className={styles.digitarBtn}>
          Digitar <i className="fa-regular fa-keyboard"></i>
        </button>
        <button onClick={() => alert('QR Code Escaneado')} className={styles.botao}>
          Buscar nos Arquivos <i className="fa-regular fa-file-lines"></i>
        </button>
      </footer>
    </div>
  );
}

export default EscanearQrCode;
