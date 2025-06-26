const Feather = {
  name: 'feather',
  render: (opts = {}) => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttribute('viewBox', '0 0 100 100')
    svg.innerHTML = `
      <path d="M10 90 C 40 10, 70 10, 90 90" stroke="white" fill="none" stroke-width="2"/>
    `
    svg.classList.add('glyph', 'glyph-feather')
    return svg
  }
}

export default Feather
