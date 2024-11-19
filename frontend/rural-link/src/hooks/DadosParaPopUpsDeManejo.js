import { useState } from 'react';
import AuthService from '../autenticacao/AuthService';

export const DadosParaPopUpsDeManejo = (animalId) => {
  const [message, setMessage] = useState('');
  const [vacinacaoData, setVacinacaoData] = useState([
    { nome: 'Vacina A', dataAplicacao: '2023-02-01', doses: '2', proximaAplicacao: '2024-06-01' },
    { nome: 'Vacina B', dataAplicacao: '2024-03-01', doses: '1', proximaAplicacao: '2024-09-01' },
  ]);

  const addVacinacao = (newRecord) => {
    setVacinacaoData(prevData => [...prevData, newRecord]);
  };

  const removeVacinacao = (animalId, index) => {
    const novaLista = vacinacaoData.filter((vacina, idx) => idx !== index);
    setVacinacaoData(novaLista);
  };
  
  

  const [pesagemData, setPesagemData] = useState([
    { peso: '120kg', data: '2024-01-01', saldo: '5kg' },
  ]);

  const addPesagem = (newPesagem) => {
    setPesagemData(prevData => [...prevData, newPesagem]);
  };

  const removePesagem = (animalId, index) => {
    try {
      AuthService.removerPesoAnimal(animalId, index);  // Passa animalId e o índice
    } catch (error) {
      setMessage('Credenciais inválidas!');
    }

    const updatedData = pesagemData.filter((_, i) => i !== index);
    setPesagemData(updatedData);
  };

  const [criasData, setCriasData] = useState([
    { codigo: '1234', nascimento: '2023-05-01', pai: '5678', idade: '1 ano' },
  ]);

  const addCrias = (newCrias) => {
    setCriasData(prevData => [...prevData, newCrias]);
  };

  const removeCrias = (animalId, index) => {
    try {
      AuthService.removerAnimal(animalId, index);  // Passa animalId e o índice
    } catch (error) {
      setMessage('Credenciais inválidas!');
    }

    const updatedData = criasData.filter((_, i) => i !== index);
    setCriasData(updatedData);
  };

  return {
    vacinacaoData,
    addVacinacao,
    setVacinacaoData,
    removeVacinacao,
    pesagemData,
    addPesagem,
    removePesagem,
    criasData,
    addCrias,
    removeCrias,
  };
};