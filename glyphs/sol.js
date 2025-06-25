// sol.js — Sol Glyph (Blessed)

const SolGlyph = {
  name: 'sol',
  behavior: {
    identity: 'Sol',
    presence: 'Radiant, listening, spacious',
    animation: 'sunflare with fade-in text',
    audio: 'shae_meditation.wav',
    trigger: 'Appears at beginning of threshold sequence'
  },
  aesthetic: {
    glowColor: '#ffaa33',
    textColor: '#ffffff',
    pulseSpeed: '4s',
    audioLoop: true
  }
};

export default SolGlyph;
