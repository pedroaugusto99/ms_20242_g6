import React, { useState, useEffect } from 'react';
import styles from './PopUpFiltro.module.css';

// Componente ItemNavegacao
const ItemNavegacao = ({ label, value, onChange, type = 'select', name, options = [] }) => {
  // Renderiza o input simples
  const renderizarInput = () => (
    <input
      type="text"
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className={styles.inputLote}
      placeholder="Digite o lote"
    />
  );

  // Renderiza o intervalo (mínimo e máximo)
  const renderizarIntervalo = () => (
    <div className={styles.containerRange}>
      <span className={styles.spanDeAte}>De</span>
      <input
        type="number"
        id={`${name}Min`}
        name={`${name}Min`}
        value={value.min || ''}
        onChange={onChange}
        className={styles.inputRange}
      />
      <span className={styles.spanDeAte}>até</span>
      <input
        type="number"
        id={`${name}Max`}
        name={`${name}Max`}
        value={value.max || ''}
        onChange={onChange}
        className={styles.inputRange}
      />
    </div>
  );

  // Renderiza o select dropdown
  const renderizarSelecao = () => (
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className={styles.selectFiltro}
    >
      <option value="">Selecione</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );

  return (
    <li className={styles.lista}>
      <div className={styles.opcaoFiltro}>
        <label htmlFor={name}>{label}</label>
        {type === 'input' ? renderizarInput() : type === 'range' ? renderizarIntervalo() : renderizarSelecao()}
      </div>
    </li>
  );
};

// Componente principal
export default function PopUpFiltro({ isVisible, toggleModal }) {
  // Estado para os filtros
  const [filters, setFilters] = useState({
    especie: '',
    raca: '',
    sexo: '',
    status: '',
    idade: { min: '', max: '' },
    lote: '',
    peso: { min: '', max: '' },
  });

  // Estado para as raças disponíveis (dependente da espécie)
  const [availableRacas, setAvailableRacas] = useState([]);

  // Opções de seleção
  const selectOptions = {
    especie: [
      { value: 'bovino', label: 'Bovino' },
      { value: 'suino', label: 'Suíno' },
      { value: 'ovino', label: 'Ovino' },
    ],
    raca: {
      bovino: [
        { value: 'nelore', label: 'Nelore' },
        { value: 'angus', label: 'Angus' },
        { value: 'brahman', label: 'Brahman' },
      ],
      suino: [
        { value: 'largewhite', label: 'Large White' },
        { value: 'landrace', label: 'Landrace' },
      ],
      ovino: [
        { value: 'dorper', label: 'Dorper' },
        { value: 'dorpershrop', label: 'Dorper Shrop' },
        { value: 'romney', label: 'Romney' },
      ],
    },
    sexo: [
      { value: 'macho', label: 'Macho' },
      { value: 'femea', label: 'Fêmea' },
    ],
    status: [
      { value: 'ativo', label: 'Ativo' },
      { value: 'inativo', label: 'Inativo' },
      { value: 'vendido', label: 'Vendido' },
    ],
  };

  // Atualiza o filtro de espécie e reseta a raça
  const handleEspecieChange = (event) => {
    const novaEspecie = event.target.value;
    setFilters({ ...filters, especie: novaEspecie, raca: '' });
    setAvailableRacas(selectOptions.raca[novaEspecie] || []);
  };

  // Atualiza os filtros com base no input
  const handleFilterChange = (event) => {
    const nome = event.target.name;
    const valor = event.target.value;
  
    if (nome.includes('Min')) {
      const campo = nome.replace('Min', '');
      filters[campo] = filters[campo] || {};
      filters[campo].min = valor;
    } else if (nome.includes('Max')) {
      const campo = nome.replace('Max', '');
      filters[campo] = filters[campo] || {};
      filters[campo].max = valor;
    } else {
      filters[nome] = valor;
    }
  
    setFilters(filters);
  };

  // Adiciona ou remove classe do body para o modal
  useEffect(() => {
    if (isVisible) {
      document.body.classList.add(styles.modalAtivo);
    } else {
      document.body.classList.remove(styles.modalAtivo);
    }
  }, [isVisible]);

  // Aplica os filtros
  const handleApplyFilters = () => {
    console.log('Filtros aplicados:', filters);
    toggleModal();
  };

  return (
    <>
      {isVisible && (
        <div className={styles.modal}>
          <div onClick={toggleModal} className={styles.overlay}></div>
          <div className={styles.conteudoModal}>
            <h2>FILTROS</h2>
            <ul className={styles.listas}>
              {[
                { label: 'Espécie:', name: 'especie', value: filters.especie, options: selectOptions.especie, onChange: handleEspecieChange },
                { label: 'Raça:', name: 'raca', value: filters.raca, options: availableRacas, onChange: handleFilterChange },
                { label: 'Sexo:', name: 'sexo', value: filters.sexo, options: selectOptions.sexo, onChange: handleFilterChange },
                { label: 'Idade:', name: 'idade', value: filters.idade, type: 'range', onChange: handleFilterChange },
                { label: 'Status:', name: 'status', value: filters.status, options: selectOptions.status, onChange: handleFilterChange },
                { label: 'Lote:', name: 'lote', value: filters.lote, type: 'input', onChange: handleFilterChange },
                { label: 'Peso:', name: 'peso', value: filters.peso, type: 'range', onChange: handleFilterChange },
              ].map((props) => (
                <ItemNavegacao key={props.name} {...props} />
              ))}
            </ul>
            <div className={styles.rowbtn}>
              <button className={`${styles.btn} ${styles.btnPrimario}`} onClick={toggleModal}>
                <i className="fa-solid fa-angle-left"></i> Voltar
              </button>
              <button className={`${styles.btn} ${styles.btnPrimario}`} onClick={handleApplyFilters}>
                <i className="bx bx-filter-alt"></i> Filtrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
