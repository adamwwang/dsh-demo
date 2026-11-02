/**
 * Turn `input` into Title Case.
 *
 * Words are split on whitespace and hyphens, so hyphenated input keeps its
 * hyphens and capitalizes each part (`hello-world` becomes `Hello-World`).
 */
export function titleCase(input) {
  if (typeof input !== 'string') throw new TypeError('input must be a string')
  return input
    .trim()
    .toLowerCase()
    .replace(/(^|[\s-]+)(\S)/g, (_, lead, char) => lead + char.toUpperCase())
}

export function sentenceCase(input) {
  const titled = titleCase(input)
  return titled.charAt(0).toUpperCase() + titled.slice(1)
}
