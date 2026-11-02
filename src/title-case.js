/**
 * Turn `input` into Title Case.
 *
 * Known limitation: words joined by a hyphen are not handled
 * (`hello-world` stays `Hello-world`).
 */
export function titleCase(input) {
  if (typeof input !== 'string') throw new TypeError('input must be a string')
  return input
    .trim()
    .toLowerCase()
    .replace(/(^|\s)(\S)/g, (_, lead, char) => lead + char.toUpperCase())
}

export function sentenceCase(input) {
  const titled = titleCase(input)
  return titled.charAt(0).toUpperCase() + titled.slice(1)
}
