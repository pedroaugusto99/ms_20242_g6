import styles from '../css/cssPages/FichaAnimal.module.css';

function ManejoTablePesagem({ title, data, columns, toggleModal }) {
  // Adiciona uma verificação para os dados e fornece um array vazio como valor padrão
  const safeData = data || [];

  // Ordena os dados pela data de pesagem (decrescente) e seleciona os dois primeiros
  const sortedData = safeData
    .sort((a, b) => new Date(b.data) - new Date(a.data))
    .slice(0, 2); // Pega os dois mais recentes

  return (
    <div className={styles.manejoTable}>
      <div className={styles.manejoTableContainer}>
        <table className={styles.tableManejo}>
          <caption>{title}</caption>
          <thead>
            <tr>
              {columns.map((col, idx) => (
                <th key={idx}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.length > 0 ? (
              sortedData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {columns.map((col, colIndex) => {
                    // A forma mais direta de mapear os dados pode ser através de um mapeamento manual
                    let cellValue = 'N/A';

                    // Mapeamento para os dados de pesagem
                    switch (col) {
                      case 'Peso':
                        cellValue = row.peso || 'N/A';
                        break;
                      case 'Data da Pesagem':
                        cellValue = row.data || 'N/A';
                        break;
                      case 'Saldo de Peso':
                        cellValue = row.saldo || 'N/A';
                        break;
                      default:
                        cellValue = 'N/A';
                    }

                    return <td key={colIndex}>{cellValue}</td>;
                  })}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length}>Sem dados disponíveis</td>
              </tr>
            )}
          </tbody>
        </table>
        <button className={styles.buttonManejo} onClick={toggleModal}>
          Ver detalhes de manejo
        </button>
      </div>
    </div>
  );
}

export default ManejoTablePesagem;
