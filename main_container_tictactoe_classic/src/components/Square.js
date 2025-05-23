import React from 'react';

// PUBLIC_INTERFACE
/**
 * Square component represents an individual cell in the TicTacToe game board.
 * @param {Object} props Component props
 * @param {string|null} props.value The value to display (X, O, or null)
 * @param {Function} props.onClick Function to call when the square is clicked
 * @returns {JSX.Element} The rendered Square component
 */
function Square({ value, onClick }) {
  return (
    <button 
      className="square" 
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Square;
