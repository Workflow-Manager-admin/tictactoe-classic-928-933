import React, { useState } from 'react';
import Board from './Board';

// PUBLIC_INTERFACE
/**
 * Game component manages the state and logic for the TicTacToe game.
 * @returns {JSX.Element} The rendered Game component
 */
function Game() {
  // Initialize state for the game
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  
  /**
   * Handle a square click.
   * @param {number} i Index of the clicked square
   */
  const handleClick = (i) => {
    // Create a copy of the squares array
    const squaresCopy = squares.slice();
    
    // Return early if the game is won or the square is already filled
    if (calculateWinner(squaresCopy) || squaresCopy[i]) {
      return;
    }
    
    // Set the value of the clicked square to X or O
    squaresCopy[i] = xIsNext ? 'X' : 'O';
    
    // Update state
    setSquares(squaresCopy);
    setXIsNext(!xIsNext);
  };
  
  /**
   * Reset the game to initial state
   */
  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };
  
  // Calculate the game status
  const winner = calculateWinner(squares);
  let status;
  
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (squares.every((square) => square !== null)) {
    status = 'Game ended in a draw!';
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }
  
  return (
    <div className="game">
      <h1 className="title">Tic Tac Toe</h1>
      <div className="game-board">
        <Board 
          squares={squares} 
          onClick={handleClick} 
        />
      </div>
      <div className="game-info">
        <div className="status">{status}</div>
        <button className="btn reset-button" onClick={resetGame}>
          Reset Game
        </button>
      </div>
    </div>
  );
}

/**
 * Calculate the winner of the game.
 * @param {Array<string|null>} squares The current state of the board
 * @returns {string|null} The winner (X or O) or null if there's no winner
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
      return squares[a];
    }
  }
  
  return null;
}

export default Game;
