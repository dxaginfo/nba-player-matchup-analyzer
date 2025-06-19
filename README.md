# NBA Player Matchup Analyzer

A web application for analyzing head-to-head player matchups in NBA games, providing statistical comparisons, visualization tools, and matchup history.

## 🏀 Overview

The NBA Player Matchup Analyzer helps coaches, analysts, and fans understand the performance dynamics between two players when they face each other. This tool provides detailed statistical comparisons and visual insights to identify strengths, weaknesses, and trends in player-to-player matchups.

## ✨ Features

- **Player Search & Selection**: Find and select any two NBA players to analyze their head-to-head matchups
- **Historical Matchup Data**: View comprehensive statistics from all games where the selected players faced each other
- **Statistical Comparison**: Compare key performance metrics including:
  - Points, rebounds, assists per matchup
  - Field goal percentage against each other
  - Plus/minus when sharing the court
  - Defensive metrics (steals, blocks, contested shots)
- **Visualization Tools**:
  - Shot charts showing where players score when matched up
  - Efficiency trends over time
  - Performance radar charts comparing multiple metrics simultaneously
- **Matchup Insights**: AI-powered analysis highlighting key trends and observations from the data

## 🚀 Technologies

- **Frontend**: React, TypeScript, Tailwind CSS
- **Visualization**: D3.js, Chart.js
- **Data Handling**: Axios, React Query
- **State Management**: Context API, React Hooks
- **Public APIs**: [NBA Stats API](https://stats.nba.com/)

## 📋 Project Structure

```
nba-player-matchup-analyzer/
├── public/
│   ├── index.html
│   └── assets/
├── src/
│   ├── components/
│   │   ├── PlayerSearch/
│   │   ├── MatchupStats/
│   │   ├── Visualizations/
│   │   └── MatchupInsights/
│   ├── hooks/
│   │   ├── usePlayerData.ts
│   │   └── useMatchupData.ts
│   ├── services/
│   │   ├── apiService.ts
│   │   └── dataTransformService.ts
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   ├── calculationUtils.ts
│   │   └── formatUtils.ts
│   ├── App.tsx
│   └── index.tsx
├── package.json
└── tsconfig.json
```

## 🛠️ Installation & Setup

1. Clone the repository
   ```bash
   git clone https://github.com/dxaginfo/nba-player-matchup-analyzer.git
   cd nba-player-matchup-analyzer
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm start
   ```

4. Build for production
   ```bash
   npm run build
   ```

## 📱 Usage

1. **Select Players**: Use the search interface to find and select two NBA players
2. **View Matchup Data**: The app will automatically display historical matchup statistics
3. **Analyze Visualizations**: Explore the shot charts, trend graphs, and performance comparisons
4. **Review Insights**: Check the AI-generated insights to understand key patterns in the matchup

## 🌟 Use Cases

- **Coaches & Analysts**: Prepare strategic game plans based on historical matchup performance
- **Fantasy Basketball Players**: Make informed decisions about player matchups for fantasy lineups
- **Sports Journalists**: Access detailed stats for reporting on player rivalries and matchups
- **Basketball Fans**: Explore favorite player matchups with rich statistics and visualizations

## 📈 Future Enhancements

- Video clip integration for key matchup moments
- Advanced defensive metrics and positioning data
- Team context for matchup statistics
- Machine learning predictions for upcoming matchups
- Mobile app version with responsive design

## ⚖️ License

MIT

## 🙏 Acknowledgements

- NBA Stats API for providing access to valuable basketball data
- The basketball analytics community for inspiration and methodologies