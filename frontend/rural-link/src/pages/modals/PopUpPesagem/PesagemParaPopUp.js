import styles from './PopUpPesagem.module.css';
import PropTypes from 'prop-types';

function PesagemParaPopUp({ data, columns, onRemover, modoExclusao }) {
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

    if (!data || data.length === 0) {
        return (
            <div className={styles.manejoTable}>
                <p>Nenhum registro de pesagem encontrado.</p>
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
                                            aria-label="Excluir pesagem"
                                        >
                                            <i className="fa-solid fa-trash-can"></i>
                                        </button>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className={styles.graficoPesagem}>
                    <h2>Gráfico</h2>
                    {/* Aqui você pode colocar um gráfico real, se necessário */}
                </div>
            </div>
        </div>
    );
}

PesagemParaPopUp.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            peso: PropTypes.string.isRequired,
            data: PropTypes.string.isRequired,
            saldo: PropTypes.string.isRequired
        })
    ).isRequired,
    columns: PropTypes.arrayOf(PropTypes.string).isRequired,
    onRemover: PropTypes.func.isRequired,
    modoExclusao: PropTypes.bool
};

export default PesagemParaPopUp;
