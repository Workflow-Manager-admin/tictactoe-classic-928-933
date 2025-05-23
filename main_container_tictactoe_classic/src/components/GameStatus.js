import React from 'react';

// PUBLIC_INTERFACE
/**
 * GameStatus component displays the current status of the game.
 * @param {Object} props Component props
 * @param {string} props.status The status message to display
 * @param {boolean} props.isWinner Whether there is a winner
 * @returns {JSX.Element} The rendered GameStatus component
 */
function GameStatus({ status, isWinner }) {
  return (
    <div className={`status ${isWinner ? 'winner' : ''}`}>
      {status}
    </div>
  );
}

export default GameStatus;
