const { input, calculateFuel } = require('./shared')

result = input.reduce((acc, cur) => {
  while ((cur = calculateFuel(cur)) > 0) {
     acc += cur
  }
  return acc;
}, 0)

console.log(result)

 



