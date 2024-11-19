import styles from '../css/cssPages/FichaAnimal.module.css';

function ManejoTableCrias({ title, data, columns, toggleModal }) {
  // Adiciona uma verificação para os dados e fornece um array vazio como valor padrão
  const safeData = data || [];

  // Ordena os dados pela data de nascimento (decrescente) e seleciona os dois mais recentes
  const sortedData = safeData
    .sort((a, b) => new Date(b.nascimento) - new Date(a.nascimento))
    .slice(0, 2); // Pega as duas crias mais recentes

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
                    let cellValue = 'N/A';

                    switch (col) {
                      case 'Código da Cria':
                        cellValue = row.codigo || 'N/A';
                        break;
                      case 'Data de Nascimento':
                        cellValue = row.dataDeNascimento || 'N/A';
                        break;
                      case 'Pai (Código)':
                        cellValue = row.codigoDoFamiliar || 'N/A';
                        break;
                      case 'Idade':
                        cellValue = row.idade || 'N/A';
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

export default ManejoTableCrias;
