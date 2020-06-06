export const deep_compare = (objectOne, objectTwo) => {
  if (typeof objectOne !== 'object' || typeof objectTwo !== 'object') {
    return false
  }

  let objectOneProps = Object.getOwnPropertyNames(objectOne)
  let objectTwoProps = Object.getOwnPropertyNames(objectTwo)

  if (objectOneProps.length !== objectTwoProps.length) {
    return false
  }

  for (let i = 0, len = objectOneProps.length; i < len; i++) {
    var propName = objectOneProps[i]

    if (objectOne[propName] !== objectTwo[propName]) {
      return false
    }
  }

  return true
}
