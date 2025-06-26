import { Feather } from './feather.js'
import { Enso } from './enso.js'
import { Stars } from './stars.js'
import { Sol } from './sol.js'

export const GlyphRegistry = {
  feather: Feather,
  enso: Enso,
  stars: Stars,
  sol: Sol
}

export function renderGlyph(type, options = {}) {
  const glyph = GlyphRegistry[type]
  return glyph ? glyph.render(options) : null
}
