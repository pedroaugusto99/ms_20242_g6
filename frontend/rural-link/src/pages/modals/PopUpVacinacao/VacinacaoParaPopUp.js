import styles from './PopUpVacinacao.module.css';

function VacinacaoParaPopUp({ data, columns, onRemover, modoExclusao }) {

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
                {columns.map((col, colIndex) => (
                  // Acessar diretamente os valores das colunas
                  <td key={colIndex}>{row[col] || ''}</td>
                ))}
                <td>
                  {modoExclusao && (
                    <button
                      onClick={() => onRemover(row.animalId, rowIndex)} // Passando animalId e o índice
                      className={`${styles.btnExcluir} ${styles.btnIcone}`}
                      title="Excluir registro"
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default VacinacaoParaPopUp;
