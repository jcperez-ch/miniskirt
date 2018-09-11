export const chunk = (array, size) =>
  array.reduce((chunks, _, i) => (
    i % size === 0
      ? [ ...chunks, array.slice(i, i + size)]
      : chunks
  ), []);