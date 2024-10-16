import React from 'react';
import '../css/Conteudo.css';

const Conteudo = ({ children }) => { 
  return (
    <div className="container">
      <div className="conteudo">
        {children}
      </div>
    </div>
  );
};

export default Conteudo;
