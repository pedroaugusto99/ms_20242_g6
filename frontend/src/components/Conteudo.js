import React from 'react';
import '../pages/styles/cssComponents/Conteudo.css';

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
