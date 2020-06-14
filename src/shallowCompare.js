export const deep_compare = (objectOne, objectTwo) => {
  if (objectOne === null || typeof objectOne !== 'object' || objectTwo === null || typeof objectTwo !== 'object') {
    return false
  }

  const objectOneProps = Object.getOwnPropertyNames(objectOne)
  const objectTwoProps = Object.getOwnPropertyNames(objectTwo)

  if (objectOneProps.length !== objectTwoProps.length) {
    return false
  }

  for (let i = 0, len = objectOneProps.length; i < len; i++) {
    let propName = objectOneProps[i]

    if (objectOne[propName] !== objectTwo[propName]) {
      return false
    }
  }

  return true
}
