import React, { useEffect, useRef } from 'react';
import { Chart, ArcElement, Tooltip } from 'chart.js';

Chart.register(ArcElement, Tooltip);

const Donut = ({ referenceValue, currentValue, color }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');

    const chartData = {
      labels: ['Atual', 'Espaço'],
      datasets: [
        {
          data: [currentValue, referenceValue - currentValue],
          backgroundColor: [color, 'transparent'],
          hoverBackgroundColor: [`${color}CC`, 'rgba(224, 224, 224, 0.3)'],
          borderWidth: [0, 0],
          borderColor: ['#FFF', '#FFF'],
          borderRadius: [20, 0],
        },
      ],
    };

    const donut = new Chart(ctx, {
      type: 'doughnut',
      data: chartData,
      options: {
        responsive: true,
        cutout: '70%',
        plugins: {
          tooltip: {
            callbacks: {
              label: function(tooltipItem) {
                return tooltipItem.label === 'Atual'
                  ? `${tooltipItem.label}: ${tooltipItem.raw}`
                  : '';
              },
            },
          },
          legend: {
            display: false,
          },
        },
      },
    });

    const drawCenterText = () => {
      ctx.clearRect(0, 0, donut.width, donut.height);
      donut.draw();
      const fontSize = (donut.height / 100).toFixed(2);
      ctx.fillStyle = '#000';
      ctx.font = `${fontSize * 2}px sans-serif`;
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'center';
      ctx.fillText(currentValue, donut.width / 2, donut.height / 2);
    };

    donut.update();
    drawCenterText();

    return () => {
      donut.destroy();
    };
  }, [referenceValue, currentValue, color]);

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default Donut;
