# NBA Player Matchup Analyzer - Setup Guide

This guide provides detailed instructions for setting up and running the NBA Player Matchup Analyzer application.

## Prerequisites

Before starting, ensure you have the following installed:

- **Node.js** (version 14.x or higher)
- **npm** (version 6.x or higher) or **yarn** (version 1.22.x or higher)
- A modern web browser (Chrome, Firefox, Safari, or Edge)

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/dxaginfo/nba-player-matchup-analyzer.git
cd nba-player-matchup-analyzer
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

### 3. Configure Environment Variables (Optional)

Create a `.env` file in the project root directory and add any required API keys or configuration values.

```
REACT_APP_API_URL=https://api.example.com
REACT_APP_API_KEY=your_api_key_here
```

Note: In the current version, the application uses mock data for demonstration purposes, so no API keys are required.

### 4. Start the Development Server

Using npm:
```bash
npm start
```

Or using yarn:
```bash
yarn start
```

This will start the development server at [http://localhost:3000](http://localhost:3000).

### 5. Build for Production

When you're ready to deploy the application, you can create an optimized production build:

Using npm:
```bash
npm run build
```

Or using yarn:
```bash
yarn build
```

This will create a `build` directory with optimized files ready for deployment.

## Project Structure

The project follows a standard React application structure:

```
nba-player-matchup-analyzer/
├── public/              # Static files
├── src/                 # Source code
│   ├── components/      # React components
│   ├── hooks/           # Custom React hooks
│   ├── services/        # API and data services
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions
│   ├── App.tsx          # Main application component
│   └── index.tsx        # Application entry point
├── docs/                # Documentation
├── package.json         # Project dependencies and scripts
└── tsconfig.json        # TypeScript configuration
```

## Customization

### Theme Customization

You can customize the application's colors and styles by modifying the `tailwind.config.js` file. This file contains the primary and secondary color palettes used throughout the application.

### API Integration

The current version uses mock data for demonstration. To integrate with real NBA data:

1. Update the API endpoints in `src/services/apiService.ts`
2. Adjust the data transformation logic in `src/services/dataTransformService.ts`
3. Update the API call implementation in the relevant hooks

## Troubleshooting

### Common Issues

1. **Module not found errors**
   - Solution: Run `npm install` or `yarn install` to ensure all dependencies are installed

2. **TypeScript errors**
   - Solution: Check the error message for details on the type issue. You might need to update type definitions in the `src/types` directory.

3. **API connection issues**
   - Solution: Verify your API keys and connection settings in the `.env` file

### Getting Help

If you encounter any issues or have questions, please:

1. Check the [GitHub repository issues](https://github.com/dxaginfo/nba-player-matchup-analyzer/issues) for existing solutions
2. Open a new issue if your problem hasn't been addressed

## Next Steps

After setting up the application, you can:

1. Explore the codebase to understand the implementation
2. Modify the UI components to match your preferences
3. Integrate with a real NBA statistics API for live data
4. Add additional visualizations or insights