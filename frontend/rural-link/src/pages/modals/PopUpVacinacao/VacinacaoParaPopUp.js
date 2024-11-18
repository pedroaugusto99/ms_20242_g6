import styles from './PopUpVacinacao.module.css';
import PropTypes from 'prop-types';

function VacinacaoParaPopUp({ data, columns, onRemover, modoExclusao }) {
  const columnToKeyMap = {
    'Nome da Vacina': 'nome',
    'Data da Aplicação': 'dataAplicacao',
    'Número de Doses': 'doses',
    'Data da Próxima Aplicação': 'proximaAplicacao'
  };

  const formatarData = (dataString) => {
    if (!dataString) return '';
    const data = new Date(dataString);
    return data.toLocaleDateString('pt-BR');
  };

  const formatarValor = (valor, coluna) => {
    if (coluna.includes('Data')) {
      return formatarData(valor);
    }
    return valor;
  };

  if (!data || data.length === 0) {
    return (
      <div className={styles.manejoTable}>
        <p>Nenhum registro de vacinação encontrado.</p>
      </div>
    );
  }

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
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((col, colIndex) => {
                  const key = columnToKeyMap[col];
                  const valor = formatarValor(row[key], col);
                  return <td key={colIndex}>{valor || ''}</td>;
                })}
                {modoExclusao && (
                  <td>
                    <button 
                      onClick={() => onRemover(rowIndex)}  // Passando o índice para onRemover
                      className={`${styles.btnExcluir} ${styles.btnIcone}`}
                      title="Excluir registro"
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

VacinacaoParaPopUp.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      nome: PropTypes.string.isRequired,
      dataAplicacao: PropTypes.string.isRequired,
      doses: PropTypes.number.isRequired,
      proximaAplicacao: PropTypes.string.isRequired
    })
  ).isRequired,
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  onRemover: PropTypes.func.isRequired,
  modoExclusao: PropTypes.bool
};

export default VacinacaoParaPopUp;
