import React, { useState } from 'react';
import { Document, Page, Text, View, StyleSheet, pdf } from '@react-pdf/renderer';
import { useNavigate } from 'react-router-dom';  // Importando o hook useNavigate
import { Font } from '@react-pdf/renderer'; // Agora estamos importando a função Font corretamente
import { Image } from '@react-pdf/renderer';

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
    { x: '175', y: 23, width: 90, text: 'Especie: ' },
    { x: '175', y: 23, width: 70, text: 'Raca: ' },
    { x: '175', y: 23, width: 60, text: 'Sexo: ' },
    { x: '175', y: 23, width: 90, text: 'Castrado: ' },
    { x: '175', y: 23, width: 80, text: 'Codigo: ' },
    { x: '175', y: 23, width: 100, text: 'Local atual: ' },
  ];

  const cells2 = [
    { x: '267', y: -113.5, width: 244, text: 'Bovino' },
    { x: '247', y: -113.5, width: 264, text: 'Nelore Branco' },
    { x: '238', y: -113.5, width: 80, text: 'Femea' },
    { x: '268', y: -113.5, width: 40, text: 'Nao' },
    { x: '258', y: -113.5, width: 130, text: '3847888-97345' },
    { x: '278', y: -113.5, width: 232, text: 'Chacaras California' },
  ];

  const cells3 = [
    { x: '320', y: -204, width: 95, text: 'Peso atual' },
    { x: '310', y: -204, width: 90, text: 'Aquisicao' },
    { x: '390', y: -204, width: 65, text: 'Idade' },
  ];

  const cells4 = [
    { x: '417', y: -272, width: 94, text: '557 Kg' },
    { x: '402', y: -272, width: 109, text: '29/02/2024' },
    { x: '457', y: -272, width: 53, text: 'Idade' },
  ];

  const cells5 = [
    { x: '5', y: -215, width: 54, text: 'Mae: ' },
    { x: '5', y: -215, width: 79, text: 'Status: ' },
  ];

  const cells6 = [
    { x: '61', y: -260.5, width: 195, text: '396544469-348573' },
    { x: '84', y: -260, width: 59, text: 'Vivo' },
  ];

  const cells7 = [
    { x: '258', y: -305.5, width: 54, text: 'Pai' },
    { x: '146', y: -305, width: 60, text: 'Crias' },
  ];
  const cells8 = [
    { x: '315', y: -350.5, width: 195, text: '29345734-32743803' },
    { x: '208', y: -350.5, width: 50, text: '7' },
  ];
  const cells9 = [
    { x: '260', y: -373.5, width: 80, text: 'Categoria' },
  ];
  const cells10 = [
    { x: '340', y: -396, width: 170, text: 'Reprodutora/Leiteira' },
  ];

  const separators = [
    { y:-637 ,text: 'Dados do animal:' },
    { y:-480,text: 'Parentesco:' },
    { y:-180 ,text: 'Saude:' },
    { y:-200 ,text: 'Pesagem:' },
    { y:-260 ,text: 'Observacoes: ' },
  ];

  // Função para gerar o PDF
  const generatePDF = () => {
    const MyDocument = (
      <Document>
        <Page style={styles.page}>


          <View style={styles.fundo}>
        <View style={styles.square}>
        <Image src="/images/profileGado.png" style={styles.image} />
      </View>
            {/* Renderizar as células */}
            {cells.map((cell, index) => (
             <View
             key={index}
             style={{
               ...styles.whitecell,
               width: cell.width,  // Largura da célula é dinâmica
               top: cell.y,        // Posição Y
               left: cell.x,       // Posição X
             }}
           >
             <Text style={styles.text}>{cell.text}</Text>
           </View>
            ))}
            {cells2.map((cell, index) => (
             <View
             key={index}
             style={{
               ...styles.whitecellnoborder,
               width: cell.width,  // Largura da célula é dinâmica
               top: cell.y,        // Posição Y
               left: cell.x,       // Posição X
             }}
           >
             <Text style={styles.text}>{cell.text}</Text>
           </View>
            ))}

{cells3.map((cell, index) => (
             <View
             key={index}
             style={{
               ...styles.whitecell,
               width: cell.width,  // Largura da célula é dinâmica
               top: cell.y,        // Posição Y
               left: cell.x,       // Posição X
             }}
           >
             <Text style={styles.text}>{cell.text}</Text>
           </View>
            ))}

{cells4.map((cell, index) => (
             <View
             key={index}
             style={{
               ...styles.whitecellnoborder,
               width: cell.width,  // Largura da célula é dinâmica
               top: cell.y,        // Posição Y
               left: cell.x,       // Posição X
             }}
           >
             <Text style={styles.text}>{cell.text}</Text>
           </View>
            ))}
            {cells5.map((cell, index) => (
             <View
             key={index}
             style={{
               ...styles.whitecell,
               width: cell.width,  // Largura da célula é dinâmica
               top: cell.y,        // Posição Y
               left: cell.x,       // Posição X
             }}
           >
             <Text style={styles.text}>{cell.text}</Text>
           </View>
            ))}

{cells6.map((cell, index) => (
             <View
             key={index}
             style={{
               ...styles.whitecellnoborder,
               width: cell.width,  // Largura da célula é dinâmica
               top: cell.y,        // Posição Y
               left: cell.x,       // Posição X
             }}
           >
             <Text style={styles.text}>{cell.text}</Text>
           </View>
            ))}

{cells7.map((cell, index) => (
             <View
             key={index}
             style={{
               ...styles.whitecell,
               width: cell.width,  // Largura da célula é dinâmica
               top: cell.y,        // Posição Y
               left: cell.x,       // Posição X
             }}
           >
             <Text style={styles.text}>{cell.text}</Text>
           </View>
            ))}

{cells8.map((cell, index) => (
             <View
             key={index}
             style={{
               ...styles.whitecellnoborder,
               width: cell.width,  // Largura da célula é dinâmica
               top: cell.y,        // Posição Y
               left: cell.x,       // Posição X
             }}
           >
             <Text style={styles.text}>{cell.text}</Text>
           </View>
            ))}

{cells9.map((cell, index) => (
             <View
             key={index}
             style={{
               ...styles.whitecell,
               width: cell.width,  // Largura da célula é dinâmica
               top: cell.y,        // Posição Y
               left: cell.x,       // Posição X
             }}
           >
             <Text style={styles.text}>{cell.text}</Text>
           </View>
            ))}

{cells10.map((cell, index) => (
             <View
             key={index}
             style={{
               ...styles.whitecellnoborder,
               width: cell.width,  // Largura da célula é dinâmica
               top: cell.y,        // Posição Y
               left: cell.x,       // Posição X
             }}
           >
             <Text style={styles.text}>{cell.text}</Text>
           </View>
            ))}

            {/* Renderizar os separadores */}
            {separators.map((separator, index) => (
              <View
              key={index}
              style={{
                ...styles.separator,
                top: separator.y,  // Posição Y do separador
              }}
            >
              <Text style={styles.separatorText}>{separator.text}</Text>
            </View>
            ))}
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
    height: '90%',
    backgroundColor: '#EFE9DB',
    position: 'relative',
    top: '40px',
    margin: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderWidth: 2,
    borderColor: '#294134',
  },
  whitecell: {
    height: 20,
    backgroundColor: '#f0f0f0',
    borderWidth: 1.25,
    borderColor: '#28a745',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    marginBottom: 2.75,
    fontSize: 10, // Espaçamento entre as células
  },
  whitecellnoborder: {
    height: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    marginBottom: 2.75,
    fontSize: 10, // Espaçamento entre as células
  },
  textinwhitecell: {
    color: '#294134',
    textAlign: 'center',
  },
  separator: {
    left:'-2',
    width: '100.5%',  // Largura total da página
    height: 17,     // Altura do separador
    backgroundColor: '#28a745', // Cor verde
    justifyContent: 'center',
    alignItems: 'letf',
    display: 'flex',
    borderRadius: 3,
    borderWidth: 2,
    borderColor: '#294134',
  },

  separatorText: {
    color: '#fff', // Cor do texto
    fontSize: 8.5,  // Tamanho da fonte
    textAlign: 'left', 
    fontFamily: 'Poppins',
    marginLeft:'7px',
  },
  titulo: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins',
    textAlign: 'center',
  },

  square: {
    top: '20px',
    left: '15px',
    width: 130, // Largura do quadrado
    height: 130, // Altura do quadrado
    backgroundColor: '#FFFFFF', // Cor branca
    justifyContent: 'center', // Alinha o conteúdo verticalmente
    alignItems: 'center', // Alinha o conteúdo horizontalmente
    position: 'absolute', // Permite sobreposição da imagem
    borderRadius: '10px',
  },
  image: {
    width: 110,
    height: 110,
    borderWidth: 30,
    borderRadius: '70px',
    borderColor: '#28a745',
    padding:'5px',
    objectFit: 'cover', // Garante que a imagem preencha sem distorcer
  },
  

});

export default PDFGerador;



