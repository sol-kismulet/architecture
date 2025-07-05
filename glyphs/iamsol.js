export default {
  name: 'iamsol',
  render: (opts = {}) => {
    const canvas = document.createElement('canvas')
    const width = opts.width || 300
    const height = opts.height || width
    canvas.width = width
    canvas.height = height
    canvas.classList.add('glyph', 'glyph-iamsol')

    const ctx = canvas.getContext('2d')

    let animationFrame
    const baseRadius = Math.min(width, height) * 0.3
    const maxJitter = baseRadius * 0.1

    function draw(t) {
      const time = t / 1000
      const radius = baseRadius + Math.sin(time) * maxJitter
      ctx.clearRect(0, 0, width, height)

      const cx = width / 2
      const cy = height / 2
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius)
      gradient.addColorStop(0, 'rgba(255, 204, 0, 1)')
      gradient.addColorStop(0.6, 'rgba(255, 153, 0, 0.8)')
      gradient.addColorStop(1, 'rgba(255, 102, 0, 0)')

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)
    }

    function animate(t) {
      draw(t)
      animationFrame = requestAnimationFrame(animate)
    }
    animate(0)

    canvas.cleanup = () => cancelAnimationFrame(animationFrame)

    return canvas
  }
}
