export default {
  name: 'spiral',
  render: (opts = {}) => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttribute('viewBox', '0 0 100 100')
    svg.setAttribute('width', opts.width || 100)
    svg.setAttribute('height', opts.height || 100)
    svg.innerHTML = `
      <circle cx="52.0" cy="50.0" r="3.0" stroke="white" fill="none" stroke-width="0.8"/>
      <circle cx="52.75" cy="54.7631" r="3.5" stroke="white" fill="none" stroke-width="0.8"/>
      <circle cx="45.5" cy="57.7942" r="4.0" stroke="white" fill="none" stroke-width="0.8"/>
      <circle cx="37.5" cy="57.2948" r="4.5" stroke="white" fill="none" stroke-width="0.8"/>
      <circle cx="30.2397" cy="53.5317" r="5.0" stroke="white" fill="none" stroke-width="0.8"/>
      <circle cx="25.455" cy="47.3545" r="5.5" stroke="white" fill="none" stroke-width="0.8"/>
      <circle cx="23.9808" cy="39.7814" r="6.0" stroke="white" fill="none" stroke-width="0.8"/>
      <circle cx="26.352" cy="32.1163" r="6.5" stroke="white" fill="none" stroke-width="0.8"/>
      <circle cx="32.6271" cy="25.8894" r="7.0" stroke="white" fill="none" stroke-width="0.8"/>
      <circle cx="41.7305" cy="22.6574" r="7.5" stroke="white" fill="none" stroke-width="0.8"/>
      <circle cx="52.4662" cy="22.8025" r="8.0" stroke="white" fill="none" stroke-width="0.8"/>
      <circle cx="62.4471" cy="26.3016" r="8.5" stroke="white" fill="none" stroke-width="0.8"/>
      <circle cx="69.7489" cy="32.5777" r="9.0" stroke="white" fill="none" stroke-width="0.8"/>
      <circle cx="73.5006" cy="40.5091" r="9.5" stroke="white" fill="none" stroke-width="0.8"/>
      <circle cx="73.3356" cy="49.0792" r="10.0" stroke="white" fill="none" stroke-width="0.8"/>
      <circle cx="69.5701" cy="57.2802" r="10.5" stroke="white" fill="none" stroke-width="0.8"/>
      <circle cx="62.5981" cy="64.0383" r="11.0" stroke="white" fill="none" stroke-width="0.8"/>
      <circle cx="52.9785" cy="68.2237" r="11.5" stroke="white" fill="none" stroke-width="0.8"/>
      <circle cx="41.4566" cy="68.4201" r="12.0" stroke="white" fill="none" stroke-width="0.8"/>
      <circle cx="29.0233" cy="63.9778" r="12.5" stroke="white" fill="none" stroke-width="0.8"/>
      <circle cx="17.0559" cy="54.9437" r="13.0" stroke="white" fill="none" stroke-width="0.8"/>
      <circle cx="7.3157" cy="42.2439" r="13.5" stroke="white" fill="none" stroke-width="0.8"/>
      <circle cx="0.997" cy="27.5587" r="14.0" stroke="white" fill="none" stroke-width="0.8"/>
      <circle cx="-0.0086" cy="13.0976" r="14.5" stroke="white" fill="none" stroke-width="0.8"/>
      <circle cx="3.8203" cy="0.6616" r="15.0" stroke="white" fill="none" stroke-width="0.8"/>
    `
    svg.classList.add('glyph', 'glyph-spiral')
    return svg
  }
}
