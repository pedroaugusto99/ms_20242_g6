import React, { useEffect, useRef, useState } from 'react';
import { Chart, registerables } from 'chart.js';
import '../css/cssComponents/Grafico.css';

Chart.register(...registerables);

const Grafico = () => {
    const [chartType, setChartType] = useState('bar');
    const [labels, setLabels] = useState([]);
    const [dataPoints, setDataPoints] = useState([]);
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    const chartData = {
        labels,
        datasets: [{
            label: '# Leite produzido',
            data: dataPoints,
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
        }]
    };

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
            chartInstance.current = new Chart(ctx, {
                type: chartType,
                data: chartData,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    },
                    onClick: (event, activeElements) => {
                        if (activeElements.length > 0) {
                            const { datasetIndex, index } = activeElements[0];
                            removeData(datasetIndex, index);
                        }
                    },
                    plugins: {
                        tooltip: {
                            mode: 'index',
                            intersect: false
                        },
                        hover: {
                            mode: 'index',
                            intersect: false
                        }
                    }
                }
            });
        }
    }, [chartType, labels, dataPoints]);
    

    const addData = () => {
        const labelInput = document.getElementById('labelInput').value;
        const dataInput = document.getElementById('dataInput').value;

        if (labelInput && !isNaN(dataInput) && dataInput) {
            setLabels(prev => [...prev, labelInput]);
            setDataPoints(prev => [...prev, Number(dataInput)]);
            document.getElementById('labelInput').value = '';
            document.getElementById('dataInput').value = '';
        }
    };

    const updateChartType = (event) => {
        setChartType(event.target.value);
    };

    const removeData = (datasetIndex, index) => {
        if (labels.length > index) {
            setLabels(prev => prev.filter((_, i) => i !== index));
            setDataPoints(prev => prev.filter((_, i) => i !== index));
        }
    };

    return (
        <div className="body">
            <div className="containerGrafico">
                <div className="chart-container">
                <div id="canvasContainer">
                    <canvas style={{ height: '300px', width: '100%' }} ref={chartRef}></canvas>
                </div>
                </div>
                <div className="controls">
                    <select id="chartType" className="select" onChange={updateChartType}>
                        <option value="bar">Barras</option>
                        <option value="line">Linhas</option>
                        <option value="pie">Pizza</option>
                        <option value="doughnut">Rosquinha</option>
                        <option value="radar">Radar</option>
                    </select>
                    <input type="text" id="labelInput" className="input" placeholder="Variável" />
                    <input type="number" id="dataInput" className="input" placeholder="Valor" />
                    <button onClick={addData} className="btn">Adicionar</button>
                </div>
            </div>
        </div>
    );
};

export default Grafico;
