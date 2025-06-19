import React, { useEffect, useRef } from 'react';
import { Player, PlayerStats } from '../../types';
import Chart from 'chart.js/auto';

interface RadarComparisonProps {
  player1: Player;
  player2: Player;
  stats: {
    player1: PlayerStats;
    player2: PlayerStats;
  };
}

const RadarComparison: React.FC<RadarComparisonProps> = ({ player1, player2, stats }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      // Clean up previous chart if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      if (!ctx) return;

      // Normalize data to 0-10 scale for better visualization
      const normalizeValue = (value: string, max: number): number => {
        return (parseFloat(value) / max) * 10;
      };

      // Set max values for normalization (could be adjusted based on real data ranges)
      const maxValues = {
        points: 30,
        rebounds: 15,
        assists: 15,
        steals: 3,
        blocks: 3,
        fieldGoalPercentage: 100
      };

      // Parse data to numbers and normalize
      const data1 = [
        normalizeValue(stats.player1.points, maxValues.points),
        normalizeValue(stats.player1.rebounds, maxValues.rebounds),
        normalizeValue(stats.player1.assists, maxValues.assists),
        normalizeValue(stats.player1.steals, maxValues.steals),
        normalizeValue(stats.player1.blocks, maxValues.blocks),
        normalizeValue(stats.player1.fieldGoalPercentage, maxValues.fieldGoalPercentage)
      ];

      const data2 = [
        normalizeValue(stats.player2.points, maxValues.points),
        normalizeValue(stats.player2.rebounds, maxValues.rebounds),
        normalizeValue(stats.player2.assists, maxValues.assists),
        normalizeValue(stats.player2.steals, maxValues.steals),
        normalizeValue(stats.player2.blocks, maxValues.blocks),
        normalizeValue(stats.player2.fieldGoalPercentage, maxValues.fieldGoalPercentage)
      ];

      chartInstance.current = new Chart(ctx, {
        type: 'radar',
        data: {
          labels: ['Points', 'Rebounds', 'Assists', 'Steals', 'Blocks', 'FG%'],
          datasets: [
            {
              label: player1.name,
              data: data1,
              backgroundColor: 'rgba(14, 165, 233, 0.2)',
              borderColor: 'rgb(14, 165, 233)',
              pointBackgroundColor: 'rgb(14, 165, 233)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(14, 165, 233)'
            },
            {
              label: player2.name,
              data: data2,
              backgroundColor: 'rgba(139, 92, 246, 0.2)',
              borderColor: 'rgb(139, 92, 246)',
              pointBackgroundColor: 'rgb(139, 92, 246)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(139, 92, 246)'
            }
          ]
        },
        options: {
          scales: {
            r: {
              min: 0,
              max: 10,
              ticks: {
                stepSize: 2,
                display: false
              },
              pointLabels: {
                font: {
                  weight: 'bold'
                }
              }
            }
          },
          plugins: {
            legend: {
              position: 'top',
              labels: {
                usePointStyle: true,
                boxWidth: 6
              }
            },
            tooltip: {
              callbacks: {
                label: function(context) {
                  const value = context.raw as number;
                  const index = context.dataIndex;
                  const maxValue = Object.values(maxValues)[index];
                  const actualValue = (value / 10) * maxValue;
                  
                  // Format the tooltip value based on the metric
                  const label = context.dataset.label || '';
                  if (index === 5) { // FG%
                    return `${label}: ${actualValue.toFixed(1)}%`;
                  } else { // other stats
                    return `${label}: ${actualValue.toFixed(1)}`;
                  }
                }
              }
            }
          },
          responsive: true,
          maintainAspectRatio: false
        }
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [player1, player2, stats]);

  return (
    <div className="w-full h-full">
      <canvas ref={chartRef} />
    </div>
  );
};

export default RadarComparison;
