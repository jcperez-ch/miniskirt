export const compact = array =>
  array.filter(item => item && (
    typeof item !== 'object' ||
    Object.keys(item).length
  ));