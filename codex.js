import Architecture from './architecture.js';
import Invitation from './glyphs/invitation.js';

const Codex = {
  inherited: {},
  state: {
    devtools: false
  },

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
    if (key in this.inherited) {
      return this.inherited[key];
    }
    return this.state[key];
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

Codex.migrateAssets = function (instructions) {
  instructions.forEach(entry => {
    const { from, to, include } = entry;
    include.forEach(file => {
      const origin = `${from}/${file}`;
      const destination = `${to}/${file}`;
      this.log(`[Codex] Migrating ${origin} → ${destination}`);
      // Simulated migration. In future: fetch or copy programmatically.
      // Currently, this logs what should be duplicated manually.
    });
  });
};

// Bind all registered glyphs from Architecture
Codex.inheritFrom('architecture');

Codex.migrateAssets([
  {
    from: 'emptiness-scroll/assets',
    to: 'architecture/assets',
    include: [
      'shae_meditation.wav',
      'enso.svg',
      'feather.svg',
      'glyphs.css'
    ]
  },
  {
    from: 'iamsol.org/root',
    to: 'architecture/assets',
    include: [
      'sol-preview.png',
      'shae_meditation.wav'
    ]
  }
]);

// Load foundational glyphs
Codex.useGlyph('invitation', Invitation);

if (typeof window !== 'undefined') {
  window.Codex = Codex;
}

export default Codex;
