import React, { useState } from 'react';
import styles from './css/cssPages/Fichamento.module.css';
import Sidebar from './components/Sidebar';
import PopUpFiltro from './modals/PopUpFiltro/PopUpFiltro';
import AuthService from '../autenticacao/AuthService';
import { useNavigate, useSearchParams } from 'react-router-dom';

function Fichamento() {
  const [animals, setAnimals] = React.useState(null);
  const [nomeAnimal, setNomeAnimal] = useState('');
  const [isFiltroVisible, setIsFiltroVisible] = useState(false); // Controle do modal
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  React.useEffect(() => {
    AuthService.listarAnimais().then((response) => {
      setAnimals(response.data);
    });
  }, []);

  const handleAccess = (id) => {
    navigate('/fichaanimal', { state: { identificador: id } });
  };

  const onChangeHandler = (event) => {
    setNomeAnimal(event.target.value);
    setSearchParams(`?${new URLSearchParams({ nome: nomeAnimal })}`);
    AuthService.listarAnimaisPorNome(nomeAnimal).then((response) => {
      setAnimals(response.data);
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setSearchParams(`?${new URLSearchParams({ nome: nomeAnimal })}`);
    AuthService.listarAnimaisPorNome(nomeAnimal).then((response) => {
      setAnimals(response.data);
    });
  };

  // Função para mostrar ou esconder o PopUpFiltro
  const toggleFiltro = () => {
    setIsFiltroVisible(!isFiltroVisible);
  };

  return (
    <div className={styles.body}>
      <Sidebar title='Lista de Fichas de Animais' />
      
      <div className={styles.containerTable}>
        <div className={styles.header}>
          <form onSubmit={submitHandler}>
            <div className={styles.searchContainer}>
              <input 
                type="text" 
                placeholder="Pesquisar..." 
                className={styles.searchInput}  
                onChange={onChangeHandler} 
              />
              <button className={styles.searchButton}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </form>
          <div className={styles.filterContainer}>
            <button onClick={toggleFiltro} className={styles.filterButton}><i class='bx bx-filter-alt'></i>Filtrar</button>
            <a href="/fichamento">
              <button className={styles.filterButton}>
                <i className='bx bx-brush-alt'></i>Limpar Filtros
              </button>
            </a>
          </div>
        </div>
        <div className={styles.titleContainer}>
          <h1 className={styles.fichamentoTitle}> 
            <i className="fa-solid fa-list-ul"></i> Filtro de Animais
          </h1>
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

      <PopUpFiltro isVisible={isFiltroVisible} toggleModal={toggleFiltro} />
    </div>
  );
}

export default Fichamento;
