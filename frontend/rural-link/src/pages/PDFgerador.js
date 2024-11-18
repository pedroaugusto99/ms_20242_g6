import React, { useState } from 'react';
import { Document, Page, Text, View, StyleSheet, pdf } from '@react-pdf/renderer';
import { useNavigate } from 'react-router-dom';  // Importando o hook useNavigate
import { Font } from '@react-pdf/renderer'; // Agora estamos importando a função Font corretamente
<meta charset="UTF-8" />

// Registrar fonte
Font.register({
  family: 'Poppins',
  src: '/fonts/Poppins-Medium.ttf'
});

const PDFGerador = () => {
  const [pdfBlob, setPdfBlob] = useState(null);
  const navigate = useNavigate();  // Inicializa o hook navigate

  // Dados das células
  const cells = [
    { width: 80, text: 'Célula 1' },
    { width: 80, text: 'Célula 2' },
    { width: 80, text: 'Célula 3' },
    { width: 80, text: 'Célula 4' },
    { width: 80, text: 'Célula 5' },
  ];

  const separators = [
    { text: 'Separador 1' },
    { text: 'Separador 2' },
    { text: 'Separador 3' },
    { text: 'Separador 4' },
    { text: 'Separador 5' },
  ];

  // Função para gerar o PDF
  const generatePDF = () => {
    const MyDocument = (
      <Document>
        <Page style={styles.page}>
          <View style={styles.fundo}>
            {/* Renderizar as células */}
            {cells.map((cell, index) => (
              <View key={index} style={{ ...styles.whitecell, width: cell.width }}>
                <Text style={styles.textinwhitecell}>{cell.text}</Text>
              </View>
            ))}
            
            {/* Renderizar os separadores */}
            {separators.map((separator, index) => (
              <View key={index} style={styles.separator}>
                <Text style={styles.separatorText}>{separator.text}</Text>
              </View>
            ))}

            <Text style={styles.titulo}>Texto dentro do quadrado</Text>
          </View>
        </Page>
      </Document>
    );

    pdf(MyDocument)
      .toBlob()
      .then((blob) => setPdfBlob(blob));  // Armazena o Blob do PDF gerado
  };

  // Gerar o PDF ao carregar a página
  React.useEffect(() => {
    generatePDF();
  }, []);

  // Função para voltar à página Ficha Animal
  const handleBackToFichaAnimal = () => {
    navigate('/fichaanimal');  // Redireciona para a página de Ficha Animal
  };

  return (
    <div style={styles.container}>
      {pdfBlob ? (
        <>
          <embed
            src={URL.createObjectURL(pdfBlob)}
            width="90%" // Ajuste o tamanho do PDF conforme necessário
            height="1200" // Ajuste o tamanho do PDF conforme necessário
            type="application/pdf"
          />

          {/* Container para os botões alinhados horizontalmente */}
          <div style={styles.buttonsContainer}>
            <button onClick={handleBackToFichaAnimal} style={styles.greenbutton}>
              Feito
            </button>
            <a
              href={URL.createObjectURL(pdfBlob)}
              download="relatorio.pdf"
              style={styles.greenbutton}
            >
              Baixar PDF
            </a>
          </div>
        </>
      ) : (
        <p>Carregando PDF...</p>
      )}
    </div>
  );
};

// Estilos do PDF e da interface
const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 12,
    fontFamily: 'Poppins',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontFamily: 'Poppins',
  },
  content: {
    marginTop: 20,
    fontFamily: 'Poppins',
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px",
  },
  greenbutton: {
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "white",
    textDecoration: "none",
    borderRadius: "10px",
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '700px',
    marginTop: '5px',
    marginBottom: '10px',
  },
  fundo: {
    width: '93%',
    height: '93%',
    backgroundColor: '#EFE9DB',
    position: 'relative',
    margin: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  whitecell: {
    height: 25,
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    padding: 1,
    marginBottom: 10, // Espaçamento entre as células
  },
  textinwhitecell: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
  separator: {
    width: '100%',  // Largura total da página
    height: 30,     // Altura do separador
    backgroundColor: '#28a745', // Cor verde
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    marginBottom: 10, // Espaçamento entre os separadores
  },
  separatorText: {
    color: '#fff', // Cor do texto
    fontSize: 14,  // Tamanho da fonte
    textAlign: 'center', // Alinhar o texto no centro
    fontFamily: 'Poppins',
  },
  titulo: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins',
    textAlign: 'center',
  },
});

export default PDFGerador;



