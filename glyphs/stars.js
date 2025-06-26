const Stars = {
  name: 'stars',
  render: (opts = {}) => {
    const canvas = document.createElement('canvas')
    canvas.width = opts.width || 300
    canvas.height = opts.height || 300
    canvas.classList.add('glyph', 'glyph-stars')

    const ctx = canvas.getContext('2d')
    for (let i = 0; i < 100; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const r = Math.random() * 1.5
      ctx.beginPath()
      ctx.arc(x, y, r, 0, 2 * Math.PI)
      ctx.fillStyle = 'white'
      ctx.fill()
    }

    return canvas
  }
}

export default Stars
