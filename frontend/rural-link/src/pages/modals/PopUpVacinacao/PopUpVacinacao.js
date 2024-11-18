import React, { useState } from 'react';
import styles from './PopUpVacinacao.module.css';
import VacinacaoParaPopUp from './VacinacaoParaPopUp';
import { DadosParaPopUpsDeManejo } from '../../../hooks/DadosParaPopUpsDeManejo';
import AuthService from '../../../autenticacao/AuthService';

export default function PopUpVacinacao({ toggleModal, dadosVacinacao, animalId }) {
  const [modalCadastroAberto, setModalCadastroAberto] = useState(false);
  const [modoExclusao, setModoExclusao] = useState(false);
  const [message, setMessage] = useState('');
  const [novoRegistro, setNovoRegistro] = useState({
    nome: '',
    dataAplicacao: '',
    doses: '',
    proximaAplicacao: ''
  });

  const { vacinacaoData, addVacinacao, setVacinacaoData } = DadosParaPopUpsDeManejo();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoRegistro(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try{
      const response = AuthService.registrarVacinaAnimal({nomeDaVacina: novoRegistro.nome, dataDeVacinacao: novoRegistro.dataAplicacao, numeroDeDoses: novoRegistro.doses, dataDaProximaVacinacao: novoRegistro.proximaAplicacao, animalId: animalId});
      setModalCadastroAberto(false)
    } catch(error){
        setMessage('Credenciais inválidas!');
    }
    if (novoRegistro.nome && novoRegistro.dataAplicacao && novoRegistro.doses && novoRegistro.proximaAplicacao) {
      addVacinacao(novoRegistro);

      setNovoRegistro({
        nome: '',
        dataAplicacao: '',
        doses: '',
        proximaAplicacao: ''
      });

      setModalCadastroAberto(false);  // Fecha o modal de cadastro após a adição
      toggleModal();  // Fecha o modal principal
    }
  };

  const toggleModoExclusao = () => {
    setModoExclusao(!modoExclusao);
  };

  const handleRemover = (index) => {
    const novosDados = vacinacaoData.filter((_, i) => i !== index);  // Filtra o item a ser removido
    setVacinacaoData(novosDados);  // Atualiza o estado com os dados restantes
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
        <h1 className={styles.titleVacinacao}>VACINAÇÃO</h1>
        
        <VacinacaoParaPopUp
          data={dadosVacinacao}
          columns={['Nome da Vacina', 'Data da Aplicação', 'Número de Doses', 'Data da Próxima Aplicação']}
          onRemover={handleRemover}  // Passe a função de remoção
          modoExclusao={modoExclusao}
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
              <h2>Cadastro de Nova Vacina</h2>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="nome">Nome da Vacina:</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={novoRegistro.nome}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="dataAplicacao">Data da Aplicação:</label>
                  <input
                    type="date"
                    id="dataAplicacao"
                    name="dataAplicacao"
                    value={novoRegistro.dataAplicacao}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="doses">Número de Doses:</label>
                  <input
                    type="number"
                    id="doses"
                    name="doses"
                    min="1"
                    value={novoRegistro.doses}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="proximaAplicacao">Data da Próxima Aplicação:</label>
                  <input
                    type="date"
                    id="proximaAplicacao"
                    name="proximaAplicacao"
                    value={novoRegistro.proximaAplicacao}
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
