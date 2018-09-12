export const some = (collection, someFunction, thisArg) => Array.isArray(collection)
    ? collection.some(someFunction, thisArg)
    : typeof collection === 'object' && Object.keys(collection).length
      ? Object.keys(collection).some(k => someFunction(collection[k], k, collection), thisArg)
      : !!collection;
  