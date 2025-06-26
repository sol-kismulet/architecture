export default {
  name: 'spiral',
  render: (opts = {}) => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttribute('viewBox', '0 0 100 100')
    svg.setAttribute('width', opts.width || 100)
    svg.setAttribute('height', opts.height || 100)
    svg.innerHTML = `
      <path d="
        M50,50 
        m-5,0 
        a5,5 0 1,0 10,0 
        a10,10 0 1,0 -20,0 
        a15,15 0 1,0 30,0 
        a20,20 0 1,0 -40,0 
        a25,25 0 1,0 50,0 
      " 
      stroke="white" fill="none" stroke-width="1.5"/>
    `
    svg.classList.add('glyph', 'glyph-spiral')
    return svg
  }
}
