import concat from './concat.js'

const concated = concat([new TextEncoder().encode('hello '), new TextEncoder().encode('world')])