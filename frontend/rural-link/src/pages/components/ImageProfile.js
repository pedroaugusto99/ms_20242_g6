import imageProfile from '../images/ficha/profileGado.png';
import qrCode from '../images/ficha/qrcode.png';
import styles from '../css/cssPages/FichaAnimal.module.css';

function ImageProfile() {
    return (
        <div className={styles.imageBanner}>
            <div className={styles.imageProfileAnimal}>
                <img src={imageProfile} alt="Perfil do Animal" />
                <div className={styles.qrCode}>
                    <img src={qrCode} alt="QR Code" />
                    <i id={styles.iconCopy} className="fa-regular fa-copy"></i>
                    <abbr title="Código Númerico">
                        <i id={styles.iconQuestion} className="fa-solid fa-circle-question"></i>
                    </abbr>
                </div>
            </div>
        </div>
    );
}

export default ImageProfile;
