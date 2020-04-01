export const flatten = (array) => Array.prototype.concat.call([], ...array)

export const deepFlatten = (array) =>
  array.reduce((flat, value) => flat.concat(Array.isArray(value) ? deepFlatten(value) : value), [])
