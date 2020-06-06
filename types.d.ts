type ShortCircuitIteratorFn = (value: any, key: number, array: any[]) => boolean
type ObjectShortCircuitIteratorFn = (value: any, key: String, object: any) => boolean
type ArrayTransformFn = (array: any[]) => any[]

export type ArrayShortrCircuitFn = (array: any[], fn: ShortCircuitIteratorFn) => boolean
export type ObjectShortrCircuitFn = (object: any, fn: ObjectShortCircuitIteratorFn) => boolean

export const chunk: (array: any[], size: number) => any[][]
export const compact: ArrayTransformFn
export const deep_compare: (objectOne: any, objectTwo: any) => boolean
export const diff: (arrayOne: any[], arrayTwo: any[]) => any[]
export const duplicates: (arrayOne: any[], arrayTwo: any[]) => any[]
export const every: ArrayShortrCircuitFn | ObjectShortrCircuitFn
export const deepFlatten: ArrayTransformFn
export const flatten: ArrayTransformFn
export const identity: <U>(reference: U) => U
export const isNil: (reference: any) => boolean
export const isNull: (reference: any) => boolean
export const times: (number: number, callback: (n: number) => any) => void
