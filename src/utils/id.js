// Small helper to generate reasonably-unique ids for list items (questions, options, conditions...)
let counter = 0;

export function genId(prefix = 'id') {
  counter += 1;
  return `${prefix}-${Date.now().toString(36)}-${counter}`;
}
