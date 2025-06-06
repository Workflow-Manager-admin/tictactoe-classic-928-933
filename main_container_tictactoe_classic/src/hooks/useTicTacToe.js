import { useState, useEffect } from 'react';
import Sound from '../utils/Sound';

/**
 * Custom hook to manage TicTacToe game state and logic
 * @returns {Object} Game state and functions
 */
function useTicTacToe() {
  // Initialize state for the game
  const [history, setHistory] = useState([{
    squares: Array(9).fill(null),
  }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  
  // Get current board state
  const current = history[stepNumber];
  
  /**
   * Handle square click
   * @param {number} i Index of square that was clicked
   */
  const handleClick = (i) => {
    // Get history up to current step
    const historyCurrent = history.slice(0, stepNumber + 1);
    
    // Create a copy of the current squares array
    const squaresCopy = [...current.squares];
    
    // Return early if the game is won or the square is already filled
    if (calculateWinner(squaresCopy).winner || squaresCopy[i]) {
      return;
    }
    
    // Set the value of the clicked square to X or O
    const playerMark = xIsNext ? 'X' : 'O';
    squaresCopy[i] = playerMark;
    
    // Play move sound
    Sound.playMove(playerMark);
    
    // Update state
    setHistory([...historyCurrent, { squares: squaresCopy }]);
    setStepNumber(historyCurrent.length);
    setXIsNext(!xIsNext);
  };
  
  /**
   * Jump to a specific move in history
   * @param {number} step The step number to jump to
   */
  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext((step % 2) === 0);
  };
  
  /**
   * Reset the game to initial state
   */
  const resetGame = () => {
    setHistory([{
      squares: Array(9).fill(null),
    }]);
    setStepNumber(0);
    setXIsNext(true);
  };
  
  // Calculate game status
  const { winner, line } = calculateWinner(current.squares);
  const isDraw = !winner && current.squares.every(square => square !== null);
  
  // Play sound effects when game ends
  useEffect(() => {
    if (winner) {
      Sound.playWin();
    } else if (isDraw) {
      Sound.playDraw();
    }
  }, [winner, isDraw]);
  
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isDraw) {
    status = 'Game ended in a draw!';
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }
  
  return {
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
  };
}

/**
 * Calculate the winner of the game
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

export default useTicTacToe;
