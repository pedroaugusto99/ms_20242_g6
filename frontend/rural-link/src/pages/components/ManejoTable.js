import styles from '../css/FichaAnimal.module.css';

function ManejoTable({ title, data, columns }) {
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
                                    <td key={colIndex}>{row[col.toLowerCase().replace(/\s+/g, '')] || '####'}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className={styles.buttonManejo}>Ver detalhes de manejo</button>
            </div>
        </div>
    );
}

export default ManejoTable;
