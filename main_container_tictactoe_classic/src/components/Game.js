import React from 'react';
import Board from './Board';
import GameStatus from './GameStatus';
import PlayerInfo from './PlayerInfo';
import Confetti from './Confetti';
import useTicTacToe from '../hooks/useTicTacToe';

// PUBLIC_INTERFACE
/**
 * Game component manages the state and logic for the TicTacToe game.
 * @returns {JSX.Element} The rendered Game component
 */
function Game() {
  // Use the TicTacToe custom hook
  const {
    history,
    current,
    xIsNext,
    stepNumber,
    winner,
    line,
    status,
    handleClick,
    jumpTo,
    resetGame
  } = useTicTacToe();
  
  // Create move history buttons
  const moves = history.map((_, move) => {
    const desc = move ?
      `Go to move #${move}` :
      'Go to game start';
    return (
      <li key={move}>
        <button 
          className={`history-button ${stepNumber === move ? 'current-step' : ''}`}
          onClick={() => jumpTo(move)}
        >
          {desc}
        </button>
      </li>
    );
  });
  
  return (
    <div className="game">
      <h1 className="title">Tic Tac Toe Classic</h1>
      <div className="game-content">
        <div className="game-board">
          {!winner && !current.squares.every(square => square !== null) && (
            <PlayerInfo xIsNext={xIsNext} />
          )}
          <Board 
            squares={current.squares} 
            onClick={handleClick}
            winningLine={line}
          />
        </div>
        <div className="game-info">
          <GameStatus 
            status={status} 
            isWinner={!!winner} 
          />
          <button className="btn reset-button" onClick={resetGame}>
            Reset Game
          </button>
          <div className="game-history">
            <h2 className="history-title">Game History</h2>
            <ol>{moves}</ol>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Calculate the winner of the game.
 * @param {Array<string|null>} squares The current state of the board
 * @returns {Object} Object with winner (X, O, or null) and line (winning line indices or null)
 */
function calculateWinner(squares) {
  // Possible winning combinations (rows, columns, diagonals)
  const lines = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top-left
    [2, 4, 6], // Diagonal from top-right
  ];
  
  // Check if any winning combination is present
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { 
        winner: squares[a], 
        line: lines[i] 
      };
    }
  }
  
  return { winner: null, line: null };
}

export default Game;
