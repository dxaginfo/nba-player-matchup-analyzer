import React from 'react';
import { Player, MatchupData } from '../../types';
import StatComparison from './StatComparison';
import MatchupHistory from './MatchupHistory';

interface MatchupOverviewProps {
  player1: Player;
  player2: Player;
  matchupData: MatchupData;
}

const MatchupOverview: React.FC<MatchupOverviewProps> = ({ player1, player2, matchupData }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Matchup Overview</h2>
      
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-2/3">
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">Head-to-Head Comparison</h3>
            <p className="text-gray-600 mb-6">
              Based on {matchupData.totalGames} games where {player1.name} and {player2.name} matched up against each other.
            </p>
            
            <StatComparison 
              player1={player1}
              player2={player2}
              stats={matchupData.stats}
            />
          </div>
        </div>
        
        <div className="lg:w-1/3">
          <div className="card h-full">
            <h3 className="text-xl font-semibold mb-4">Recent Matchups</h3>
            <MatchupHistory 
              player1={player1}
              player2={player2}
              gameHistory={matchupData.gameHistory}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatchupOverview;
