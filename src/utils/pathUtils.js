// Tiny helper used everywhere in the Styling tab.
// It lets every input just say "which path in the state tree do I control?"
// e.g. setByPath(styling, ['ctaButton', 'colors', 'background'], '#ff0000')
// instead of every single field needing its own hand-written setter function.

export function getByPath(obj, path) {
  return path.reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
}

export function setByPath(obj, path, value) {
  if (path.length === 0) return value;
  const [head, ...rest] = path;
  const clone = Array.isArray(obj) ? [...obj] : { ...obj };
  clone[head] = setByPath(obj ? obj[head] : undefined, rest, value);
  return clone;
}
