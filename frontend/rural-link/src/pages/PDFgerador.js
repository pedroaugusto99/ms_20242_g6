import React, { useState } from 'react';
import { Document, Page, Text, View, StyleSheet, pdf } from '@react-pdf/renderer';
import { useNavigate } from 'react-router-dom';  
import { Font } from '@react-pdf/renderer';
import { Image } from '@react-pdf/renderer';


Font.register({
  family: 'Poppins',
  src: '/fonts/Poppins-Medium.ttf'
});

const PDFGerador = () => {
  const [pdfBlob, setPdfBlob] = useState(null);
  const navigate = useNavigate();  

  
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
    { y:-290 ,text: 'Saude:' },
    { y:-185 ,text: 'Pesagem:' },
    { y:-80 ,text: 'Observacoes: ' },
  ];

  // Função para gerar o PDF
  const generatePDF = () => {
    const MyDocument = (
      <Document>
        <Page style={styles.page}>


      <View>
        <Image src="/images/logovariant.png" style={styles.imagelogo}></Image>
      </View>
        <Text style={styles.cabecalho}>Ficha Animal</Text>
      <View>
        <Image src="/images/qrcode.png" style={styles.qrcode}></Image>
      </View>

          <View style={styles.fundo}>
        <View style={styles.square}>
        <Image src="/images/profileGado.png" style={styles.image} />
      </View>
            {cells.map((cell, index) => (
             <View
             key={index}
             style={{
               ...styles.whitecell,
               width: cell.width,  
               top: cell.y,        
               left: cell.x,       
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
               width: cell.width,  
               top: cell.y,        
               left: cell.x,       
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
               width: cell.width,  
               top: cell.y,        
               left: cell.x,      
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
               width: cell.width,  
               top: cell.y,        
               left: cell.x,      
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
               width: cell.width,  
               top: cell.y,        
               left: cell.x,      
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
               width: cell.width,  
               top: cell.y,        
               left: cell.x,      
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
               width: cell.width,  
               top: cell.y,        
               left: cell.x,      
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
               width: cell.width,  
               top: cell.y,        
               left: cell.x,      
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
               width: cell.width,  
               top: cell.y,        
               left: cell.x,      
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
               width: cell.width,  
               top: cell.y,        
               left: cell.x,      
             }}
           >
             <Text style={styles.text}>{cell.text}</Text>
           </View>
            ))}

            {separators.map((separator, index) => (
              <View
              key={index}
              style={{
                ...styles.separator,
                top: separator.y,   
              }}
            >
              <Text style={styles.separatorText}>{separator.text}</Text>
            </View>
            ))}
            <View style={styles.fichamento}>
            <View style={[styles.row, styles.headerRow]}>
            <Text style={[styles.cell, styles.firstCell]}>Codigo da cria</Text>
            <Text style={styles.cell}>Data de nascimento</Text>
            <Text style={styles.cell}>Pai(codigo)</Text>
            <Text style={[styles.cell, styles.lastCell]}>Idade</Text>
          </View>
            {[1, 2, 3, 4].map((_, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              <Text style={styles.cell}>####</Text>
              <Text style={styles.cell}>####</Text>
              <Text style={styles.cell}>####</Text>
              <Text style={styles.cell}>####</Text>
            </View>
          ))}
          
            </View>

            <View style={styles.fichamento2}>
            <View style={[styles.row, styles.headerRow]}>
            <Text style={[styles.cell, styles.firstCell]}>Nome da vacina</Text>
            <Text style={styles.cell}>Data de aplicacao</Text>
            <Text style={styles.cell}>Numero de doses</Text>
            <Text style={[styles.cell, styles.lastCell]}>Data para a proxima dose</Text>
          </View>
            {[1, 2, 3, 4].map((_, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              <Text style={styles.cell}>####</Text>
              <Text style={styles.cell}>####</Text>
              <Text style={styles.cell}>####</Text>
              <Text style={styles.cell}>####</Text>
            </View>
          ))}
          
            </View>

            <View style={styles.fichamento3}>
            <View style={[styles.row, styles.headerRow]}>
            <Text style={[styles.cell, styles.firstCell]}>Peso</Text>
            <Text style={styles.cell}>Data da pesagem</Text>
            <Text style={styles.cell}>Alimentacao</Text>
            <Text style={[styles.cell, styles.lastCell]}>Saldo da pesagem</Text>
          </View>
            {[1, 2, 3, 4].map((_, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              <Text style={styles.cell}>####</Text>
              <Text style={styles.cell}>####</Text>
              <Text style={styles.cell}>####</Text>
              <Text style={styles.cell}>####</Text>
            </View>
          ))}
          
            </View>

          <View style={styles.fichamento4}>
          <Text>Lorem ipsum dolor sit amet. Est voluptatum quisquam ab atque quia est autem odio ut iure odio ut veritatis obcaecati et dolor galisum ut debitis aspernatur. Ut dolore enim non explicabo vero et eaque iste ad pariatur necessitatibus non galisum delectus.
          Et internos enim ut veritatis dicta qui vitae laboriosam qui architecto quia aut dolore expedita. Aut eligendi nisi qui debitis obcaecati ea modi mollitia aut galisum perferendis ut galisum quidem vel velit voluptas. Vel vero minus aut debitis nobis ut quod consequuntur quo assumenda voluptates nam accusamus cupiditate?</Text>
          </View>

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

  const handleBackToFichaAnimal = () => {
    navigate('/fichaanimal');  
  };

  return (
    <div style={styles.container}>
      {pdfBlob ? (
        <>
          <embed
            src={URL.createObjectURL(pdfBlob)}
            width="90%" 
            height="1200" 
            type="application/pdf"
          />

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
    fontSize: 10, 
  },
  whitecellnoborder: {
    height: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    marginBottom: 2.75,
    fontSize: 10, 
  },
  textinwhitecell: {
    color: '#294134',
    textAlign: 'center',
  },
  separator: {
    left:'-2',
    width: '100.5%', 
    height: 17,     
    backgroundColor: '#28a745',
    justifyContent: 'center',
    alignItems: 'letf',
    display: 'flex',
    borderRadius: 3,
    borderWidth: 2,
    borderColor: '#294134',
  },

  separatorText: {
    color: '#fff',
    fontSize: 8.5,  
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
    width: 130, 
    height: 130,
    backgroundColor: '#FFFFFF', 
    justifyContent: 'center', 
    alignItems: 'center', 
    position: 'absolute', 
    borderRadius: '10px',
  },
  image: {
    width: 110,
    height: 110,
    borderWidth: 30,
    borderRadius: '70px',
    borderColor: '#28a745',
    padding:'5px',
    objectFit: 'cover',
  },

  imagelogo: {
    position: 'absolute',
    top:-30,
    left: 5,
    width: 110,
    height: 110,
    objectFit: 'cover', 
  },

  qrcode: {
    position: 'absolute',
    top:-10,
    left: 455,
    width: 63,
    height: 63,
    objectFit: 'cover', 
  },

  fichamento:{
    justifyContent: 'center', 
    alignItems: 'center', 
    top: 250,
    width: 512,
    height: 120,
    borderWidth: 2,
    borderColor: '#28a745',
    position: 'absolute',
    borderRadius: '10px',
    backgroundColor: '#FFFFFF',
  },

  fichamento2:{
    justifyContent: 'center', 
    alignItems: 'center', 
    top: 400,
    width: 512,
    height: 90,
    borderWidth: 2,
    borderColor: '#28a745',
    position: 'absolute',
    borderRadius: '10px',
    backgroundColor: '#FFFFFF',
  },

  fichamento3:{
    justifyContent: 'center', 
    alignItems: 'center', 
    top: 520,
    width: 512,
    height: 90,
    borderWidth: 2,
    borderColor: '#28a745',
    position: 'absolute',
    borderRadius: '10px',
    backgroundColor: '#FFFFFF',
  },

  fichamento4:{
    justifyContent: 'center', 
    alignItems: 'center', 
    top: 640,
    width: 512,
    height: 70,
    borderWidth: 2,
    borderColor: '#28a745',
    position: 'absolute',
    borderRadius: '10px',
    backgroundColor: '#FFFFFF',
    fontSize:'7px',
  },
  
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    borderBottomStyle: 'solid',
    paddingVertical: 1,
    justifyContent: 'space-around',
  },
  cell: {
    width: '23%',
    textAlign: 'center',
    fontSize: 9,
  },

  cabecalho:{
    top:35,
    left:230,
    fontSize:20,
    position: 'absolute',
    color: '#294134',
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
    display:'flex',
    borderBottom:2,
    borderBottomColor: '#28a745',

  },
  

});

export default PDFGerador;



