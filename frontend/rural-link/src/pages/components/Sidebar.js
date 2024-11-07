// Sidebar.js
import React, { useState } from 'react';
import '../css/Sidebar.css';
import logo from '../images/logo-simples-png-pq.png';
import AuthService from '../../autenticacao/AuthService';

// Componente Sidebar principal
const Sidebar = ({ title = "Titulo" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [nomeUsuario, setNomeUsuario] = React.useState('');
  const [roleUsuario, setRoleUsuario] = React.useState('');

  const toggleSidebar = () => setIsOpen(prev => !prev);
  const closeSidebar = () => setIsOpen(false);


  React.useEffect (() =>{
    AuthService.pegarDadosDoUsuario().then((response) => {
        setNomeUsuario(response.data['nome']); 
        setRoleUsuario(response.data['role']);
    })
}, []); 
// Componente Logo
const Logo = () => (
  <div className="logo">
    <img src={logo} alt="logo" className="imgLogo" />
    <span className="logo-name">Rural Link</span>
    <div onClick={toggleSidebar} className="menu-icon">
        <i className="bx bx-menu"></i>
    </div>
  </div>
);

// Componente Profile
const Profile = ({ name, role, imgSrc }) => (
  <div className="perfilInfos">
    <img src={imgSrc} alt="profile" className="imgPerfil" />
    <h3 className="namePerfil">{name}</h3>
    <p className="descPerfil">{role}</p>
  </div>
);

// Componente NavItem
const NavItem = ({ icon, label, link }) => (
  <li className="list">
    <a href={link} className="nav-link">
      <i className={icon}></i>
      <span className="link">{label}</span>
    </a>
  </li>
);

  return (
    <div className="tudoSidebar">
      <nav className={isOpen ? "open" : ""} role="navigation">
        <Logo />
        <div className="title">
          <h1 className="titleText">{title}</h1>
        </div>
        <div className="sair">
          <div className="sairText"><a href="/login">Sair</a></div>
        </div>

        <div className="sidebar">
          <div className="sidebar-content">
          <i className="bx bx-menu menu-icon2" onClick={closeSidebar}></i>
            <Profile 
              name={nomeUsuario}
              role={roleUsuario}
              imgSrc="https://via.placeholder.com/150" 
            />

            <ul className="lists">
              <NavItem icon="fa-solid fa-user icon" label="Perfil" link="/perfil" />
              <NavItem icon="fa-solid fa-chart-pie icon" label="Dashboard" link="/dashboard"/>
              <NavItem icon="fa-solid fa-circle-plus icon" label="Novo Cadastro" link="/registraranimal"/>
              <NavItem icon="fa-solid fa-clipboard icon" label="Rebanho" link="/fichamento"/>
              <NavItem icon="fa-solid fa-qrcode icon" label="Ler QR Code" />
            </ul>

            <div className="bottom-content">
              <NavItem icon="fa-solid fa-right-from-bracket icon" label="Sair" />
            </div>

          </div>

        </div>

      </nav>

      <section className={`overlay ${isOpen ? "open" : ""}`} onClick={closeSidebar}></section>
    </div>
  );
};

export default Sidebar;
