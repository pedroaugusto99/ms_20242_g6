import styles from '../css/cssPages/FichaAnimal.module.css';

function ManejoTableVacinacao({ title, data, columns, toggleModal }) {
  // Adiciona uma verificação para os dados e fornece um array vazio como valor padrão
  const safeData = data || [];

  // Ordena os dados pela data de aplicação (decrescente) e seleciona os dois primeiros
  const sortedData = safeData
    .sort((a, b) => new Date(b.dataAplicacao) - new Date(a.dataAplicacao))
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

                    // Adapte conforme as chaves reais dos dados (pode ser 'nome', 'dataAplicacao', etc.)
                    switch (col) {
                      case 'Nome da Vacina':
                        cellValue = row.nomeDaVacina || 'N/A';
                        break;
                      case 'Data da Aplicação':
                        cellValue = row.dataDeVacinacao || 'N/A';
                        break;
                      case 'Número de Doses':
                        cellValue = row.numeroDeDoses || 'N/A';
                        break;
                      case 'Próxima Aplicação':
                        cellValue = row.dataDaProximaVacinacao || 'N/A';
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

export default ManejoTableVacinacao;
