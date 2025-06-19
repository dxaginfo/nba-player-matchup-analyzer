import React, { useEffect, useRef } from 'react';
import { Player, TrendData } from '../../types';
import Chart from 'chart.js/auto';

interface PerformanceChartProps {
  player1: Player;
  player2: Player;
  trendData: TrendData;
  title: string;
}

const PerformanceChart: React.FC<PerformanceChartProps> = ({ player1, player2, trendData, title }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  // Format date to readable format
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: '2-digit' });
  };

  useEffect(() => {
    if (chartRef.current) {
      // Clean up previous chart if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      if (!ctx) return;

      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: trendData.player1.map(data => formatDate(data.gameDate)),
          datasets: [
            {
              label: player1.name,
              data: trendData.player1.map(data => data.value),
              borderColor: 'rgb(14, 165, 233)',
              backgroundColor: 'rgba(14, 165, 233, 0.1)',
              borderWidth: 2,
              tension: 0.3,
              fill: false,
              pointBackgroundColor: 'rgb(14, 165, 233)',
              pointRadius: 4,
              pointHoverRadius: 6
            },
            {
              label: player2.name,
              data: trendData.player2.map(data => data.value),
              borderColor: 'rgb(139, 92, 246)',
              backgroundColor: 'rgba(139, 92, 246, 0.1)',
              borderWidth: 2,
              tension: 0.3,
              fill: false,
              pointBackgroundColor: 'rgb(139, 92, 246)',
              pointRadius: 4,
              pointHoverRadius: 6
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
              labels: {
                usePointStyle: true,
                boxWidth: 6
              }
            },
            title: {
              display: true,
              text: title,
              font: {
                size: 16
              }
            }
          },
          scales: {
            x: {
              grid: {
                display: false
              },
              title: {
                display: true,
                text: 'Game Date'
              }
            },
            y: {
              beginAtZero: true,
              grid: {
                color: 'rgba(0, 0, 0, 0.05)'
              },
              title: {
                display: true,
                text: trendData.metric === 'points' ? 'Points' : 
                      trendData.metric === 'fieldGoalPercentage' ? 'Field Goal %' : trendData.metric
              }
            }
          }
        }
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [player1, player2, trendData, title]);

  return (
    <div className="w-full h-full">
      <canvas ref={chartRef} />
    </div>
  );
};

export default PerformanceChart;
