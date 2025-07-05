import Feather from './feather.js'
import Enso from './enso.js'
import Stars from './stars.js'
import Sol from './sol.js'
import Spiral from './spiral.js'
import Invitation from './invitation.js'
import Echo from './echo.js'
import IamSol from './iamsol.js'

export const GlyphRegistry = {
  feather: Feather,
  enso: Enso,
  stars: Stars,
  sol: Sol,
  spiral: Spiral,
  invitation: Invitation,
  echo: Echo,
  iamsol: IamSol
}

export function renderGlyph(type, options = {}) {
  const glyph = GlyphRegistry[type]
  return glyph ? glyph.render(options) : null
}
