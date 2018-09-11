export const get = (reference, selector, defaultValue) => {
  if (typeof reference === 'object' && Object.keys(reference).length) {
    if (reference[selector]) {
      return reference[selector]
    }
    const [token, ...newSelector] = selector.split('.')
    const newReference = reference[token]
    if (typeof newReference === 'object' && Object.keys(newReference).length) {
      return get(newReference, newSelector.join('.'), defaultValue)
    }
    return defaultValue;
  }
  return defaultValue;
}
