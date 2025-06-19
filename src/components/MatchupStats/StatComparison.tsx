import React from 'react';
import { Player, PlayerStats } from '../../types';

interface StatComparisonProps {
  player1: Player;
  player2: Player;
  stats: {
    player1: PlayerStats;
    player2: PlayerStats;
  };
}

const StatComparison: React.FC<StatComparisonProps> = ({ player1, player2, stats }) => {
  // Helper function to determine which player has better stats for a given metric
  const getBetterPlayer = (stat1: string, stat2: string, isHigherBetter: boolean = true): number => {
    const val1 = parseFloat(stat1);
    const val2 = parseFloat(stat2);
    
    if (val1 === val2) return 0;
    return isHigherBetter ? (val1 > val2 ? 1 : 2) : (val1 < val2 ? 1 : 2);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stat</th>
            <th className="px-4 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">{player1.name}</th>
            <th className="px-4 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">{player2.name}</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {/* Points */}
          <tr>
            <td className="px-4 py-4 text-sm font-medium text-gray-900">Points</td>
            <td className={`px-4 py-4 text-sm text-center ${getBetterPlayer(stats.player1.points, stats.player2.points) === 1 ? 'font-bold text-primary-600' : ''}`}>
              {stats.player1.points}
            </td>
            <td className={`px-4 py-4 text-sm text-center ${getBetterPlayer(stats.player1.points, stats.player2.points) === 2 ? 'font-bold text-primary-600' : ''}`}>
              {stats.player2.points}
            </td>
          </tr>
          
          {/* Rebounds */}
          <tr>
            <td className="px-4 py-4 text-sm font-medium text-gray-900">Rebounds</td>
            <td className={`px-4 py-4 text-sm text-center ${getBetterPlayer(stats.player1.rebounds, stats.player2.rebounds) === 1 ? 'font-bold text-primary-600' : ''}`}>
              {stats.player1.rebounds}
            </td>
            <td className={`px-4 py-4 text-sm text-center ${getBetterPlayer(stats.player1.rebounds, stats.player2.rebounds) === 2 ? 'font-bold text-primary-600' : ''}`}>
              {stats.player2.rebounds}
            </td>
          </tr>
          
          {/* Assists */}
          <tr>
            <td className="px-4 py-4 text-sm font-medium text-gray-900">Assists</td>
            <td className={`px-4 py-4 text-sm text-center ${getBetterPlayer(stats.player1.assists, stats.player2.assists) === 1 ? 'font-bold text-primary-600' : ''}`}>
              {stats.player1.assists}
            </td>
            <td className={`px-4 py-4 text-sm text-center ${getBetterPlayer(stats.player1.assists, stats.player2.assists) === 2 ? 'font-bold text-primary-600' : ''}`}>
              {stats.player2.assists}
            </td>
          </tr>
          
          {/* Steals */}
          <tr>
            <td className="px-4 py-4 text-sm font-medium text-gray-900">Steals</td>
            <td className={`px-4 py-4 text-sm text-center ${getBetterPlayer(stats.player1.steals, stats.player2.steals) === 1 ? 'font-bold text-primary-600' : ''}`}>
              {stats.player1.steals}
            </td>
            <td className={`px-4 py-4 text-sm text-center ${getBetterPlayer(stats.player1.steals, stats.player2.steals) === 2 ? 'font-bold text-primary-600' : ''}`}>
              {stats.player2.steals}
            </td>
          </tr>
          
          {/* Blocks */}
          <tr>
            <td className="px-4 py-4 text-sm font-medium text-gray-900">Blocks</td>
            <td className={`px-4 py-4 text-sm text-center ${getBetterPlayer(stats.player1.blocks, stats.player2.blocks) === 1 ? 'font-bold text-primary-600' : ''}`}>
              {stats.player1.blocks}
            </td>
            <td className={`px-4 py-4 text-sm text-center ${getBetterPlayer(stats.player1.blocks, stats.player2.blocks) === 2 ? 'font-bold text-primary-600' : ''}`}>
              {stats.player2.blocks}
            </td>
          </tr>
          
          {/* FG% */}
          <tr>
            <td className="px-4 py-4 text-sm font-medium text-gray-900">FG%</td>
            <td className={`px-4 py-4 text-sm text-center ${getBetterPlayer(stats.player1.fieldGoalPercentage, stats.player2.fieldGoalPercentage) === 1 ? 'font-bold text-primary-600' : ''}`}>
              {stats.player1.fieldGoalPercentage}%
            </td>
            <td className={`px-4 py-4 text-sm text-center ${getBetterPlayer(stats.player1.fieldGoalPercentage, stats.player2.fieldGoalPercentage) === 2 ? 'font-bold text-primary-600' : ''}`}>
              {stats.player2.fieldGoalPercentage}%
            </td>
          </tr>
          
          {/* Plus/Minus */}
          <tr>
            <td className="px-4 py-4 text-sm font-medium text-gray-900">Plus/Minus</td>
            <td className={`px-4 py-4 text-sm text-center ${getBetterPlayer(stats.player1.plusMinus, stats.player2.plusMinus) === 1 ? 'font-bold text-primary-600' : ''}`}>
              {parseFloat(stats.player1.plusMinus) > 0 ? '+' : ''}{stats.player1.plusMinus}
            </td>
            <td className={`px-4 py-4 text-sm text-center ${getBetterPlayer(stats.player1.plusMinus, stats.player2.plusMinus) === 2 ? 'font-bold text-primary-600' : ''}`}>
              {parseFloat(stats.player2.plusMinus) > 0 ? '+' : ''}{stats.player2.plusMinus}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StatComparison;
