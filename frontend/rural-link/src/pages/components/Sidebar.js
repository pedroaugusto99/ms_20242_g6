import React, { useState } from 'react';
import styles from '../css/cssComponents/Sidebar.module.css';
import logo from '../images/logo-simples-png-pq.png';
import AuthService from '../../autenticacao/AuthService';

import trabalhadoricon from '../images/trabalhadoricon.jpeg';
import fazendeiroicon from '../images/fazendeiroicon.jpeg';

// Componente Sidebar principal
const Sidebar = ({ title = "Titulo" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [nomeUsuario, setNomeUsuario] = React.useState('');
  const [roleUsuario, setRoleUsuario] = React.useState('Proprietário');

  const toggleSidebar = () => setIsOpen(prev => !prev);
  const closeSidebar = () => setIsOpen(false);

  React.useEffect(() => {
    AuthService.pegarDadosDoUsuario().then((response) => {
      setNomeUsuario(response.data['nome']);
      setRoleUsuario(response.data['role']);
    });
  }, []);

  // Componente Logo
  const Logo = () => (
    <div className={styles.logo}>
      <img src={logo} alt="logo" className={styles.imgLogo} />
      <span className={styles.logoName}>Rural Link</span>
      <div onClick={toggleSidebar} className={styles.menuIcon}>
        <i className="bx bx-menu"></i>
      </div>
    </div>
  );

  const getProfileImage = (role) => {
    if (role === "Proprietário") {
        return fazendeiroicon;  
    } else if (role === "Trabalhador") {
        return trabalhadoricon;  
    } else {
        return "https://via.placeholder.com/150";  
    }
};

  // Componente Profile
  const Profile = ({ name, role, imgSrc }) => (
    <div className={styles.perfilInfos}>
      <img src={imgSrc} alt="profile" className={styles.imgPerfil} />
      <h3 className={styles.namePerfil}>{name}</h3>
      <p className={styles.descPerfil}>{role}</p>
    </div>
  );

  // Componente NavItem
  const NavItem = ({ icon, label, link }) => (
    <li className={styles.list}>
      <a href={link} className={styles.navLink}>
        <i className={icon}></i>
        <span className={styles.link}>{label}</span>
      </a>
    </li>
  );

  return (
    <div className={styles.tudoSidebar}>
      <nav className={isOpen ? styles.open : ""} role="navigation">
        <Logo />
        <div className={styles.title}>
          <h1 className={styles.titleText}>{title}</h1>
        </div>
        <div className={styles.sair}>
          <div className={styles.sairText}>
            <a href="/login">Sair</a>
          </div>
        </div>

        <div className={styles.sidebar}>
          <div className={styles.sidebarContent}>
            <i className={`bx bx-menu ${styles.menuIcon2}`} onClick={closeSidebar}></i>
            <Profile
              name={nomeUsuario}
              role={roleUsuario}
              imgSrc={getProfileImage(roleUsuario)}  
            />

          <ul className={styles.lists}>
            <NavItem 
              icon={`${styles.icon} fa-solid fa-user`} 
              label="Perfil" 
              link="/perfil" 
            />
            <NavItem 
              icon={`${styles.icon} fa-solid fa-chart-pie`} 
              label="Dashboard" 
              link="/dashboard" 
            />
            <NavItem 
              icon={`${styles.icon} fa-solid fa-circle-plus`} 
              label="Novo Cadastro" 
              link="/registraranimal" 
            />
            <NavItem 
              icon={`${styles.icon} fa-solid fa-clipboard`} 
              label="Rebanho" 
              link="/fichamento" 
            />
            <NavItem 
              icon={`${styles.icon} fa-solid fa-qrcode`} 
              label="Ler QR Code" 
            />
            <NavItem 
              icon={`${styles.icon} fa-solid fa-thumbtack`} 
              label="Dúvidas" 
              link="/faq"
            />
              
          </ul>


            <div className={styles.bottomContent}>
              <NavItem
              icon={`${styles.icon} fa-solid fa-right-from-bracket`} 
              label="Sair" />
            </div>
          </div>
        </div>
      </nav>

      <section className={`${styles.overlay} ${isOpen ? styles.open : ""}`} onClick={closeSidebar}></section>
    </div>
  );
};

export default Sidebar;
