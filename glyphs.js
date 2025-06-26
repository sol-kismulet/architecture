import { Feather } from './glyphs/feather.js'
import { Enso } from './glyphs/enso.js'
import { Stars } from './glyphs/stars.js'
import { Sol } from './glyphs/sol.js'

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
