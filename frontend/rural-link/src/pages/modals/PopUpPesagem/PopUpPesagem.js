import React, { useState } from 'react';
import styles from './PopUpPesagem.module.css';
import AuthService from '../../../autenticacao/AuthService';

export default function PopUpPesagem({ toggleModal, dadosPesagem, animalId }) {
  const [modalCadastroAberto, setModalCadastroAberto] = useState(false);
  const [modoExclusao, setModoExclusao] = useState(false);
  const [message, setMessage] = useState('');
  const [pesagens, setPesagens] = useState(dadosPesagem || []);
  const [novoRegistro, setNovoRegistro] = useState({
    animalId: '',
    peso: '',
    data: '',
    id: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoRegistro((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const novaPesagem = {
        peso: novoRegistro.peso,
        dataDePesagem: novoRegistro.data,
        animalId: animalId,
        saldoDePeso: null // Você pode calcular isso conforme necessário
      };

      // Adiciona localmente
      setPesagens([...pesagens, novaPesagem]);

      // Chama o serviço para registrar no backend
      AuthService.registrarPesoAnimal({
        peso: novoRegistro.peso,
        dataDePesagem: novoRegistro.data,
        animalId: animalId
      });

      setNovoRegistro({
        animalId: '',
        peso: '',
        data: ''
      });
      setModalCadastroAberto(false);
    } catch (error) {
      setMessage('Erro ao registrar peso!');
    }
  };

  const handleRemoverPesagem = (indexParaRemover) => {
    const novaListaPesagens = pesagens.filter((_, index) => index !== indexParaRemover);
    setPesagens(novaListaPesagens);
  };

  const toggleModoExclusao = () => {
    setModoExclusao(!modoExclusao);
  };

  const handleConfirmarEdicao = () => {
    toggleModal();
    setModoExclusao(false);
  };

  const PesagemParaPopUp = ({ data, columns, onRemover, modoExclusao }) => {
    const columnToKeyMap = {
      'Peso': 'peso',
      'Data da Pesagem': 'dataDePesagem',
      'Saldo de Peso': 'saldoDePeso'
    };

    const formatarValor = (valor, coluna) => {
      if (coluna.includes('Data')) {
        return valor;
      }
      return valor;
    };

    return (
      <div className={styles.manejoTable}>
        <div className={styles.manejoTableContainer}>
          <table className={styles.tableManejo}>
            <thead>
              <tr>
                {columns.map((col, idx) => (
                  <th key={idx}>{col}</th>
                ))}
                {modoExclusao && <th>Ações</th>}
              </tr>
            </thead>
            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td colSpan={columns.length + (modoExclusao ? 1 : 0)} className={styles.semRegistros}>
                    Nenhum registro de pesagem encontrado.
                  </td>
                </tr>
              ) : (
                data.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {columns.map((col, colIndex) => {
                      const key = columnToKeyMap[col];
                      const valor = formatarValor(row[key], col);
                      return <td key={colIndex}>{valor || '####'}</td>;
                    })}
                    {modoExclusao && (
                      <td>
                        <button
                          onClick={() => onRemover(rowIndex)}
                          className={`${styles.btnExcluir} ${styles.btnIcone}`}
                          title="Excluir registro"
                          aria-label="Excluir pesagem"
                        >
                          <i className="fa-solid fa-trash-can"></i>
                        </button>
                      </td>
                    )}
                  </tr>
                ))
              )}
            </tbody>
          </table>
          <div className={styles.graficoPesagem}>
            <h2>Gráfico</h2>
            {/* Aqui você pode colocar um gráfico real, se necessário */}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.modal}>
      <div onClick={toggleModal} className={styles.overlay}></div>
      <div className={styles.modalContent}>
        <h1 className={styles.titlePesagem}>PESAGEM</h1>

        <PesagemParaPopUp
          data={pesagens}
          columns={['Peso', 'Data da Pesagem', 'Saldo de Peso']}
          modoExclusao={modoExclusao}
          onRemover={handleRemoverPesagem}
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
            onClick={handleConfirmarEdicao}
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

                <div className={styles.modalButtons}>
                  <button
                    type="button"
                    onClick={() => setModalCadastroAberto(false)}
                    className={`${styles.btn} ${styles.btnSecundario}`}
                  >
                    Cancelar
                  </button>
                  <button type="submit" className={`${styles.btn} ${styles.btnPrimario}`}>
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
