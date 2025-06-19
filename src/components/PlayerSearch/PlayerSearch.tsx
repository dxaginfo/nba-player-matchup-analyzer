import React, { useState, useEffect } from 'react';
import { Player } from '../../types';
import PlayerCard from './PlayerCard';

interface PlayerSearchProps {
  onPlayersSelected: (player1: Player, player2: Player) => void;
}

const PlayerSearch: React.FC<PlayerSearchProps> = ({ onPlayersSelected }) => {
  const [searchQuery1, setSearchQuery1] = useState<string>('');
  const [searchQuery2, setSearchQuery2] = useState<string>('');
  const [searchResults1, setSearchResults1] = useState<Player[]>([]);
  const [searchResults2, setSearchResults2] = useState<Player[]>([]);
  const [selectedPlayer1, setSelectedPlayer1] = useState<Player | null>(null);
  const [selectedPlayer2, setSelectedPlayer2] = useState<Player | null>(null);
  const [isLoading1, setIsLoading1] = useState<boolean>(false);
  const [isLoading2, setIsLoading2] = useState<boolean>(false);

  // Sample data for demonstration
  const samplePlayers: Player[] = [
    {
      id: '1',
      name: 'LeBron James',
      position: 'SF',
      team: 'LAL',
      imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
      jerseyNumber: '23'
    },
    {
      id: '2',
      name: 'Stephen Curry',
      position: 'PG',
      team: 'GSW',
      imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png',
      jerseyNumber: '30'
    },
    {
      id: '3',
      name: 'Kevin Durant',
      position: 'SF',
      team: 'PHX',
      imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png',
      jerseyNumber: '35'
    },
    {
      id: '4',
      name: 'Giannis Antetokounmpo',
      position: 'PF',
      team: 'MIL',
      imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203507.png',
      jerseyNumber: '34'
    },
    {
      id: '5',
      name: 'Luka Doncic',
      position: 'PG',
      team: 'DAL',
      imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629029.png',
      jerseyNumber: '77'
    },
    {
      id: '6',
      name: 'Nikola Jokic',
      position: 'C',
      team: 'DEN',
      imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203999.png',
      jerseyNumber: '15'
    }
  ];

  // Simulate search API calls
  const searchPlayers = (query: string): Promise<Player[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const results = samplePlayers.filter(player =>
          player.name.toLowerCase().includes(query.toLowerCase())
        );
        resolve(results);
      }, 500);
    });
  };

  useEffect(() => {
    const handleSearch = async () => {
      if (searchQuery1.length < 2) {
        setSearchResults1([]);
        return;
      }
      
      setIsLoading1(true);
      const results = await searchPlayers(searchQuery1);
      setSearchResults1(results);
      setIsLoading1(false);
    };
    
    const timeoutId = setTimeout(handleSearch, 300);
    return () => clearTimeout(timeoutId);
  }, [searchQuery1]);
  
  useEffect(() => {
    const handleSearch = async () => {
      if (searchQuery2.length < 2) {
        setSearchResults2([]);
        return;
      }
      
      setIsLoading2(true);
      const results = await searchPlayers(searchQuery2);
      setSearchResults2(results);
      setIsLoading2(false);
    };
    
    const timeoutId = setTimeout(handleSearch, 300);
    return () => clearTimeout(timeoutId);
  }, [searchQuery2]);

  const handlePlayerSelect = (player: Player, searchIndex: number) => {
    if (searchIndex === 1) {
      setSelectedPlayer1(player);
      setSearchResults1([]);
      setSearchQuery1('');
    } else {
      setSelectedPlayer2(player);
      setSearchResults2([]);
      setSearchQuery2('');
    }
  };

  const handleCompare = () => {
    if (selectedPlayer1 && selectedPlayer2) {
      onPlayersSelected(selectedPlayer1, selectedPlayer2);
    }
  };

  return (
    <div className="card">
      <h2 className="text-2xl font-bold mb-6">Select Players to Compare</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Player 1 Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Player 1
          </label>
          <div className="relative">
            <input
              type="text"
              className="input-field"
              placeholder="Search for a player..."
              value={searchQuery1}
              onChange={(e) => setSearchQuery1(e.target.value)}
              disabled={!!selectedPlayer1}
            />
            
            {isLoading1 && (
              <div className="absolute right-3 top-3">
                <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-primary-600"></div>
              </div>
            )}
            
            {searchResults1.length > 0 && !selectedPlayer1 && (
              <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md border border-gray-200 max-h-60 overflow-auto">
                {searchResults1.map((player) => (
                  <div 
                    key={player.id}
                    className="p-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2"
                    onClick={() => handlePlayerSelect(player, 1)}
                  >
                    <img 
                      src={player.imageUrl} 
                      alt={player.name} 
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">{player.name}</p>
                      <p className="text-xs text-gray-500">{player.position} | {player.team}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {selectedPlayer1 && (
            <div className="mt-4">
              <PlayerCard player={selectedPlayer1} />
              <button 
                className="mt-2 text-sm text-red-600 hover:text-red-800"
                onClick={() => setSelectedPlayer1(null)}
              >
                Clear Selection
              </button>
            </div>
          )}
        </div>
        
        {/* Player 2 Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Player 2
          </label>
          <div className="relative">
            <input
              type="text"
              className="input-field"
              placeholder="Search for a player..."
              value={searchQuery2}
              onChange={(e) => setSearchQuery2(e.target.value)}
              disabled={!!selectedPlayer2}
            />
            
            {isLoading2 && (
              <div className="absolute right-3 top-3">
                <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-primary-600"></div>
              </div>
            )}
            
            {searchResults2.length > 0 && !selectedPlayer2 && (
              <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md border border-gray-200 max-h-60 overflow-auto">
                {searchResults2.map((player) => (
                  <div 
                    key={player.id}
                    className="p-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2"
                    onClick={() => handlePlayerSelect(player, 2)}
                  >
                    <img 
                      src={player.imageUrl} 
                      alt={player.name} 
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">{player.name}</p>
                      <p className="text-xs text-gray-500">{player.position} | {player.team}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {selectedPlayer2 && (
            <div className="mt-4">
              <PlayerCard player={selectedPlayer2} />
              <button 
                className="mt-2 text-sm text-red-600 hover:text-red-800"
                onClick={() => setSelectedPlayer2(null)}
              >
                Clear Selection
              </button>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <button
          className="btn-primary w-full md:w-auto"
          disabled={!selectedPlayer1 || !selectedPlayer2}
          onClick={handleCompare}
        >
          Compare Matchup
        </button>
        {(!selectedPlayer1 || !selectedPlayer2) && (
          <p className="mt-2 text-sm text-gray-500">Please select two players to compare</p>
        )}
      </div>
    </div>
  );
};

export default PlayerSearch;
