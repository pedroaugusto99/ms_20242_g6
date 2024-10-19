// Sidebar.js
import React, { useState } from 'react';
import '../css/Sidebar.css';
import 'boxicons';
import logo from '../images/logo-simples-png-pq.png';

const Sidebar = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  title = "Fichamento de Animais";

  return (
    <>
      <nav className={isOpen ? "open" : ""}>
        <div className="logo">
          <i className="bx bx-menu menu-icon" onClick={toggleSidebar}></i>
          <img src={logo} alt="logo" className="imgLogo" />
          <span className="logo-name">Rural Link</span>
        </div>
        <div className="title">
          <h1 className="titleText">{title}</h1>
        </div>
        <div className="sair">
          <div className="sairText"><a href="#">Sair</a></div>
        </div>
        <div className="sidebar">
          <div className="sidebar-content">
          <i className="bx bx-menu menu-icon2" onClick={closeSidebar}></i>
            <ul className="lists">
              <div className='perfilInfos'>
                <img src="https://via.placeholder.com/150" alt="profile" className="imgPerfil" />
                <h3 className='namePerfil'>Marcos Antunes</h3>
                <p className='descPerfil'>Fazendeiro</p>
              </div>
            <li className="list">
                <a href="#" className="nav-link">
                  <i className="fa-solid fa-user icon"></i>
                  <span className="link">Perfil</span>
                </a>
              </li>
              <li className="list">
                <a href="#" className="nav-link">
                  <i className="fa solid fa-chart-pie icon"></i>
                  <span className="link">Dashboard</span>
                </a>
              </li>
              <li className="list">
                <a href="#" className="nav-link">
                  <i className="fa-solid fa-circle-plus icon"></i>
                  <span className="link">Novo Cadastro</span>
                </a>
              </li>
              <li className="list">
                <a href="#" className="nav-link">
                  <i className="fa-solid fa-clipboard icon"></i>
                  <span className="link">Rebanho</span>
                </a>
              </li>
              <li className="list">
                <a href="#" className="nav-link">
                  <i className="fa-solid fa-qrcode icon"></i>
                  <span className="link">Ler QR Code</span>
                </a>
              </li>
            </ul>

            <div className="bottom-content">
              <li className="list">
                <a href="#" className="nav-link">
                  <i className="fa-solid fa-right-from-bracket icon"></i>
                  <span className="link">Sair</span>
                </a>
              </li>
            </div>
          </div>
        </div>
      </nav>

      <section className={`overlay ${isOpen ? "open" : ""}`} onClick={closeSidebar}>
      </section>
    </>
  );
};

export default Sidebar;
