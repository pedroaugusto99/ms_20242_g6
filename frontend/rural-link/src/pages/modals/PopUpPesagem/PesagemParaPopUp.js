import styles from './PopUpPesagem.module.css';

function PesagemParaPopUp({ data, columns }) {
    return (
        <div className={styles.manejoTable}>
            <div className={styles.manejoTableContainer}>
                <table className={styles.tableManejo}>
                    <thead>
                        <tr>
                            {columns.map((col, idx) => (
                                <th key={idx}>{col}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {columns.map((col, colIndex) => (
                                    <td key={colIndex}>
                                        {row[col.toLowerCase().replace(/\s+/g, '')] || '####'}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className={styles.graficoPesagem}>
                        <h2>Gráfico</h2>
                </div>
            </div>

        </div>
    );
}

export default PesagemParaPopUp;
