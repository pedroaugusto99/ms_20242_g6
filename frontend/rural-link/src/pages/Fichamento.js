import React, { useEffect } from 'react';
import styles from './css/cssPages/Fichamento.module.css';
import Sidebar from './components/Sidebar';
import PopUpFiltro from './modals/PopUpFiltro/PopUpFiltro';
import AuthService from '../autenticacao/AuthService';


function Fichamento() {

    const[animals, setAnimals] = React.useState(null);

    React.useEffect (() =>{
        AuthService.listarAnimais().then((response) => {
            setAnimals(response.data)
        })
    }, []);

    const handleAccess = (id) => {
        console.log(`Acessando detalhes do animal com ID: ${id}`);
    };

    return (
        <div className={styles.body}>
            <Sidebar title='Lista de Fichas de Animais'/>
            
            <div className={styles.containerTable}>
                <div className={styles.header}>   
                    <div className={styles.searchContainer}>
                        <input type="text" placeholder="Pesquisar..." className={styles.searchInput} />
                        <button className={styles.searchButton}><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    <div className={styles.filterContainer}>
                        <PopUpFiltro />
                        <button className={styles.filterButton}><i class='bx bx-brush-alt'></i>Limpar Filtros</button>
                    
                    </div>
                </div>
                    <div className={styles.titleContainer}>
                        <h1 className={styles.fichamentoTitle}> <i className="fa-solid fa-list-ul"></i>Filtro de Animais</h1>
                    </div>
                <table className={styles.animalTable}>
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Nome</th>
                            <th>Sexo</th>
                            <th>Espécie</th>
                            <th>Raça</th>
                            <th>Idade</th>
                            <th>Lote</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(animals) && animals.length > 0 ? (
                            animals.map((animal) => (
                                <tr key={animal.id}>
                                    <td>{animal.codigo}</td>
                                    <td>{animal.nome}</td>
                                    <td>{animal.sexo}</td>
                                    <td>{animal.especie}</td>
                                    <td style={{ color: '#0022FF' }}>{animal.raca}</td>
                                    <td>{animal.idade}</td>
                                    <td>{animal.lote}</td>
                                    <td>
                                        <button onClick={() => handleAccess(animal.animalId)}>Acessar</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8">Nenhum animal encontrado.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Fichamento;