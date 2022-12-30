export default (input, options = {length: undefined, seperator: undefined}) => {
  if (!options) options = {}
  
  if (typeof options.seperator === 'string') 
    options.seperator = new TextEncoder().encode(options.seperator)

  const length = options.length || input.reduce((total, current, i) => {
    total += current.length
    if (options.seperator && input.length - 1 > i) total+= options.seperator.length
    return total
  }, 0)
  
  const typedArray = new Uint8Array(length)

  let currentIndex = 0
  let index = 0
  for (const source of input) {
    typedArray.set(source, currentIndex)
    if (options.seperator && input.length - 1 > index) {
      typedArray.set(options.seperator, currentIndex + source.length)
      currentIndex+= options.seperator.length
    }
    currentIndex += source.length
    index += 1
  }

  return typedArray
}