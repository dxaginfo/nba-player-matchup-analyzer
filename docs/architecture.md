# NBA Player Matchup Analyzer - Architecture

This document outlines the architecture and data flow of the NBA Player Matchup Analyzer application.

## Architecture Overview

The application follows a component-based architecture using React and TypeScript. It utilizes React Hooks for state management and React Query for API data fetching and caching.

```
┌─────────────────────────────────────────────────────────────┐
│                         App (Root)                          │
└───────────────────────────────┬─────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────┐
│                       Component Layer                       │
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐   │
│  │ PlayerSearch  │  │ MatchupStats  │  │Visualizations │   │
│  └───────┬───────┘  └───────┬───────┘  └───────┬───────┘   │
│          │                  │                  │           │
│  ┌───────▼───────┐  ┌───────▼───────┐  ┌───────▼───────┐   │
│  │MatchupInsights│  │   Layout     │  │  Common UI    │   │
│  └───────────────┘  └───────────────┘  └───────────────┘   │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                       Services Layer                        │
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐   │
│  │  API Service  │  │    Hooks      │  │Data Transform │   │
│  └───────────────┘  └───────────────┘  └───────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

## Data Flow

1. User searches for and selects two NBA players
2. App fetches matchup data from NBA Stats API
3. Data is transformed and normalized
4. Components render visualizations and statistics
5. Insights are generated based on matchup data

## Component Structure

### PlayerSearch
- **PlayerSearch.tsx**: Main component for searching and selecting players
- **PlayerCard.tsx**: Card component displaying player information

### MatchupStats
- **MatchupOverview.tsx**: Container for matchup statistics
- **StatComparison.tsx**: Tabular comparison of player stats
- **MatchupHistory.tsx**: Recent game history between players

### Visualizations
- **MatchupVisualizations.tsx**: Container for visualization components
- **RadarComparison.tsx**: Radar chart comparing multiple metrics
- **PerformanceChart.tsx**: Line chart showing performance trends

### MatchupInsights
- **MatchupInsights.tsx**: AI-generated insights and observations

## API Integration

The application connects to the NBA Stats API to retrieve:
- Player information and search results
- Head-to-head matchup statistics
- Game logs when players faced each other
- Shot chart data (coordinates and success rate)

## Types and Interfaces

Core data models include:
- **Player**: Basic player information
- **PlayerStats**: Statistical metrics for a player
- **MatchupData**: Complete data for a player matchup
- **GameHistoryItem**: Individual game information
- **ShotChartData**: Shot location and outcome data
- **TrendData**: Time-series performance data

## Visualization Libraries

- **Chart.js**: For standard charts (line, radar)
- **D3.js**: For custom visualizations (shot charts)