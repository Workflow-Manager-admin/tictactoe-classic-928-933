import React from 'react';

// PUBLIC_INTERFACE
/**
 * PlayerInfo component displays information about the current player.
 * @param {Object} props Component props
 * @param {boolean} props.xIsNext Whether it's X's turn
 * @returns {JSX.Element} The rendered PlayerInfo component
 */
function PlayerInfo({ xIsNext }) {
  const playerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '15px'
  };

  const indicatorStyle = {
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    backgroundColor: xIsNext ? 'var(--x-color)' : 'var(--o-color)',
    boxShadow: '0 0 8px 0px rgba(255, 255, 255, 0.5)'
  };

  const currentPlayer = xIsNext ? 'X' : 'O';
  const playerColor = xIsNext ? 'teal' : 'orange';

  return (
    <div className="player-info" style={playerStyle}>
      <div style={indicatorStyle}></div>
      <span>Player <strong style={{color: xIsNext ? 'var(--x-color)' : 'var(--o-color)'}}>{currentPlayer}</strong>'s turn</span>
    </div>
  );
}

export default PlayerInfo;
