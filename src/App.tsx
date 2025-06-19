import React, { useState } from 'react';
import Header from './components/layout/Header';
import PlayerSearch from './components/PlayerSearch/PlayerSearch';
import MatchupOverview from './components/MatchupStats/MatchupOverview';
import MatchupVisualizations from './components/Visualizations/MatchupVisualizations';
import MatchupInsights from './components/MatchupInsights/MatchupInsights';
import { Player, MatchupData } from './types';

function App() {
  const [player1, setPlayer1] = useState<Player | null>(null);
  const [player2, setPlayer2] = useState<Player | null>(null);
  const [matchupData, setMatchupData] = useState<MatchupData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handlePlayersSelected = (p1: Player, p2: Player) => {
    setPlayer1(p1);
    setPlayer2(p2);
    setIsLoading(true);
    
    // In a real implementation, we would fetch matchup data here
    // For demo purposes, we'll set some sample data after a delay
    setTimeout(() => {
      setMatchupData(generateSampleMatchupData(p1, p2));
      setIsLoading(false);
    }, 1500);
  };

  // Sample data generator for demonstration purposes
  const generateSampleMatchupData = (p1: Player, p2: Player): MatchupData => {
    return {
      totalGames: Math.floor(Math.random() * 20) + 5,
      stats: {
        player1: {
          points: (Math.random() * 15 + 10).toFixed(1),
          rebounds: (Math.random() * 5 + 3).toFixed(1),
          assists: (Math.random() * 4 + 2).toFixed(1),
          steals: (Math.random() * 1.5).toFixed(1),
          blocks: (Math.random() * 1).toFixed(1),
          fieldGoalPercentage: (Math.random() * 20 + 40).toFixed(1),
          plusMinus: (Math.random() * 10 - 5).toFixed(1),
        },
        player2: {
          points: (Math.random() * 15 + 10).toFixed(1),
          rebounds: (Math.random() * 5 + 3).toFixed(1),
          assists: (Math.random() * 4 + 2).toFixed(1),
          steals: (Math.random() * 1.5).toFixed(1),
          blocks: (Math.random() * 1).toFixed(1),
          fieldGoalPercentage: (Math.random() * 20 + 40).toFixed(1),
          plusMinus: (Math.random() * 10 - 5).toFixed(1),
        }
      },
      gameHistory: Array.from({ length: 5 }, (_, i) => ({
        date: `2024-${(Math.floor(Math.random() * 12) + 1).toString().padStart(2, '0')}-${(Math.floor(Math.random() * 28) + 1).toString().padStart(2, '0')}`,
        player1Team: p1.team,
        player2Team: p2.team,
        player1Stats: {
          points: Math.floor(Math.random() * 30) + 5,
          minutes: Math.floor(Math.random() * 15) + 25,
        },
        player2Stats: {
          points: Math.floor(Math.random() * 30) + 5,
          minutes: Math.floor(Math.random() * 15) + 25,
        },
        result: Math.random() > 0.5 ? `${p1.team} WIN` : `${p2.team} WIN`
      }))
    };
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <PlayerSearch onPlayersSelected={handlePlayersSelected} />
        
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-600"></div>
          </div>
        )}
        
        {!isLoading && matchupData && player1 && player2 && (
          <div className="space-y-8 mt-8">
            <MatchupOverview 
              player1={player1} 
              player2={player2} 
              matchupData={matchupData} 
            />
            
            <MatchupVisualizations 
              player1={player1}
              player2={player2}
              matchupData={matchupData}
            />
            
            <MatchupInsights 
              player1={player1}
              player2={player2}
              matchupData={matchupData}
            />
          </div>
        )}
      </main>
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 NBA Player Matchup Analyzer | Not affiliated with the NBA</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
