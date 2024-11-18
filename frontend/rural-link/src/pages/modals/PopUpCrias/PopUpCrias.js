import React, { useState } from 'react';
import styles from './PopUpCrias.module.css';
import CriasParaPopUp from './CriasParaPopUp';
import { DadosParaPopUpsDeManejo } from '../../../hooks/DadosParaPopUpsDeManejo';

export default function PopUpCrias({ toggleModal }) {
  const [modalCadastroAberto, setModalCadastroAberto] = useState(false);
  const [modoExclusao, setModoExclusao] = useState(false);
  const [novoRegistro, setNovoRegistro] = useState({
    codigo: '',
    nascimento: '',
    pai: '',
    idade: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoRegistro(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const { criasData, addCrias, removeCrias } = DadosParaPopUpsDeManejo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (novoRegistro.codigo && novoRegistro.nascimento && novoRegistro.pai && novoRegistro.idade) {
      addCrias(novoRegistro);

      setNovoRegistro({
        codigo: '',
        nascimento: '',
        pai: '',
        idade: ''
      });

      setModalCadastroAberto(false);
      toggleModal();
    }
  };

  const handleConfirmarEdicao = () => {
    // Lógica para confirmar a edição (fechar o modal após confirmar)
    if (modoExclusao) {
    }

    // Fechar o modal após confirmar a edição
    toggleModal();  // Fecha o modal principal
    setModoExclusao(false);  // Desativa o modo de exclusão
  };

  const toggleModoExclusao = () => {
    setModoExclusao(!modoExclusao);
  };

  return (
    <div className={styles.modal}>
      <div onClick={toggleModal} className={styles.overlay}></div>
      <div className={styles.modalContent}>
        <h1 className={styles.titleCrias}>CRIAS</h1>

        <CriasParaPopUp
          data={criasData}
          columns={['Código da Cria', 'Data de Nascimento', 'Pai (Código)', 'Idade']}
          modoExclusao={modoExclusao}
          onRemover={removeCrias}  // Passando a função de remoção para o componente CriasParaPopUp
        />

        <div className={styles.rowbtn}>
          <button onClick={toggleModal} className={`${styles.btn} ${styles.btnPrimario}`} type="button">
            Voltar
          </button>
          <button
            onClick={() => setModalCadastroAberto(true)}
            className={`${styles.btn} ${styles.btnPrimario}`}
            type="button"
          >
            Adicionar Fila
          </button>
          <button 
            onClick={toggleModoExclusao} 
            className={`${styles.btn} ${styles.btnPrimario} ${modoExclusao ? styles.btnAtivo : ''}`} 
            type="button"
          >
            <i className="fa-solid fa-trash-can"></i> Remover Fila
          </button>
          <button 
            onClick={handleConfirmarEdicao}  // Chama a função para confirmar a edição
            className={`${styles.btn} ${styles.btnPrimario}`} 
            type="button"
          >
            Confirmar Edição
          </button>
        </div>

        {modalCadastroAberto && (
          <div className={styles.modalCadastro}>
            <div className={styles.modalCadastroContent}>
              <h2>Cadastro de Nova Cria</h2>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="codigo">Código da Cria:</label>
                  <input
                    type="text"
                    id="codigo"
                    name="codigo"
                    value={novoRegistro.codigo}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="nascimento">Data de Nascimento:</label>
                  <input
                    type="date"
                    id="nascimento"
                    name="nascimento"
                    value={novoRegistro.nascimento}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="pai">Código do Pai:</label>
                  <input
                    type="text"
                    id="pai"
                    name="pai"
                    value={novoRegistro.pai}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="idade">Idade:</label>
                  <input
                    type="text"
                    id="idade"
                    name="idade"
                    value={novoRegistro.idade}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className={styles.modalButtons}>
                  <button
                    type="button"
                    onClick={() => setModalCadastroAberto(false)}
                    className={`${styles.btn} ${styles.btnSecundario}`}
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className={`${styles.btn} ${styles.btnPrimario}`}
                  >
                    Salvar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
