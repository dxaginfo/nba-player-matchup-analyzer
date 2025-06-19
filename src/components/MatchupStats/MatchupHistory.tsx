import React from 'react';
import { Player, GameHistoryItem } from '../../types';

interface MatchupHistoryProps {
  player1: Player;
  player2: Player;
  gameHistory: GameHistoryItem[];
}

const MatchupHistory: React.FC<MatchupHistoryProps> = ({ player1, player2, gameHistory }) => {
  // Format date string
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <div className="space-y-4">
      {gameHistory.length === 0 ? (
        <p className="text-gray-500">No recent matchup history available.</p>
      ) : (
        gameHistory.map((game, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">{formatDate(game.date)}</span>
              <span className="text-xs bg-gray-100 rounded-full px-2 py-1">{game.result}</span>
            </div>
            
            <div className="flex justify-between">
              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-600">{player1.team}</span>
                <div className="flex items-center space-x-1">
                  <img 
                    src={player1.imageUrl} 
                    alt={player1.name} 
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-sm font-medium">{player1.name}</span>
                </div>
                <span className="text-lg font-bold mt-1">{game.player1Stats.points}</span>
                <span className="text-xs text-gray-500">{game.player1Stats.minutes} min</span>
              </div>
              
              <div className="text-lg font-bold self-center">vs</div>
              
              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-600">{player2.team}</span>
                <div className="flex items-center space-x-1">
                  <img 
                    src={player2.imageUrl} 
                    alt={player2.name} 
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-sm font-medium">{player2.name}</span>
                </div>
                <span className="text-lg font-bold mt-1">{game.player2Stats.points}</span>
                <span className="text-xs text-gray-500">{game.player2Stats.minutes} min</span>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MatchupHistory;
