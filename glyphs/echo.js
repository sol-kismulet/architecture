const Echo = {
  name: 'echo',

  config: {
    seed: 'imagine',
    numechoes: 4,
    direction: 'down-right', // up, down, left, right, up-left, up-right, down-left, down-right
    fadeMode: 'light-to-dark',
    baseColor: 'rgba(0, 0, 0, 1)',
    echoColor: 'rgba(0, 0, 0, FADE)', // FADE will be replaced dynamically
    containerId: 'echo-field'
  },

  render(custom = {}) {
    const cfg = { ...this.config, ...custom }
    const container = document.getElementById(cfg.containerId)
    if (!container) return
    container.style.position = 'relative'
    container.style.fontFamily = 'Menlo, Courier, monospace'
    container.style.whiteSpace = 'pre'

    const directions = {
      up: [0, -1],
      down: [0, 1],
      left: [-1, 0],
      right: [1, 0],
      'up-left': [-1, -1],
      'up-right': [1, -1],
      'down-left': [-1, 1],
      'down-right': [1, 1]
    }
    const [dx, dy] = directions[cfg.direction]

    for (let i = 0; i <= cfg.numechoes; i++) {
      const word = document.createElement('span')
      word.innerText = cfg.seed
      word.style.position = 'absolute'
      word.style.left = `${dx * i}em`
      word.style.top = `${dy * i}em`
      word.style.opacity = 1 - i / (cfg.numechoes + 1)
      const fadeVal = cfg.fadeMode === 'light-to-dark'
        ? 1 - i / (cfg.numechoes + 1)
        : i / (cfg.numechoes + 1)
      word.style.color = cfg.echoColor.replace('FADE', fadeVal.toFixed(2))
      container.appendChild(word)
    }
  }
}

if (typeof window !== 'undefined') {
  window.Echo = Echo
}

export default Echo
