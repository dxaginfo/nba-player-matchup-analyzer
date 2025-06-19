// Player type definitions
export interface Player {
  id: string;
  name: string;
  position: string;
  team: string;
  imageUrl: string;
  jerseyNumber: string;
}

// Player statistics
export interface PlayerStats {
  points: string;
  rebounds: string;
  assists: string;
  steals: string;
  blocks: string;
  fieldGoalPercentage: string;
  plusMinus: string;
}

// Game history item
export interface GameHistoryItem {
  date: string;
  player1Team: string;
  player2Team: string;
  player1Stats: {
    points: number;
    minutes: number;
  };
  player2Stats: {
    points: number;
    minutes: number;
  };
  result: string;
}

// Complete matchup data
export interface MatchupData {
  totalGames: number;
  stats: {
    player1: PlayerStats;
    player2: PlayerStats;
  };
  gameHistory: GameHistoryItem[];
}

// Shot chart data type
export interface ShotChartData {
  x: number;
  y: number;
  made: boolean;
  value: number; // 2 or 3 points
  playerId: string;
}

// Performance trend point
export interface TrendPoint {
  gameDate: string;
  value: number;
}

// Performance trend data
export interface TrendData {
  player1: TrendPoint[];
  player2: TrendPoint[];
  metric: string; // e.g., "points", "fieldGoalPercentage"
}
