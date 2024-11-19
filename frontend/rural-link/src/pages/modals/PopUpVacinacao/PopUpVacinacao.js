import React, { useState, useEffect } from 'react';
import styles from './PopUpVacinacao.module.css';
import { DadosParaPopUpsDeManejo } from '../../../hooks/DadosParaPopUpsDeManejo';
import AuthService from '../../../autenticacao/AuthService';
import Cookies from 'js-cookie'

export default function PopUpVacinacao({ toggleModal, dadosVacinacao, animalId }) {





  // Estados do componente
  const [modalCadastroAberto, setModalCadastroAberto] = useState(false);
  const [modoExclusao, setModoExclusao] = useState(false);
  const [message, setMessage] = useState('');
  const [novoRegistro, setNovoRegistro] = useState({
    nome: '',
    dataAplicacao: '',
    doses: '',
    proximaAplicacao: ''
  });
  const [dadosFiltrados, setDadosFiltrados] = useState([]);





  // Funções de manejo de vacinação
  const { vacinacaoData, addVacinacao, setVacinacaoData, removeVacinacao } = DadosParaPopUpsDeManejo(animalId);





  // Efeito que atualiza os dados filtrados sempre que dadosVacinacao muda
  useEffect(() => {
    setDadosFiltrados(dadosVacinacao); // Atualiza a lista de vacinação
  }, [dadosVacinacao]);





  // Função para manipular mudanças nos inputs de cadastro de nova vacina
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoRegistro(prev => ({
      ...prev,
      [name]: value
    }));
  };





  // Função para submeter o cadastro de uma nova vacina
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      AuthService.registrarVacinaAnimal({
        nomeDaVacina: novoRegistro.nome,
        dataDeVacinacao: novoRegistro.dataAplicacao,
        numeroDeDoses: novoRegistro.doses,
        dataDaProximaVacinacao: novoRegistro.proximaAplicacao,
        animalId: animalId
      }, Cookies.get('authToken'));
      setModalCadastroAberto(false);
    } catch (error) {
      setMessage('Credenciais inválidas!');
    }

    // Se todos os campos estiverem preenchidos, adiciona a vacina à lista
    if (novoRegistro.nome && novoRegistro.dataAplicacao && novoRegistro.doses && novoRegistro.proximaAplicacao) {
      addVacinacao(novoRegistro);
      resetNovoRegistro(); // Reseta os campos de entrada
      setModalCadastroAberto(false);
      toggleModal();
    }
  };





  // Função para alternar entre os modos de edição e exclusão
  const toggleModoExclusao = () => {
    setModoExclusao(!modoExclusao);
  };





  // Função para remover um registro de vacina
  const handleRemover = (index) => {
    try {
      removeVacinacao(animalId, index); // Remove o item da lista
      const novosDados = [...dadosFiltrados];
      novosDados.splice(index, 1); // Remove o item do estado
      setDadosFiltrados(novosDados); // Atualiza o estado com a lista filtrada
      setMessage('Vacina removida com sucesso!');
    } catch (error) {
      setMessage('Erro ao tentar remover a vacina!');
    }
  };





  // Função para confirmar a edição e fechar o modal
  const handleConfirmarEdicao = () => {
    toggleModal();
    setModoExclusao(false);
  };





  // Função para resetar os campos de cadastro
  const resetNovoRegistro = () => {
    setNovoRegistro({
      nome: '',
      dataAplicacao: '',
      doses: '',
      proximaAplicacao: ''
    });
  };





  return (
    <div className={styles.modal}>
      <div onClick={toggleModal} className={styles.overlay}></div>
      <div className={styles.modalContent}>
        <h1 className={styles.titleVacinacao}>VACINAÇÃO</h1>





        {/* Tabela de dados filtrados */}
        <div className={styles.manejoTable}>
          <div className={styles.manejoTableContainer}>
            <table className={styles.tableManejo}>
              <thead>
                <tr>
                  {['Nome da Vacina', 'Data da Aplicação', 'Número de Doses', 'Data da Próxima Aplicação'].map((col, idx) => (
                    <th key={idx}>{col}</th>
                  ))}
                  {modoExclusao && <th>Ações</th>}
                </tr>
              </thead>
              <tbody>
                {dadosFiltrados && dadosFiltrados.length > 0 ? (
                  dadosFiltrados.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {['nomeDaVacina', 'dataDeVacinacao', 'numeroDeDoses', 'dataDaProximaVacinacao'].map((col, colIndex) => (
                        <td key={colIndex}>{row[col] || ''}</td>
                      ))}
                      <td>
                        {modoExclusao && (
                          <button
                            onClick={() => handleRemover(rowIndex)}
                            className={`${styles.btnExcluir} ${styles.btnIcone}`}
                            title="Excluir registro"
                          >
                            <i className="fa-solid fa-trash-can"></i>
                          </button>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5}>Nenhum registro de vacinação encontrado.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>





        {/* Botões de interação */}
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
            onClick={handleConfirmarEdicao}  
            className={`${styles.btn} ${styles.btnPrimario}`} 
            type="button"
          >
            Confirmar Edição
          </button>
        </div>





        {/* Formulário de Cadastro de Nova Vacina */}
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

                <div className={styles.formActions}>
                  <button className={`${styles.btn} ${styles.btnPrimario}`} type="submit">
                    Salvar
                  </button>
                  <button
                    onClick={() => setModalCadastroAberto(false)}
                    className={`${styles.btn} ${styles.btnSecundario}`}
                    type="button"
                  >
                    Cancelar
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