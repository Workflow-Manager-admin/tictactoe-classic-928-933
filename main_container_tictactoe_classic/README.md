# Tic Tac Toe Classic

A modern implementation of the classic Tic Tac Toe game built with React.

## Features

- 🎮 Classic 3x3 grid gameplay with X and O marks
- 🏆 Win detection with line highlighting
- 🎉 Confetti celebration for winners
- 🔊 Sound effects for moves, wins, and draws
- ⏪ Game history navigation to revisit moves
- 📱 Responsive design for all screen sizes
- 🎨 Modern UI with Kavia theme styling
- 📖 Game instructions for new players

## Screenshots

![Tic Tac Toe Classic Game](screenshot.png)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Install the dependencies:

```bash
npm install
```

### Running the App

To start the development server:

```bash
npm start
```

The app will be available at http://localhost:3000

### Building for Production

To create a production build:

```bash
npm run build
```

## How to Play

1. The game is played on a 3×3 grid
2. Players take turns placing their marks (X or O) on the grid
3. The first player to get 3 of their marks in a row (horizontally, vertically, or diagonally) wins
4. If all squares are filled and no player has 3 in a row, the game is a draw
5. Use the history buttons to go back to previous moves
6. Click "Reset Game" to start over

## Game Features Explained

### Game State Management

The game state is managed using React Hooks, with a custom `useTicTacToe` hook that encapsulates all the game logic:

- Current board state
- Player turns
- Move history
- Win detection
- Game reset functionality

### Special Effects

- **Sound Effects**: Unique sounds for X moves, O moves, wins, and draws using the Web Audio API
- **Winning Animation**: Pulsing animation on the winning line of squares
- **Confetti**: Celebration effect when a player wins
- **Color Coding**: X and O have distinct colors for better visibility

## Code Structure

- `/src/components` - React components for the game UI
- `/src/hooks` - Custom React hooks for game logic
- `/src/utils` - Utility functions and classes (like Sound effects)

## Technologies Used

- React (Hooks)
- CSS3 (Animations, Flexbox)
- Web Audio API (for sound effects)

## License

MIT

## Acknowledgments

- Built for Kavia AI
- Inspired by the classic game of Tic Tac Toe
