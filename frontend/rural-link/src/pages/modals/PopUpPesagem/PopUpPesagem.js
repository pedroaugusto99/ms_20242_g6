import React, { useState } from 'react';
import styles from './PopUpPesagem.module.css';
import PesagemParaPopUp from './PesagemParaPopUp';
import { DadosParaPopUpsDeManejo } from '../../../hooks/DadosParaPopUpsDeManejo';

export default function PopUpPesagem({ toggleModal }) {
  const [modalCadastroAberto, setModalCadastroAberto] = useState(false);
  const [modoExclusao, setModoExclusao] = useState(false);
  const [novoRegistro, setNovoRegistro] = useState({
    peso: '',
    data: '',
    saldo: ''
  });

  const { pesagemData, addPesagem, removePesagem, setPesagemData } = DadosParaPopUpsDeManejo();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoRegistro(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (novoRegistro.peso && novoRegistro.data && novoRegistro.saldo) {
      addPesagem(novoRegistro);

      setNovoRegistro({
        peso: '',
        data: '',
        saldo: ''
      });

      setModalCadastroAberto(false);
      toggleModal();
    }
  };

  const toggleModoExclusao = () => {
    setModoExclusao(!modoExclusao);
  };

  const handleConfirmarEdicao = () => {
    // Lógica para confirmar a edição (fechar o modal após confirmar)
    if (modoExclusao) {
    }

    // Fechar o modal após confirmar a edição
    toggleModal();  // Fecha o modal principal
    setModoExclusao(false);  // Desativa o modo de exclusão
  };

  return (
    <div className={styles.modal}>
      <div onClick={toggleModal} className={styles.overlay}></div>
      <div className={styles.modalContent}>
        <h1 className={styles.titlePesagem}>PESAGEM</h1>

        <PesagemParaPopUp
          data={pesagemData}
          columns={['Peso', 'Data da Pesagem', 'Saldo de Peso']}
          modoExclusao={modoExclusao}
          onRemover={removePesagem}  // Passando a função de remoção para o componente PesagemParaPopUp
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
              <h2>Cadastro de Nova Pesagem</h2>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="peso">Peso:</label>
                  <input
                    type="text"
                    id="peso"
                    name="peso"
                    value={novoRegistro.peso}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="data">Data da Pesagem:</label>
                  <input
                    type="date"
                    id="data"
                    name="data"
                    value={novoRegistro.data}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="saldo">Saldo de Peso:</label>
                  <input
                    type="text"
                    id="saldo"
                    name="saldo"
                    value={novoRegistro.saldo}
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
