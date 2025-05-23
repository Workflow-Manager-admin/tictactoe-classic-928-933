import React from 'react';

// PUBLIC_INTERFACE
/**
 * Square component represents an individual cell in the TicTacToe game board.
 * @param {Object} props Component props
 * @param {string|null} props.value The value to display (X, O, or null)
 * @param {Function} props.onClick Function to call when the square is clicked
 * @param {boolean} props.isWinningSquare Whether this square is part of the winning line
 * @returns {JSX.Element} The rendered Square component
 */
function Square({ value, onClick, isWinningSquare }) {
  const getValueClass = () => {
    if (!value) return '';
    return value === 'X' ? 'x-value' : 'o-value';
  };

  return (
    <button 
      className={`square ${getValueClass()} ${isWinningSquare ? 'winning-square' : ''}`} 
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Square;
