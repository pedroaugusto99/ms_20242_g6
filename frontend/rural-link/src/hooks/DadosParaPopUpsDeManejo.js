import { useState } from 'react';

export const DadosParaPopUpsDeManejo = () => {
  // Dados iniciais de vacinação
  const [vacinacaoData, setVacinacaoData] = useState([
    { 
      nome: 'Vacina A', 
      dataAplicacao: '2023-02-01', 
      doses: '2', 
      proximaAplicacao: '2024-06-01' 
    },
    { 
      nome: 'Vacina B', 
      dataAplicacao: '2024-03-01', 
      doses: '1', 
      proximaAplicacao: '2024-09-01' 
    },
    { 
      nome: 'Vacina B', 
      dataAplicacao: '2024-03-01', 
      doses: '1', 
      proximaAplicacao: '2024-09-01' 
    },
    { 
      nome: 'Vacina B', 
      dataAplicacao: '2024-03-01', 
      doses: '1', 
      proximaAplicacao: '2024-09-01' 
    },
    { 
      nome: 'Vacina B', 
      dataAplicacao: '2024-03-01', 
      doses: '1', 
      proximaAplicacao: '2024-09-01' 
    },
  ]);

  const addVacinacao = (newRecord) => {
    setVacinacaoData(prevData => [...prevData, newRecord]);
  };

  const removeVacinacao = (index) => {
    const updatedData = vacinacaoData.filter((_, i) => i !== index);
    setVacinacaoData(updatedData);
  };

  // Dados iniciais de pesagem
  const [pesagemData, setPesagemData] = useState([
    { peso: '120kg', data: '2024-01-01', saldo: '5kg' },
  ]);

  const addPesagem = (newPesagem) => {
    setPesagemData(prevData => [...prevData, newPesagem]);
  };

  const removePesagem = (index) => {
    const updatedData = pesagemData.filter((_, i) => i !== index);
    setPesagemData(updatedData);
  };
  

  // Dados iniciais de crias
  const [criasData, setCriasData] = useState([
    { codigo: '1234', nascimento: '2023-05-01', pai: '5678', idade: '1 ano' },
    { codigo: '1234', nascimento: '2023-05-01', pai: '5678', idade: '1 ano' },
    { codigo: '1234', nascimento: '2023-05-01', pai: '5678', idade: '1 ano' },
    { codigo: '1234', nascimento: '2023-05-01', pai: '5678', idade: '1 ano' },
    { codigo: '1234', nascimento: '2023-05-01', pai: '5678', idade: '1 ano' },
    { codigo: '1234', nascimento: '2023-05-01', pai: '5678', idade: '1 ano' },
  ]);

  const addCrias = (newCrias) => {
    setCriasData(prevData => [...prevData, newCrias]);
  };

  const removeCrias = (index) => {
    const updatedData = criasData.filter((_, i) => i !== index);
    setCriasData(updatedData);
  };
  

  return {
    vacinacaoData,
    addVacinacao,
    setVacinacaoData,  // Certifique-se de que setVacinacaoData está sendo retornada corretamente
    removeVacinacao, 
    
    pesagemData,
    addPesagem,
    removePesagem,  // Função de remoção para pesagem
    
    criasData,
    addCrias,
    removeCrias,  // Função de remoção para crias
  };
};
