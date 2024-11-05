// Importações necessárias
import Sidebar from './components/Sidebar';
import ImageProfile from './components/ImageProfile';
import Campo from './components/Campo';
import ManejoTable from './components/ManejoTable';
import styles from './css/FichaAnimal.module.css';

function FichaAnimal() {
    const pesagemData = [
        { peso: '100kg', data: '2024-01-01', saldo: '5kg' },
    ];
    const vacinacaoData = [
        { nome: 'Vacina A', dataAplicacao: '2024-02-01', doses: 2, proximaAplicacao: '2024-06-01' },
    ];
    const criasData = [
        { codigo: '1234', nascimento: '2023-05-01', pai: '5678', idade: '1 ano' },
    ];

    return (
        <div className={styles.body}>
            <Sidebar title="Ficha Animal" />
            <div className={styles.content}>
                <ImageProfile />
                
                <div className={styles.dadosEssenciais}>
                    <h1 className={styles.titleFicha}>Dados Essenciais</h1>
                    <div className={styles.camposCima}>
                        <Campo label="Código do Animal" />
                        <Campo label="Nome" />
                        <Campo label="Espécie" />
                        <Campo label="Raça" />
                    </div>
                    <div className={styles.camposBaixo}>
                        <Campo label="Sexo" />
                        <Campo label="Data de Nascimento" />
                        <Campo label="Idade" />
                        <Campo label="Data de Aquisição" />
                    </div>
                </div>

                <div className={styles.dadosAdicionais}>
                    <h1 className={styles.titleFicha}>Dados Adicionais</h1>
                    <div className={styles.camposCima}>
                        <Campo label="Status" />
                        <Campo label="Lote" />
                        <Campo label="Pai (Código)" />
                        <Campo label="Mãe (Código)" />
                    </div>
                    <div className={styles.camposBaixo}>
                        <Campo label="Peso Atual" editable />
                        <Campo label="Número de Crias" editable />
                    </div>
                </div>

                <div className={styles.manejo}>
                    <h1 className={styles.titleManejo}>Manejos</h1>
                    <ManejoTable title="Pesagem" data={pesagemData} columns={['Peso', 'Data da Pesagem', 'Saldo de Peso']} />
                    <ManejoTable title="Vacinação" data={vacinacaoData} columns={['Nome da Vacina', 'Data da Aplicação', 'Número de Doses', 'Próxima Aplicação']} />
                    <ManejoTable title="Crias" data={criasData} columns={['Código da Cria', 'Data de Nascimento', 'Pai (Código)', 'Idade']} />
                </div>

                <div className={styles.Rowbtn}>
                    <button className={`${styles.btn} ${styles.btnPrimario}`} type="button">Voltar</button>
                    <button className={`${styles.btn} ${styles.btnPrimario}`} type="button"><i className="fa-solid fa-trash-can"></i> Excluir Cadastro</button>
                    <button className={`${styles.btn} ${styles.btnPrimario}`} type="submit">Confirmar Edição</button>
                </div>
            </div>
        </div>
    );
}

export default FichaAnimal;
