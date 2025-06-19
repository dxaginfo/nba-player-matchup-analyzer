import React from 'react';
import { Player } from '../../types';

interface PlayerCardProps {
  player: Player;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
      <div className="bg-gradient-to-r from-primary-700 to-primary-600 text-white p-3">
        <div className="flex items-center space-x-3">
          <img 
            src={player.imageUrl} 
            alt={player.name} 
            className="w-14 h-14 rounded-full object-cover border-2 border-white"
          />
          <div>
            <h3 className="font-bold text-lg">{player.name}</h3>
            <p className="text-sm text-primary-200">{player.position} | #{player.jerseyNumber} | {player.team}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
