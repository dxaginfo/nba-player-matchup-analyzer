import React, { useState } from 'react';
import { Player, MatchupData } from '../../types';
import PerformanceChart from './PerformanceChart';
import RadarComparison from './RadarComparison';

interface MatchupVisualizationsProps {
  player1: Player;
  player2: Player;
  matchupData: MatchupData;
}

const MatchupVisualizations: React.FC<MatchupVisualizationsProps> = ({ player1, player2, matchupData }) => {
  const [activeTab, setActiveTab] = useState<string>('radar');
  
  // Generate sample trend data for demonstration
  const generateTrendData = (key: string) => {
    return {
      player1: matchupData.gameHistory.map(game => ({
        gameDate: game.date,
        value: key === 'points' ? game.player1Stats.points : Math.random() * 10
      })),
      player2: matchupData.gameHistory.map(game => ({
        gameDate: game.date,
        value: key === 'points' ? game.player2Stats.points : Math.random() * 10
      })),
      metric: key
    };
  };

  const pointsTrend = generateTrendData('points');
  const fgPercentageTrend = generateTrendData('fieldGoalPercentage');
  
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Performance Visualizations</h2>
      
      <div className="card">
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-6">
            <button
              className={`pb-4 font-medium text-sm transition-colors ${activeTab === 'radar' ? 'border-b-2 border-primary-600 text-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('radar')}
            >
              Radar Comparison
            </button>
            <button
              className={`pb-4 font-medium text-sm transition-colors ${activeTab === 'points' ? 'border-b-2 border-primary-600 text-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('points')}
            >
              Points Trend
            </button>
            <button
              className={`pb-4 font-medium text-sm transition-colors ${activeTab === 'fg' ? 'border-b-2 border-primary-600 text-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('fg')}
            >
              FG% Trend
            </button>
          </nav>
        </div>
        
        <div className="w-full h-80">
          {activeTab === 'radar' && (
            <RadarComparison 
              player1={player1}
              player2={player2}
              stats={matchupData.stats}
            />
          )}
          
          {activeTab === 'points' && (
            <PerformanceChart 
              player1={player1}
              player2={player2}
              trendData={pointsTrend}
              title="Points Scored Per Matchup"
            />
          )}
          
          {activeTab === 'fg' && (
            <PerformanceChart 
              player1={player1}
              player2={player2}
              trendData={fgPercentageTrend}
              title="Field Goal Percentage Per Matchup"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default MatchupVisualizations;
