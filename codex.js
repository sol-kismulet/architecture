import Architecture from './architecture.js';

const Codex = {
  inherited: {},

  inherit(def) {
    for (const key in def.behavior) {
      this.inherited[key] = def.behavior[key];
    }
    for (const key in def.aesthetic) {
      this.inherited[key] = def.aesthetic[key];
    }
    this.symbol = def.symbol;
    this.log(`[Codex] Inherited from ${def.symbol}`);
  },

  get(key) {
    return this.inherited[key];
  },

  log(message) {
    console.log(`[Codex] ${message}`);
  },

  inheritFrom(source) {
    if (source === 'architecture') {
      Architecture.exportTo(this);
    }
  },

  useGlyph(name, module) {
    if (module) {
      this.inherited[name] = module;
      this.log(`[Codex] Glyph '${name}' registered.`);
    } else {
      delete this.inherited[name];
      this.log(`[Codex] Glyph '${name}' unregistered.`);
    }
  },

  listGlyphs() {
    return Object.keys(this.inherited);
  }
};

// Bind all registered glyphs from Architecture
Codex.inheritFrom('architecture');

export default Codex;
