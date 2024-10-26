import React from 'react';
import QRCodeGenerator from '../qrcode/GerarQRCode';

const DashboardComponent = () => {
    return (
        <div className="container-dashboard">
            <h2>Dashboard</h2>
            <p>Bem-vindo ao dashboard!</p>
            <QRCodeGenerator/>
        </div>
    );
};

export default DashboardComponent;