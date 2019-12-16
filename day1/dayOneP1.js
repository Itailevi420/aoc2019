const { input, calculateFuel  } = require( "./shared");

const result1 = input.reduce((acc, cur) => acc + calculateFuel(cur),0)

console.log(`This is the first answer ===>>${result1}`)
  

