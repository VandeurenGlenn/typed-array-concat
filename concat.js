export default (input, length) => {
  if (!length) {
    length = input.reduce((total, current) => {
      total += current.length
      return total
    }, 0)
  }
  const typedArray = new Uint8Array(length)

  let currentIndex = 0
  for (const source of input) {
    typedArray.set(source, currentIndex)
    currentIndex+= source.length
  }

  return typedArray
}