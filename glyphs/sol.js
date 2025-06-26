const Sol = {
  name: 'sol',
  render: (opts = {}) => {
    const div = document.createElement('div')
    div.textContent = '☀'
    div.classList.add('glyph', 'glyph-sol')
    return div
  }
}

export default Sol
