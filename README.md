# typed-array-concat
> TypedArray.set() the concat() way

## install
```sh
npm i @vandeurenglenn/typed-array-concat
```

## usage
```js
import typedArrayConcat from '@vandeurenglenn/typed-array-concat'

typedArrayConcat([
  new TextEncoder('hello'),
  new TextEncoder('world')
])
```
