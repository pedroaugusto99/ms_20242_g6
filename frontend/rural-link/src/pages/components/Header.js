import React from 'react';
import styles from '../css/cssComponents/Header.module.css';

const Header = ({ title }) => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
        </header>
    );
};

export default Header;
