import styles from '../pages/styles/cssPages/FichaAnimal.module.css';

function ManejoTable({ title, data, columns, toggleModal }) {
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
                        {data.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {columns.map((col, colIndex) => (
                                    <td key={colIndex}>
                                        {/* Acessar o valor dinamicamente com base no nome da coluna */}
                                        {row[col.toLowerCase().replace(/\s+/g, '')] || '####'}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className={styles.buttonManejo} onClick={toggleModal}>Ver detalhes de manejo</button>
            </div>
        </div>
    );
}

export default ManejoTable;
