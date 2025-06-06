import React from 'react';
import Square from './Square';

// PUBLIC_INTERFACE
/**
 * Board component renders the 3x3 grid of squares for the TicTacToe game.
 * @param {Object} props Component props
 * @param {Array<string|null>} props.squares Array of 9 elements representing the board state
 * @param {Function} props.onClick Function to call when a square is clicked, with the square index
 * @param {Array<number>|null} props.winningLine Array of indices that form the winning line, or null
 * @returns {JSX.Element} The rendered Board component
 */
function Board({ squares, onClick, winningLine }) {
  const renderSquare = (i) => {
    const isWinningSquare = winningLine && winningLine.includes(i);
    
    return (
      <Square
        key={i}
        value={squares[i]}
        onClick={() => onClick(i)}
        isWinningSquare={isWinningSquare}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;
