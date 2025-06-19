import React from 'react';
import { Player, MatchupData } from '../../types';

interface MatchupInsightsProps {
  player1: Player;
  player2: Player;
  matchupData: MatchupData;
}

const MatchupInsights: React.FC<MatchupInsightsProps> = ({ player1, player2, matchupData }) => {
  // Generate some sample insights based on the data
  const generateInsights = (): string[] => {
    const insights: string[] = [];
    
    // Player 1 vs Player 2 points comparison
    const p1Points = parseFloat(matchupData.stats.player1.points);
    const p2Points = parseFloat(matchupData.stats.player2.points);
    if (p1Points > p2Points) {
      insights.push(`${player1.name} outscores ${player2.name} by an average of ${(p1Points - p2Points).toFixed(1)} points when they match up.`);
    } else if (p2Points > p1Points) {
      insights.push(`${player2.name} has the scoring edge over ${player1.name}, averaging ${(p2Points - p1Points).toFixed(1)} more points in their matchups.`);
    } else {
      insights.push(`${player1.name} and ${player2.name} score at identical rates when facing each other.`);
    }
    
    // Field goal percentage
    const p1Fg = parseFloat(matchupData.stats.player1.fieldGoalPercentage);
    const p2Fg = parseFloat(matchupData.stats.player2.fieldGoalPercentage);
    if (Math.abs(p1Fg - p2Fg) > 5) {
      const betterShooter = p1Fg > p2Fg ? player1.name : player2.name;
      const worseShooter = p1Fg > p2Fg ? player2.name : player1.name;
      insights.push(`${betterShooter} shoots more efficiently against ${worseShooter}, with a ${Math.abs(p1Fg - p2Fg).toFixed(1)}% higher field goal percentage.`);
    }
    
    // Defensive metrics
    const p1DefStats = parseFloat(matchupData.stats.player1.steals) + parseFloat(matchupData.stats.player1.blocks);
    const p2DefStats = parseFloat(matchupData.stats.player2.steals) + parseFloat(matchupData.stats.player2.blocks);
    if (Math.abs(p1DefStats - p2DefStats) > 1) {
      const betterDefender = p1DefStats > p2DefStats ? player1.name : player2.name;
      insights.push(`${betterDefender} has a defensive edge in this matchup, generating more combined steals and blocks.`);
    }
    
    // Game history patterns
    const p1WinCount = matchupData.gameHistory.filter(game => game.result.includes(player1.team)).length;
    const p2WinCount = matchupData.gameHistory.filter(game => game.result.includes(player2.team)).length;
    if (p1WinCount > p2WinCount) {
      insights.push(`${player1.name}'s team has won ${p1WinCount} of the last ${matchupData.gameHistory.length} matchups against ${player2.name}'s team.`);
    } else if (p2WinCount > p1WinCount) {
      insights.push(`${player2.name}'s team has been more successful, winning ${p2WinCount} of the last ${matchupData.gameHistory.length} games in this matchup.`);
    }
    
    // Add a generic insight
    insights.push(`These two players have faced each other ${matchupData.totalGames} times over their careers.`);
    
    return insights;
  };

  const insights = generateInsights();

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Matchup Insights</h2>
      
      <div className="card">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-indigo-100 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold">Key Observations</h3>
        </div>
        
        <div className="space-y-4">
          {insights.map((insight, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="p-1 bg-green-100 rounded-full mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-700">{insight}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            <span className="font-medium">Note:</span> These insights are generated based on the available matchup data and are intended to highlight notable patterns. Advanced analysis may reveal additional trends.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MatchupInsights;
