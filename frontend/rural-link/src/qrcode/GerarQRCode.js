import React, { useState, useEffect } from 'react';
import styles from '../pages/css/RegistroFazenda.module.css'
import { QRCodeSVG } from 'qrcode.react';
import AuthService from '../autenticacao/AuthService';

const QRCodeGenerator = () => {
    const [qrText, setQRText] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const result = await AuthService.pegarQrCode();
            console.log(result);
            setQRText(result.data['qrCode']);
        }
        fetchData();
    }, []);

    return (
        <div className={styles.qrcode}>
            <QRCodeSVG value={qrText} />
        </div>
    );
}

export default QRCodeGenerator;