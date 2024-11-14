import styles from '../css/cssPages/FichaAnimal.module.css';

function Campo({ label, editable = false }) {
    return (
        <div className={styles.campoContainer}>
            <p className={styles.cima}>{label}</p>
            <p className={styles.exemplo}>
                <span className={styles.campo}></span>
                {editable && <i className="fa-solid fa-pen-to-square"></i>}
            </p>
        </div>
    );
}

export default Campo;
