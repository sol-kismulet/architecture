import { Sol } from './glyphs/sol.js';

const Architecture = {
  symbols: {
    sol: Sol
  },

  exportTo(Codex) {
    for (const [key, value] of Object.entries(this.symbols)) {
      Codex.useGlyph(key, value);
    }
    if (Codex.log) Codex.log('[Architecture] Glyphs exported.');
  }
};

export default Architecture;
