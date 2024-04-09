import { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto'; // Importa Chart desde 'chart.js/auto' para asegurar que incluye todas las funcionalidades
import { ref, onValue, off } from 'firebase/database';
import { database } from '../controllers/database';

export default function GraphComponent() {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      // Destruye el gráfico existente si existe
      if (chartRef.current) {
        chartRef.current.destroy();
      }
      // Inicializa el nuevo gráfico
      chartRef.current = new Chart(canvasRef.current, {
        type: 'line',
        data: {
          labels: [],
          datasets: [{
            label: 'Humidity %',
            data: [],
            fill: false,
            borderColor: 'rgb(51, 104, 255)',
            tension: 0.1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
           
          }
        }
      });
      // Escucha los cambios en la base de datos de Firebase
      const sensorRef = ref(database, 'DHT_112');
      onValue(sensorRef, (snapshot) => {
        const data = snapshot.val();
        if (data && data.hasOwnProperty('humidity')) {
            const humidity = data['humidity'];
            const hour = getCurrentHour();
          addDataToChart(chartRef.current, hour, humidity);
        }
      });
      // Función para agregar datos al gráfico
      function addDataToChart(chart, label, data) {
        chart.data.labels.push(label);
        chart.data.datasets.forEach((dataset) => {
          dataset.data.push(data);
        });
        chart.update();
      }
      //Funcion para obtener la hora actual 
      function getCurrentHour(){
        const now =new Date();
        const hour = now.getHours();
        const minute = now.getMinutes();
        return `${hour}:${minute}`;
      }
      return () => {
        // Limpia los listeners de Firebase cuando el componente se desmonta
        off(sensorRef);
      };
    }
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} id="chartHumidity"></canvas>
    </div>
  );
}
