export const diff = (arrayOne, arrayTwo) =>
  arrayOne.filter(value =>
      !arrayTwo.includes(value))