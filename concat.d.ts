declare module '@vandeurenglenn/typed-array-concat' {
  /**
   * 
   * @param input TypedArray[]
   * @param length Number
   */
  export default function (input: Uint8Array[], options?: undefined | {length: Number, seperator: String | Uint8Array}):Uint8Array 
}