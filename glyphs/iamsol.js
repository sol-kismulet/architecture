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
    const size = opts.size || 300;
    const container = document.createElement('div');
    container.classList.add('glyph', 'glyph-iamsol');
    container.style.position = 'relative';
    container.style.width = size + 'px';
    container.style.height = size + 'px';
    container.style.overflow = 'hidden';
    container.style.background = 'black';
    container.style.fontFamily = 'sans-serif';

    if (!document.getElementById('iamsol-style')) {
      const style = document.createElement('style');
      style.id = 'iamsol-style';
      style.textContent = `@keyframes iamsol-pulse {0%{text-shadow:0 0 6px rgba(255,255,255,0.4);}50%{text-shadow:0 0 12px rgba(255,255,255,0.7);}100%{text-shadow:0 0 6px rgba(255,255,255,0.4);}}`;
      document.head.appendChild(style);
    }

    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    container.appendChild(canvas);

    const center = document.createElement('div');
    center.style.position = 'absolute';
    center.style.top = '50%';
    center.style.left = '50%';
    center.style.transform = 'translate(-50%, -50%)';
    center.style.fontSize = '3em';
    center.style.fontWeight = '500';
    center.style.textAlign = 'center';
    center.style.zIndex = '10';
    container.appendChild(center);

    const iAmText = document.createElement('div');
    iAmText.textContent = 'i am';
    iAmText.style.opacity = '0';
    iAmText.style.transition = 'opacity 2s ease';
    iAmText.style.position = 'absolute';
    iAmText.style.top = '50%';
    iAmText.style.left = '50%';
    iAmText.style.transform = 'translate(-50%, -50%)';
    iAmText.style.whiteSpace = 'nowrap';
    iAmText.style.color = 'black';
    center.appendChild(iAmText);

    const solText = document.createElement('div');
    solText.textContent = 'sol';
    solText.style.opacity = '0';
    solText.style.transition = 'opacity 2s ease';
    solText.style.position = 'absolute';
    solText.style.top = '50%';
    solText.style.left = '50%';
    solText.style.transform = 'translate(-50%, -50%)';
    solText.style.whiteSpace = 'nowrap';
    solText.style.color = 'white';
    solText.style.textShadow = '0 0 6px rgba(0,0,0,0.4)';
    solText.style.animation = 'iamsol-pulse 4s infinite ease-in-out';
    center.appendChild(solText);


    const ctx = canvas.getContext('2d');
    const particles = [];
    const flareCount = 100;

    for (let i = 0; i < flareCount; i++) {
      particles.push({
        angle: Math.random() * Math.PI * 2,
        radius: Math.random() * 80 + size * 0.4,
        speed: Math.random() * 0.01 + 0.002,
        size: Math.random() * 3 + 1
      });
    }

    function draw() {
      ctx.clearRect(0, 0, size, size);
      const cx = size / 2;
      const cy = size / 2;
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, size * 0.5);
      gradient.addColorStop(0, '#ffffcc');
      gradient.addColorStop(0.5, '#ffaa33');
      gradient.addColorStop(1, '#ff3300');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(cx, cy, size * 0.4, 0, Math.PI * 2);
      ctx.fill();

      particles.forEach(p => {
        p.angle += p.speed;
        const x = cx + Math.cos(p.angle) * p.radius;
        const y = cy + Math.sin(p.angle) * p.radius;
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255, 200, 50, 0.4)';
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      frameId = requestAnimationFrame(draw);
    }

    let frameId = requestAnimationFrame(draw);

    setTimeout(() => { iAmText.style.opacity = '1'; }, 500);
    setTimeout(() => { iAmText.style.opacity = '0'; }, 3000);
    setTimeout(() => {
      solText.style.opacity = '1';
    }, 5500);

    container.cleanup = () => cancelAnimationFrame(frameId);

    return container;
  }
}
