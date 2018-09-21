# Miniskirt

Lightweight ES2016 object and array operations lodash alternative.
Features:
- Lightweight
- Modularized
- Immutable

## Instalation

Just as the any other packaged registered in npm:

```
npm i -S miniskirt
```
or
```
yarn miniskirt
```

## Transpile Dependencies

By default miniskirt doesn't come transpiled to ES5, so you would need a transpiler like babel in order to [transform it](https://gist.github.com/developit/081148d83348ebe9a1bc1ba0707e1bb8).


## API

### Arrays Only

#### Chunk

```typescript
const chunk: (array: any[], size: number) => any[any[]];
```

Splits a source array into multiple arrays given a specified size:

```javascript
import { chunk } from 'miniskirt';

chunk([0, 1, 2, 3, 4], 2)
// --> [[0, 1], [2, 3], [3, 4]]

chunk([0, 1, 2, 3, 4], 6)
// --> [[0, 1, 2, 3, 4]]
```

#### Compact

```typescript
const compact: (array: any[]) => any[];
```

Removes falsey items from an array and alternatively removes empty objects and empty arrays:

```javascript
import { compact } from 'miniskirt';

compact([0, 1, 2, true, false, [], NaN, 'string', ''])
// --> [1, 2, true, [], 'string']

compact([0, 1, 2, true, false, [], NaN, 'string', ''], true)
// --> [1, 2, true, 'string']
```

#### Diff

```typescript
const diff: (arrayOne: any[], arrayTwo: any[]) => any[];
```

Performs an array substraction from two arrays, the resulted array will contain the elements of the first array minus the elements of the second array:

```javascript
import { diff } from 'miniskirt';

diff([1,2,3,4], [1,3,5,7,9])
// --> [2, 4]

diff([], ['a', 'b', 'c'])
diff([1, 2, 3], [1, 2, 3, 4])
// --> []

diff(['a', 'b', 'c'], [])
// --> ['a', 'b', 'c']
```

#### Duplicates

```typescript
const duplicates = (arrayOne: any[], arrayTwo: any[]) => any[];
```

Performs an array intersection from two arrays, the resulted array will contain the elements that are present in both source arrays:

```javascript
import { duplicates } from 'miniskirt';

duplicates([1, 2, 3], [0, 2, 4])
// --> [2]
```

#### Flatten

```typescript
const flatten: (array: any[]) => any[];
```

Merges shallowly all the elements of the arrays including in the input array.

```javascript
import { flatten } from 'miniskirt';

flatten([0, 1, 2, [3, 4, 5], [6, 7, [8, 9], 10], 11])
// --> [0, 1, 2, 3, 4, 5, 6, 7, [8, 9], 10, 11]
```

In order to flatten an array at deeper levels, deepFlatten should be used instead

#### Deep Flatten

```typescript
const deepFlatten: (array: any[]) => any[]
```

Merges deeply all the elements of the arrays including in the input array.

```javascript
import { deepFlatten } from 'miniskirt';

deepFlatten([0, 1, 2, [3, 4, 5], [6, 7, [8, 9], 10], 11])
// --> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
```

### Arrays and Objects

#### Every

```typescript
type ArrayShortrCircuitFn = (
  array: any[],
  fn: (value: any, key: number, array: any[]) => boolean
) => boolean;
type ObjectShortrCircuitFn = (
  object: any,
  fn: (value: any, key: String, object: any) => boolean
) => boolean;
const every: ArrayShortrCircuitFn | ObjectShortrCircuitFn;
```

Returns `true` or `false` if all the elements of a collection satisfy to the value returned by a function.  It uses Array.prototype.every in case of the requested collection is an Array

```javascript
import { every } from 'miniskirt';

// equivalent to [4, 5, 6, 7].every(v => typeof v === 'number')
every([4, 5, 6, 7], v => typeof v === 'number')
// --> true

every([4, '5', 6, 7], v => typeof v === 'number')
// --> false

every({ one: 1, two: 2, three: 3 }, v => typeof v === 'number')
// --> true

every({ one: 1, two: 2, three: 3 }, (_, k) => k.charAt(0) === 't')
// --> false
```