export const every = (collection, everyFunction, thisArg) =>
  Array.isArray(collection)
    ? collection.every(everyFunction, thisArg)
    : typeof collection === 'object' && Object.keys(collection).length
    ? Object.keys(collection).every((k) => everyFunction(collection[k], k, collection), thisArg)
    : !!collection
