const arrayPartitionReducer = (partitionFn) =>
  ([truthy, falsey], item, key) => partitionFn(item, key)
    ? [[...truthy, item], falsey]
    : [truthy, [...falsey, item]];
const objPartitionReducer = (partitionFn) =>
([truthy, falsey], item, key) => partitionFn(item, key)
  ? [{ ...truthy, [key]: item }, falsey]
  : [truthy, { ...falsey, [key]: item }];

export const partition = (collection, partitionFunction) => Array.isArray(collection)
  ? collection.reduce(arrayPartitionReducer(partitionFunction), [[],[]])
  : typeof collection === 'object' && Object.keys(collection).length
    ? Object.keys(collection).reduce((acc, k) => objPartitionReducer(partitionFunction)(acc, collection[k], k), [{}, {}])
    : !!collection ? [[collection], []] : [[], collection]