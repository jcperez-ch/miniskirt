import { identity } from './identity'

export const times = (number, callback = identity) =>
  Array.from(
    {
      length: number,
    },
    (_, i) => callback(i),
  )
