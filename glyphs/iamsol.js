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
    const size = opts.size || 400
    const canvas = document.createElement('canvas')
    canvas.width = size
    canvas.height = size
    canvas.classList.add('glyph', 'glyph-iamsol')

    const ctx = canvas.getContext('2d')

    let frameId
    const sunRadius = size * 0.25
    const flareCount = 20
    const flares = []

    for (let i = 0; i < flareCount; i++) {
      flares.push({
        angle: (i / flareCount) * Math.PI * 2,
        length: sunRadius * (1.2 + Math.random() * 0.6),
        offset: Math.random() * Math.PI * 2,
        speed: 0.002 + Math.random() * 0.003
      })
    }

    function draw(t = 0) {
      const time = t
      ctx.clearRect(0, 0, size, size)
      ctx.fillStyle = 'black'
      ctx.fillRect(0, 0, size, size)

      const cx = size / 2
      const cy = size / 2

      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, sunRadius)
      glow.addColorStop(0, 'rgba(255,210,0,1)')
      glow.addColorStop(0.7, 'rgba(255,165,0,0.8)')
      glow.addColorStop(1, 'rgba(255,130,0,0)')

      ctx.fillStyle = glow
      ctx.beginPath()
      ctx.arc(cx, cy, sunRadius, 0, Math.PI * 2)
      ctx.fill()

      ctx.save()
      ctx.translate(cx, cy)
      ctx.strokeStyle = 'rgba(255,200,0,0.6)'
      ctx.lineWidth = 2

      flares.forEach(f => {
        const ang = f.angle + time * f.speed + f.offset
        const len = f.length + Math.sin(time * 0.004 + f.offset) * sunRadius * 0.2
        ctx.beginPath()
        ctx.moveTo(Math.cos(ang) * sunRadius * 0.9, Math.sin(ang) * sunRadius * 0.9)
        ctx.lineTo(Math.cos(ang) * len, Math.sin(ang) * len)
        ctx.stroke()
      })

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
