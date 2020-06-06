export const deep_compare = (o1, o2) => {
  if (typeof o1 !== 'object' || typeof o2 !== 'object') {
    return false
  }

  let o1Props = Object.getOwnPropertyNames(o1)
  let o2Props = Object.getOwnPropertyNames(o2)

  if (o1Props.length !== o2Props.length) {
    return false
  }

  for (let i = 0, len = o1Props.length; i < len; i++) {
    var propName = o1Props[i]

    if (o1[propName] !== o2[propName]) {
      return false
    }
  }

  return true
}
