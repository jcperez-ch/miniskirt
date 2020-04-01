export const chunk = (array, size = 1) =>
  array.reduce((chunks, _, i) => (i % size === 0 ? [...chunks, array.slice(i, i + size)] : chunks), [])
