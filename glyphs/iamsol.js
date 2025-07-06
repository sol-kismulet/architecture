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
    const canvas = document.createElement('canvas')
    canvas.width = size
    canvas.height = size
    canvas.classList.add('glyph', 'glyph-iamsol')

    const ctx = canvas.getContext('2d')
    let angle = 0

    function draw() {
      ctx.clearRect(0, 0, size, size)
      const now = Date.now()
      const baseRadius = size * 0.3
      const pulse = Math.sin(now / 800) * (size * 0.03)
      const radius = baseRadius + pulse

      const grad = ctx.createRadialGradient(size / 2, size / 2, radius * 0.2, size / 2, size / 2, radius)
      grad.addColorStop(0, '#fff8b0')
      grad.addColorStop(1, '#fca85d')

      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.arc(size / 2, size / 2, radius, 0, Math.PI * 2)
      ctx.fill()

      const rayCount = 12
      const rayLen = size * 0.45
      ctx.lineWidth = 3
      ctx.strokeStyle = '#ffe599'

      ctx.save()
      ctx.translate(size / 2, size / 2)
      ctx.rotate(angle)
      for (let i = 0; i < rayCount; i++) {
        ctx.beginPath()
        ctx.moveTo(0, radius)
        ctx.lineTo(0, rayLen)
        ctx.stroke()
        ctx.rotate((Math.PI * 2) / rayCount)
      }
      ctx.restore()

      angle += 0.01
      requestAnimationFrame(draw)
    }

    draw()
    return canvas
  }
}
