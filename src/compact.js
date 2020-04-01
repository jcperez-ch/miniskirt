export const compact = (array, includeEmpty = false) =>
  array.filter((item) => item && (!includeEmpty || typeof item !== 'object' || Object.keys(item).length))
