import Sidebar from './components/Sidebar';
import styles from './css/FichaAnimal.module.css';

import imageProfile from './images/ficha/profileGado.png'

function FichaAnimal() {
    return (
        <div className={styles.body}>
            <Sidebar title="Ficha Animal"/>
            <div className={styles.content}>
                <div className={styles.imageBanner}>
                    <div className={styles.imageProfileAnimal}>
                        <img src={imageProfile}/>
                    </div>
                </div>
                <div className={styles.dadosEssenciais}>
                    
                </div>
            </div>
        </div>
    )
}

export default FichaAnimal;
