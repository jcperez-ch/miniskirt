export const reduce = (collection, reduceFunction, seed) => Array.isArray(collection)
? collection.reduce(reduceFunction, seed)
: typeof collection === 'object' && Object.keys(collection).length
  ? Object.keys(collection).reduce((acc, k) => reduceFunction(acc, collection[k], k), seed)
  : seed