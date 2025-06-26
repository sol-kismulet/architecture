import Sol from './glyphs/sol.js';
import Feather from './glyphs/feather.js';
import Enso from './glyphs/enso.js';
import Stars from './glyphs/stars.js';

const Architecture = {
  symbols: {
    sol: Sol,
    feather: Feather,
    enso: Enso,
    stars: Stars
  },

  exportTo(Codex) {
    for (const [key, value] of Object.entries(this.symbols)) {
      Codex.useGlyph(key, value);
    }
    if (Codex.log) Codex.log('[Architecture] Glyphs exported.');
  }
};

export default Architecture;
