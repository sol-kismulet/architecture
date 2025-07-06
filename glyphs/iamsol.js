export default {
  name: 'iamsol',
  behavior: {
    identity: 'Sol',
    presence: 'glowing warmth',
    gesture: 'radiant expansion',
    motion: 'breathing light',
    meaning: 'illumination'
  },
  render: (opts = {}) => {
    const size = opts.size || 300
    const img = document.createElement('img')
    img.src = '../assets/sol-preview.png'
    img.alt = 'Sol glyph'
    img.width = size
    img.height = size
    img.classList.add('glyph', 'glyph-iamsol')
    return img
  }
}
