import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import './GraphView.css';

const GraphView = () => {
  useEffect(() => {
    const pieCanvas = document.getElementById('pieChart');
    const pieContext = pieCanvas.getContext('2d');
    const pieData = [3, 5, 2, 2]; // Placeholder data (replace with actual data)
    const pieLabels = ['Missing FE', 'Safe FE', 'Maintenance', 'Low Battery']; // Placeholder labels

    drawPieChart(pieContext, pieData, pieLabels);
  }, []);

  const drawPieChart = (context, data, labels) => {
    new Chart(context, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'], // Customize colors as needed
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, // Set to false to allow custom size
        plugins: {
          legend: {
            labels: {
              font: {
                size: 15, // Set the font size
              },
              color: '#FFFFFF', // Set the font color
            },
          },
        },
      },
    });
  };

  return (
    <div className="Main-class">
      <h1>Fire Extinguisher Data</h1>
      <div className="canvas-container">
        <canvas id="pieChart" width="400" height="400"></canvas>
      </div>
    </div>
  );
};

export default GraphView;





