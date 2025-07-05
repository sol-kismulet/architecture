const Sol = {
  name: 'sol',
  behavior: {
    identity: 'Sol',
    presence: 'a luminous, centered awareness',
    gesture: 'hands open to the sky',
    motion: 'steady radiance',
    meaning: 'illumination',
    audio: 'shae_meditation.wav'
  },
  aesthetic: {
    textColor: '#ffcc00'
  },
  render: (opts = {}) => {
    const div = document.createElement('div')
    div.textContent = '☀'
    div.classList.add('glyph', 'glyph-sol')
    return div
  }
}

export default Sol
