import React, { useState, useEffect } from 'react';
import styles from './PopUpFiltro.module.css';

// Componente ItemNavegacao
const ItemNavegacao = ({ label, value, aoMudar, tipo = 'select', name, opcoes = [] }) => {
  // Renderiza o input simples
  const renderizarInput = () => (
    <input
      type="text"
      id={name}
      name={name}
      value={value}
      onChange={aoMudar}
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
        onChange={aoMudar}
        className={styles.inputRange}
      />
      <span className={styles.spanDeAte}>até</span>
      <input
        type="number"
        id={`${name}Max`}
        name={`${name}Max`}
        value={value.max || ''}
        onChange={aoMudar}
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
      onChange={aoMudar}
      className={styles.selectFiltro}
    >
      <option value="">Selecione</option>
      {opcoes.map((opcao) => (
        <option key={opcao.value} value={opcao.value}>
          {opcao.label}
        </option>
      ))}
    </select>
  );

  return (
    <li className={styles.lista}>
      <div className={styles.opcaoFiltro}>
        <label htmlFor={name}>{label}</label>
        {tipo === 'input' ? renderizarInput() : tipo === 'range' ? renderizarIntervalo() : renderizarSelecao()}
      </div>
    </li>
  );
};

// Componente principal
export default function PopUpFiltro({ visivel, alternarModal }) {
  // Estado para os filtros
  const [filtros, setFiltros] = useState({
    especie: '',
    raca: '',
    sexo: '',
    status: '',
    idade: { min: '', max: '' },
    lote: '',
    peso: { min: '', max: '' },
  });

  // Estado para as raças disponíveis (dependente da espécie)
  const [racasDisponiveis, setRacasDisponiveis] = useState([]);

  // Opções de seleção
  const opcoesSelecao = {
    especie: [
      { value: 'Bovino', label: 'Bovino' },
      { value: 'Suino', label: 'Suíno' },
      { value: 'Ovino', label: 'Ovino' },
      { value: 'Caprino', label: 'Caprino' },
      { value: 'Equino', label: 'Equino' },
    ],
    raca: {
      Bovino: [
        { value: 'Nelore', label: 'Nelore' },
        { value: 'Angus', label: 'Angus' },
        { value: 'Brahman', label: 'Brahman' },
        { value: 'Brangus', label: 'Brangus' },
        { value: 'Senepol', label: 'Senepol' },
        { value: 'Hereford', label: 'Hereford' },
        { value: 'Outra', label: 'Outra' },
      ],
      Suino: [
        { value: 'landrace', label: 'Landrace' },
        { value: 'Largewhite', label: 'Large White' },
        { value: 'Duroc', label: 'Duroc' },
        { value: 'Pietrain', label: 'Pietrain' },
        { value: 'Hampshire', label: 'Hampshire' },
        { value: 'Outra', label: 'Outra' },
      ],
      Caprino: [
        { value: 'Saanen', label: 'Saanen' },
        { value: 'Toggenburg', label: 'Toggenburg' },
        { value: 'Murciana', label: 'Murciana' },
        { value: 'Parda_Alpina', label: 'Parda Alpina' },
        { value: 'Boer', label: 'Boer' },
        { value: 'Savanna', label: 'Savanna' },
        { value: 'Caninde', label: 'Canindé' },
        { value: 'Moxoto', label: 'Moxotó' },
        { value: 'Outra', label: 'Outra' },
      ],
      Ovino: [
        { value: 'Santa_ines', label: 'Santa Inês' },
        { value: 'Morada_nova', label: 'Morada Nova' },
        { value: 'Suffolk', label: 'Suffolk' },
        { value: 'Bergamacia', label: 'Bergamácia' },
        { value: 'Hampshire_down', label: 'Hampshire Down' },
        { value: 'Outra', label: 'Outra' },
      ],
    },
    sexo: [
      { value: 'Macho', label: 'Macho' },
      { value: 'Femea', label: 'Fêmea' },
    ],
    status: [
      { value: 'Ativo', label: 'Ativo' },
      { value: 'Vendido', label: 'Vendido' },
      { value: 'Abatido', label: 'Abatido' },
      { value: 'Desaparecido', label: 'Desaparecido' },
    ],
  };

  // Atualiza o filtro de espécie e reseta a raça
  const aoMudarEspecie = (evento) => {
    const novaEspecie = evento.target.value;
    setFiltros((prevFiltros) => ({
      ...prevFiltros,
      especie: novaEspecie,
      raca: '', // Reseta a raça quando a espécie muda
    }));
    setRacasDisponiveis(opcoesSelecao.raca[novaEspecie] || []); // Atualiza as raças com base na espécie
  };

  // Atualiza os filtros com base no input
  const aoMudarFiltro = (evento) => {
    const nome = evento.target.name;
    const valor = evento.target.value;

    // Para os campos de intervalo (idade, peso)
    if (nome.includes('Min')) {
      const campo = nome.replace('Min', '');
      setFiltros((prevFiltros) => ({
        ...prevFiltros,
        [campo]: { ...prevFiltros[campo], min: valor },
      }));
    } else if (nome.includes('Max')) {
      const campo = nome.replace('Max', '');
      setFiltros((prevFiltros) => ({
        ...prevFiltros,
        [campo]: { ...prevFiltros[campo], max: valor },
      }));
    } else {
      setFiltros((prevFiltros) => ({
        ...prevFiltros,
        [nome]: valor,
      }));
    }
  };

  // Adiciona ou remove classe do body para o modal
  useEffect(() => {
    if (visivel) {
      document.body.classList.add(styles.modalAtivo);
    } else {
      document.body.classList.remove(styles.modalAtivo);
    }
  }, [visivel]);

  // Aplica os filtros
  const aoAplicarFiltros = () => {
    console.log('Filtros aplicados:', filtros);
    alternarModal();
  };

  return (
    <>
      {visivel && (
        <div className={styles.modal}>
          <div onClick={alternarModal} className={styles.overlay}></div>
          <div className={styles.conteudoModal}>
            <h2>FILTROS</h2>
            <ul className={styles.listas}>
              {[ 
                { label: 'Espécie:', name: 'especie', value: filtros.especie, opcoes: opcoesSelecao.especie, aoMudar: aoMudarEspecie },
                { label: 'Raça:', name: 'raca', value: filtros.raca, opcoes: racasDisponiveis, aoMudar: aoMudarFiltro },
                { label: 'Sexo:', name: 'sexo', value: filtros.sexo, opcoes: opcoesSelecao.sexo, aoMudar: aoMudarFiltro },
                { label: 'Status:', name: 'status', value: filtros.status, opcoes: opcoesSelecao.status, aoMudar: aoMudarFiltro },
                { label: 'Idade:', name: 'idade', value: filtros.idade, tipo: 'range', aoMudar: aoMudarFiltro },
                { label: 'Peso:', name: 'peso', value: filtros.peso, tipo: 'range', aoMudar: aoMudarFiltro },
                { label: 'Lote:', name: 'lote', value: filtros.lote, tipo: 'input', aoMudar: aoMudarFiltro },
              ].map((props) => (
                <ItemNavegacao key={props.name} {...props} />
              ))}
            </ul>
            <div className={styles.rowbtn}>
              <button className={`${styles.btn} ${styles.btnPrimario}`} onClick={alternarModal}>
                <i className="fa-solid fa-angle-left"></i> Voltar
              </button>
              <button className={`${styles.btn} ${styles.btnPrimario}`} onClick={aoAplicarFiltros}>
                <i className="bx bx-filter-alt"></i> Filtrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
