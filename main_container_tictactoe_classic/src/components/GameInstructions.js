import React, { useState } from 'react';

// PUBLIC_INTERFACE
/**
 * GameInstructions component displays rules and instructions for the TicTacToe game.
 * @returns {JSX.Element} The rendered GameInstructions component
 */
function GameInstructions() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="game-instructions">
      <button 
        className="btn instructions-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Hide Instructions' : 'How to Play'}
      </button>
      
      {isOpen && (
        <div className="instructions-panel">
          <h3>How to Play Tic Tac Toe</h3>
          <ol>
            <li>The game is played on a 3×3 grid of squares</li>
            <li>Player X goes first, followed by Player O</li>
            <li>Players take turns placing their mark (X or O) in an empty square</li>
            <li>The first player to get 3 of their marks in a row (horizontally, vertically, or diagonally) wins</li>
            <li>If all 9 squares are filled and no player has 3 marks in a row, the game is a draw</li>
          </ol>
          <div className="tips">
            <h4>Strategy Tips:</h4>
            <ul>
              <li>Try to control the center square when possible</li>
              <li>Block your opponent if they have two in a row</li>
              <li>Create opportunities to win in multiple ways</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default GameInstructions;
