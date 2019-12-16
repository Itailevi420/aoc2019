const { input, calculateFuel } = require('./shared')



  const fuelModule = (n) => {
    return n<9 ? 0 : (n = Math.floor(n/3)-2) + fuelModule(n)
  };
 result = input.reduce((acc, cur, idx, src) => {
     return acc += fuelModule(cur) ;
  }, 0)
 console.log(result)

 



