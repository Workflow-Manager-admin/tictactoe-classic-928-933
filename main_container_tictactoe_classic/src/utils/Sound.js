// PUBLIC_INTERFACE
/**
 * Sound utility for playing game sound effects.
 * Uses Web Audio API for sound generation rather than audio files.
 */
class Sound {
  constructor() {
    // Initialize audio context only when needed (to avoid AutoPlay policy issues)
    this.audioContext = null;
  }

  /**
   * Initialize the audio context
   */
  initAudio() {
    if (this.audioContext) return;
    
    try {
      // Create AudioContext
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioContext = new AudioContext();
    } catch (e) {
      console.log('Web Audio API not supported in this browser');
    }
  }

  /**
   * Play a sound when a player makes a move
   * @param {string} player 'X' or 'O' to determine the sound pitch
   */
  playMove(player) {
    this.initAudio();
    if (!this.audioContext) return;
    
    // Create oscillator for sound generation
    const oscillator = this.audioContext.createOscillator();
    const gain = this.audioContext.createGain();
    
    // Configure sound based on player
    oscillator.type = 'sine';
    oscillator.frequency.value = player === 'X' ? 440 : 330; // A4 for X, E4 for O
    
    // Configure volume envelope
    gain.gain.setValueAtTime(0.0001, this.audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.3, this.audioContext.currentTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.audioContext.currentTime + 0.5);
    
    // Connect and play
    oscillator.connect(gain);
    gain.connect(this.audioContext.destination);
    
    oscillator.start();
    oscillator.stop(this.audioContext.currentTime + 0.5);
  }

  /**
   * Play a winning sound effect
   */
  playWin() {
    this.initAudio();
    if (!this.audioContext) return;
    
    // Play a happy arpeggio
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    
    notes.forEach((note, index) => {
      const oscillator = this.audioContext.createOscillator();
      const gain = this.audioContext.createGain();
      
      oscillator.type = 'sine';
      oscillator.frequency.value = note;
      
      gain.gain.setValueAtTime(0.0001, this.audioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.2, this.audioContext.currentTime + 0.01 + index * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioContext.currentTime + 0.5 + index * 0.1);
      
      oscillator.connect(gain);
      gain.connect(this.audioContext.destination);
      
      oscillator.start(this.audioContext.currentTime + index * 0.1);
      oscillator.stop(this.audioContext.currentTime + 0.5 + index * 0.1);
    });
  }

  /**
   * Play a sound for when the game draws
   */
  playDraw() {
    this.initAudio();
    if (!this.audioContext) return;
    
    // Play a neutral sound
    const oscillator = this.audioContext.createOscillator();
    const gain = this.audioContext.createGain();
    
    oscillator.type = 'triangle';
    oscillator.frequency.value = 220;
    
    gain.gain.setValueAtTime(0.0001, this.audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.3, this.audioContext.currentTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.audioContext.currentTime + 1.0);
    
    oscillator.connect(gain);
    gain.connect(this.audioContext.destination);
    
    oscillator.start();
    oscillator.frequency.setValueAtTime(220, this.audioContext.currentTime);
    oscillator.frequency.linearRampToValueAtTime(110, this.audioContext.currentTime + 1.0);
    oscillator.stop(this.audioContext.currentTime + 1.0);
  }
}

export default new Sound();
