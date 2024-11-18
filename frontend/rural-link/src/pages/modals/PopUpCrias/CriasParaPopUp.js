import styles from './PopUpCrias.module.css';

function CriasParaPopUp({ data, columns, onRemover, modoExclusao }) {
    const columnToKeyMap = {
      'Código da Cria': 'codigo',
      'Data de Nascimento': 'dataDeNascimento',
      'Pai (Código)': 'codigoDoFamiliar',
      'Idade': 'idade'
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
          <p>Nenhum registro de cria encontrado.</p>
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
                    return (
                      <td key={colIndex}>
                        {valor || '####'}
                      </td>
                    );
                  })}
                  {modoExclusao && (
                    <td>
                      <button 
                        onClick={() => onRemover(rowIndex)} 
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
  

export default CriasParaPopUp;
