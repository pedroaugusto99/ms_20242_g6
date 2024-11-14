import { useState, useEffect } from 'react';
import AuthService from '../../autenticacao/AuthService';

const useDashboard = () => {
    const [orders, setOrders] = useState([]);
    const [reminders, setReminders] = useState([]);
    const [reminderTitle, setReminderTitle] = useState('');
    const [reminderTime, setReminderTime] = useState('');
    const [trabalhadores, setTrabalhadores] = useState([]);
    const [numeroDeAnimais, setNumeroDeAnimais] = useState('');
    const [numeroDeAnimaisFemeas, setNumeroDeAnimaisFemeas] = useState(null);
    const [numeroDeAnimaisMachos, setNumeroDeAnimaisMachos] = useState(null);

    useEffect(() => {
        AuthService.listarTrabalhadores().then((response) => {
            setTrabalhadores(response.data);
        })
    }, []);

    useEffect(() => {
        AuthService.pegarDadosParaGraficos().then(response => {
            setNumeroDeAnimais(response.data['animaisCadastrados']);
            setNumeroDeAnimaisFemeas(response.data['animaisFemea']);
            setNumeroDeAnimaisMachos(response.data['animaisMacho']);
        })
    }, []);

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
        setReminders(reminders.filter((_, i) => i !== index));
    };

    return { 
        orders, 
        reminders, 
        reminderTitle, 
        setReminderTitle, 
        reminderTime, 
        setReminderTime, 
        addReminder, 
        removeReminder, 
        trabalhadores, 
        numeroDeAnimais, 
        numeroDeAnimaisFemeas, 
        numeroDeAnimaisMachos 
    };
};

export default useDashboard;
