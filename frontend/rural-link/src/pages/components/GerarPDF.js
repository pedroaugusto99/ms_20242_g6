import { jsPDF } from 'jspdf';
import 'jspdf-autotable';  // Importa a extensão para tabelas

export const handleGeneratePDF = () => {
  const doc = new jsPDF();

  doc.text('Texto teste', 10, 10);

  const columns = ["Nome", "Idade", "Cidade"];
  const data = [
    ["galinha", 30, "cocorico"],
    ["pato", 25, "branco"],
    ["peru", 35, "de natal"]
  ];
  doc.autoTable({ head: [columns], body: data, startY: 20 }); // Agora autoTable deve funcionar

  const img = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/';
  doc.addImage(img, 'JPEG', 15, 50, 180, 160);

  doc.setTextColor(255, 0, 0);
  doc.text('Texto em vermelho', 10, 90);

  doc.setFillColor(0, 255, 0);
  doc.rect(10, 100, 180, 20, 'F');
  doc.setTextColor(0, 0, 0);
  doc.text('Vaca dentro da caixa', 15, 115);

  const columns1 = ["Nome", "Idade", "Cidade"];
  const data1 = [
    ["galinha", 30, "cocorico"],
    ["pato", 25, "branco"],
    ["peru", 35, "de natal"]
  ];
  doc.autoTable({ head: [columns1], body: data1, startY: 120 });

  doc.save('documento.pdf');
};
