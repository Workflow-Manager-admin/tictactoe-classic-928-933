import React, { useState, useEffect } from 'react';

// PUBLIC_INTERFACE
/**
 * Confetti component for celebrating when a player wins.
 * @param {Object} props Component props
 * @param {boolean} props.show Whether to show the confetti
 * @returns {JSX.Element|null} The rendered Confetti component or null
 */
function Confetti({ show }) {
  const [particles, setParticles] = useState([]);
  
  // Generate confetti particles when shown
  useEffect(() => {
    if (show) {
      const newParticles = [];
      const colors = [
        '#E87A41', // Kavia orange
        '#4ECDC4', // Teal for X
        '#FFFFFF', // White
        '#FFD166', // Gold
        '#FF5E5B'  // Bright red
      ];
      
      // Create 100 confetti particles
      for (let i = 0; i < 100; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: -10 - Math.random() * 40,
          size: 5 + Math.random() * 7,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          speed: 2 + Math.random() * 2
        });
      }
      
      setParticles(newParticles);
      
      // Clean up after 5 seconds
      const timer = setTimeout(() => {
        setParticles([]);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [show]);
  
  if (!show || particles.length === 0) {
    return null;
  }
  
  return (
    <div className="confetti-container">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="confetti-particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size * 0.6}px`,
            backgroundColor: particle.color,
            transform: `rotate(${particle.rotation}deg)`,
            animation: `fall ${5 + Math.random() * 5}s linear forwards`
          }}
        />
      ))}
    </div>
  );
}

export default Confetti;
