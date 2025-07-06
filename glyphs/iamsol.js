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

    let frameId
    const baseRadius = size * 0.3
    const jitter = baseRadius * 0.15
    const rays = 12

    function draw(t) {
      const time = t / 1000
      ctx.clearRect(0, 0, size, size)

      const radius = baseRadius + Math.sin(time * 2) * jitter
      const cx = size / 2
      const cy = size / 2

      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius)
      gradient.addColorStop(0, 'rgba(255, 204, 0, 1)')
      gradient.addColorStop(0.7, 'rgba(255, 153, 0, 0.8)')
      gradient.addColorStop(1, 'rgba(255, 102, 0, 0)')

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, size, size)

      ctx.save()
      ctx.translate(cx, cy)
      ctx.strokeStyle = 'rgba(255, 180, 0, 0.5)'
      ctx.lineWidth = 2

      for (let i = 0; i < rays; i++) {
        const angle = (i / rays) * Math.PI * 2 + time * 0.3
        const len = radius * 1.4 + Math.sin(time * 3 + i) * jitter
        ctx.beginPath()
        ctx.moveTo(Math.cos(angle) * radius * 0.8, Math.sin(angle) * radius * 0.8)
        ctx.lineTo(Math.cos(angle) * len, Math.sin(angle) * len)
        ctx.stroke()
      }
      ctx.restore()
    }

    function loop(t) {
      draw(t)
      frameId = requestAnimationFrame(loop)
    }

    loop(0)

    canvas.cleanup = () => cancelAnimationFrame(frameId)

    return canvas
  }
}
