import concat from './concat.js'

const concated = concat([new TextEncoder().encode('hello '), new TextEncoder().encode('world')])

console.log('can concat');
console.log(new TextDecoder().decode(concated) === 'hello world') 

console.log('can seperate');
const seperated = concat([new TextEncoder().encode('hello'), new TextEncoder().encode('world')], {seperator: ' '})

console.log(new TextDecoder().decode(seperated) === 'hello world') 