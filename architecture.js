const Architecture = {
  symbols: {},

  define(key, value) {
    this.symbols[key] = value;
  },

  exportTo(Codex) {
    for (const key in this.symbols) {
      Codex.inherited[key] = this.symbols[key];
    }
    if (Codex.log) Codex.log('[Architecture] Symbols exported.');
  }
};

// Define shared symbolic behaviors and aesthetics
Architecture.define('swirling_enso', {
  description: 'A rotating enso used to mark sacred thresholds, centered on a chosen element.',
  implementation: 'Drawn from enso.svg, rotates slowly on canvas, may glow or pulse.',
  trigger: 'Appears when star is ready to open or invitation is given.',
  source: 'emptiness-scroll'
});

Architecture.define('starfield', {
  description: 'Subtle animated background of shimmering stars, representing pre-form potential.',
  behavior: 'Stars fade in from blackness. One begins to glow and grow.',
  aesthetic: {
    glow_color: 'rgba(255, 255, 200, 0.8)',
    fade_in_duration: '5000ms'
  },
  source: 'emptiness-scroll'
});

Architecture.define('aesthetic', {
  rotation_origin: 'center',
  visual_mood: 'Sacred. Emergent. Present.',
  enso_svg_path: '/assets/enso.svg'
});

export default Architecture;
