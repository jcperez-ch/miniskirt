import { diff } from './diff'

export const union = (arrayOne, arrayTwo) => arrayOne.concat(diff(arrayTwo, arrayOne))
