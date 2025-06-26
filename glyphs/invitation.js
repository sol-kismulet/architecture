const Invitation = {
  name: 'invitation',
  render: (opts = {}) => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 100 60');
    svg.innerHTML = `
      <rect x="5" y="5" width="90" height="50" rx="5" ry="5" stroke="white" fill="none" stroke-width="2"/>
      <polyline points="5,5 50,35 95,5" stroke="white" fill="none" stroke-width="2"/>
    `;
    svg.classList.add('glyph', 'glyph-invitation');
    return svg;
  }
};

export default Invitation;
