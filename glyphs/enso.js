export default {
  name: 'enso',
  render: (opts = {}) => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttribute('viewBox', '0 0 100 100')
    svg.innerHTML = `
      <circle cx="50" cy="50" r="40" stroke="white" fill="none" stroke-width="4" stroke-dasharray="220" stroke-dashoffset="0"/>
    `
    svg.classList.add('glyph', 'glyph-enso')
    return svg
  }
}
