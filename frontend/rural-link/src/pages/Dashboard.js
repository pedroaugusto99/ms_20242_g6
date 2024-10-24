import React, { useEffect, useState } from 'react';
import styles from './css/Dashboard.module.css';

import profile2 from './images/dashboard/profile-2.jpg';
import profile3 from './images/dashboard/profile-3.jpg';
import profile4 from './images/dashboard/profile-4.jpg';
import plus from './images/dashboard/plus.png';

import Sidebar from './components/Sidebar';
import Grafico from './components/Grafico';
import DonutChart from './components/DonutChart';

const Dashboard = () => {
    const referenceValue = 600; 
    const currentValue = 500;

    const maleCurrentValue = 350; 
    const maleReferenceValue = 500;

    const femaleCurrentValue = 150; 
    const femaleReferenceValue = 500;

    const maleColor = '#3498db'; // Azul
    const femaleColor = '#e74c3c'; // Vermelho
    const totalColor = '#2ecc71'; // Verde

    const [orders, setOrders] = useState([]);
    const [reminders, setReminders] = useState([]);
    const [reminderTitle, setReminderTitle] = useState('');
    const [reminderTime, setReminderTime] = useState('');

    useEffect(() => {
        const fetchedOrders = [
            { productNumber: '001', productName: 'Macho', paymentStatus: '14 Anos', status: 'Erado' },
            { productNumber: '002', productName: 'Macho', paymentStatus: '4 Anos', status: 'Maduro' },
            { productNumber: '003', productName: 'Fêmea', paymentStatus: '1 Ano', status: 'Bezerro' },
        ];
        setOrders(fetchedOrders);
    }, []);

    const addReminder = (e) => {
        e.preventDefault();
        if (reminderTitle && reminderTime) {
            setReminders([...reminders, { title: reminderTitle, time: reminderTime, deactive: false }]);
            setReminderTitle('');
            setReminderTime('');
        }
    };

    const removeReminder = (index) => {
        const updatedReminders = reminders.filter((_, i) => i !== index);
        setReminders(updatedReminders);
    };
    

    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <Sidebar title='Dashboard' />
            
                {/* Main Content */}
                <main>
                <h1>Dados</h1>
                    <div className={styles.analyse}>
                        <div className={styles.sales}>
                            <AnalysisCard 
                                title="Animais Cadastrados" 
                                amount={currentValue} 
                                percentage={((currentValue / referenceValue) * 100).toFixed(0) + '%'}
                                referenceValue={referenceValue} 
                                currentValue={currentValue} 
                                color={totalColor}
                            />
                        </div>
                        <div className={styles.visits}>
                            <AnalysisCard 
                                title="Machos" 
                                amount={maleCurrentValue} 
                                percentage={((maleCurrentValue/maleReferenceValue) * 100).toFixed(0) + '%'}
                                referenceValue={maleReferenceValue} 
                                currentValue={maleCurrentValue} 
                                color={maleColor}
                            />
                        </div>
                        <div className={styles.searches}>
                            <AnalysisCard 
                                title="Fêmeas" 
                                amount={femaleCurrentValue} 
                                percentage={((femaleCurrentValue/femaleReferenceValue) * 100).toFixed(0) + '%'}
                                referenceValue={femaleReferenceValue} 
                                currentValue={femaleCurrentValue} 
                                color={femaleColor}
                            />
                        </div>
                    </div>

                    {/* New Users Section */}
                    <div className={styles.newUsers}>
                        <h1>Trabalhadores</h1>
                        <div className={styles.userList}>
                            <UserCard name="João" time="54 Minutos atrás" image={profile2} />
                            <UserCard name="Sebastião" time="3 Horas atrás" image={profile3} />
                            <UserCard name="Antônio" time="6 Horas atrás" image={profile4} />
                            <UserCard name="Adicionar" time="Novo Usuário" image={plus} />
                        </div>
                    </div>

                    {/* Recent Orders Table */}
                    <div className={styles.recentOrders}>
                        <h1>Filtro de Animais</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>#Id</th>
                                    <th>Gênero</th>
                                    <th>Idade</th>
                                    <th>Raça</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order, index) => (
                                    <tr key={index}>
                                         <td>{order.productNumber}</td>
                                        <td>{order.productName}</td>
                                        <td>{order.paymentStatus}</td>
                                        <td className={order.status === 'Maduro' ? styles.danger : order.status === 'Erado' ? styles.warning : styles.primary}>
                                            {order.status}
                                        </td>
                                        <td className={styles.primary}>Detalhes</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <a href="#">Mostrar Todos</a>
                    </div>
                </main>

                {/* Right Section */}
                <div className={styles.rightSection}>
                    <div className={styles.nav}>
                        <div className={styles.profile}>
                            <div className={styles.info}>
                                <p className={styles.p}>Opa, <b>Tião</b></p>
                                <small className="textMuted">Fazendeiro</small>
                            </div>
                            <div className={styles.profilePhoto}>
                                
                            </div>
                        </div>
                    </div>

                    <Grafico />

                    <div className={styles.reminders}>
                        <div className={styles.header}>
                            <h2>Lembretes</h2>
                            <span className="material-icons-sharp">notifications_none</span>
                        </div>

                        <form onSubmit={addReminder} className={styles.addReminderForm}>
                            <input 
                                type="text" 
                                placeholder="Tarefa" 
                                value={reminderTitle} 
                                onChange={(e) => setReminderTitle(e.target.value)} 
                                required 
                            />
                            <input 
                                type="time" 
                                value={reminderTime} 
                                onChange={(e) => setReminderTime(e.target.value)} 
                                required 
                            />
                            <button type="submit">Adicionar</button>
                        </form>

                        {reminders.map((reminder, index) => (
                            <ReminderCard 
                                key={index} 
                                title={reminder.title} 
                                time={reminder.time} 
                                deactive={reminder.deactive} 
                                onDelete={() => removeReminder(index)} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const AnalysisCard = ({ title, amount, percentage, referenceValue, currentValue, color }) => (
    <div className={styles.status}>
        <div className={styles.info}>
            <h3>{title}</h3>
            <h1>{amount}</h1>
        </div>
        <div className={styles.progresss}>
            <DonutChart referenceValue={referenceValue} currentValue={currentValue} color={color} />
            <div className={styles.percentage}>
                <p>{percentage}</p>
            </div>
        </div>
    </div>
);


const UserCard = ({ name, time, image }) => (
    <div className={styles.user}>
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <p>{time}</p>
    </div>
);

const ReminderCard = ({ title, time, deactive, onDelete }) => (
    <div className={`${styles.notification} ${deactive ? styles.deactive : ''}`}>
        <div className={styles.icon}>
            <span className="material-icons-sharp">{deactive ? 'edit' : 'volume_up'}</span>
        </div>
        <div className={styles.content}>
            <div className={styles.info}>
                <h3>{title}</h3>
                <small className="text_muted">{time}</small>
            </div>
            <span className="material-icons-sharp" onClick={onDelete} style={{ cursor: 'pointer', color: 'red' }}>
                delete
            </span>
        </div>
    </div>
);

export default Dashboard;
